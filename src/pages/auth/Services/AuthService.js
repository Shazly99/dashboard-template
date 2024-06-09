import axios from "axios";
 
// Validate From handel Login
export const handelLogin = async (values, setLoadUserName, navigate) => {
    const url = `${process.env.REACT_APP_API_URL}/auth/login`;
    setLoadUserName(true);
    let { data } = await axios.post(url, values).catch((err) => {
        console.log(err);
        setLoadUserName(false);
    })
    
    if (data.status === 200) {
        // localStorage.setItem('tockenClick', data?.data?.token)
        // localStorage.setItem('UserName', data?.data?.name)
        // localStorage.setItem('UserUserName', data?.data?.UserName)
        // localStorage.setItem('UserPhoto', data?.data?.image)
        setTimeout(() => {
            console.log('res');
            setLoadUserName(false); 
            navigate('/')
        }, 3000);
        return { severity: 'success', summary: 'Success', detail: 'Your login has been successful' };

    } else if (data.status === 401) {
        setLoadUserName(false);
        return { severity: 'error', summary: 'Error', detail: data?.message };

    }

};

export default { 
    handelLogin
};
