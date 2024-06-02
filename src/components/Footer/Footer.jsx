import { Footer } from 'antd/es/layout/layout'
import React from 'react'
 
 
const Footers = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
                background: '#fff',  // Light background for footer
                color: 'black',  // Text color for visibility
            }}
        >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    )
}

export default Footers
