import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { useCallback, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../constants/img';
import "./login.scss";

const Login = () => {
    const [checked, setChecked] = useState(false);
    const [loademail, setLoadEmail] = useState(false);
    const [activeTab, setActiveTab] = useState('1');

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: ''
        },
        onSubmit: async (values) => {
            setLoadEmail(true)
            let { data } = await axios.post(`${process.env.REACT_APP_API_URL}/login`, values);
            if (data.Success === true) {

                setTimeout(() => {
                    setLoadEmail(false)
                    navigate('/');
                    window.location.reload(); // Reload the page

                }, 1500);

            } else {
                setTimeout(() => {
                    setLoadEmail(false)
                }, 1500);
            }

        }
    });
    const onChange = useCallback((key) => {
        formik.setFieldValue("UserName", '');
        formik.setFieldTouched("UserName", false);
        setActiveTab(key);
    }, [formik, setActiveTab]);

    const items = [
        {
            key: '1',
            label: 'Account Login',
        },
    ];


    return (
        <>

            <div className="app__login  mt-8">
                <div className="app__login-left    ">
                    <header className='flex mb-4  justify-content-center  h-5rem  align-items-center gap-2'>
                        <img src={img.logo} alt="" />
                    </header>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

                    <Form
                        name="normal_login"
                        className="login-form mt-2"
                        initialValues={{ remember: true }}
                        onFinish={formik.handleSubmit}
                    >
                        <Form.Item
                            name="UserName"
                            rules={[
                                {
                                    required: true,
                                    message: activeTab == '1' ? 'Please enter your email!' : 'Please enter your phone number!'
                                },
                            ]}
                        >

                            <Input
                                size="large"
                                type={activeTab === '1' ? "email" : 'number'}
                                prefix={activeTab === '1' ? <UserOutlined className="site-form-item-icon" /> : <PhoneOutlined />}
                                placeholder={activeTab == "1" ? 'Email' : 'Phone number'}
                                id="UserName"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    formik.setFieldValue("UserName", inputValue);
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your Password!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Password"
                                size='large'
                                className='mt-2'
                                id="Password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.Password}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox onChange={e => {
                                    setChecked(e.checked)
                                }} checked={false} >Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <div className="w-100">
                                <Link to={'/'}>
                                <Button type="primary" loading={loademail} htmlType="submit" className="login-form-button w-full" >
                                    Log in
                                </Button>
                                </Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        </>
    )
}

export default Login;