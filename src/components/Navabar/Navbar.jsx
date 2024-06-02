import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { GeneralData } from '../../context/General';
const { Header } = Layout;
const { Option } = Select;

const Navbar = () => {
    const { collapsed, setCollapsed } = useContext(GeneralData);
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        const currentLang = i18n.language;
        const html = document.documentElement;
        html.setAttribute('lang', currentLang);
        html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    }, [i18n.language]);  // تحديث الـ dir بناءً على اللغة الحالية


    return (
        <Header className='flex justify-content-between align-content-center' style={{ background: '# ' }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ 
                }}
            />


            <Select defaultValue={i18n.language} style={{ width: 100 }} onChange={changeLanguage}>
                <Option value="en">English</Option>
                <Option value="ar">العربية</Option>
            </Select>
        </Header>
    );
};

export default Navbar;
