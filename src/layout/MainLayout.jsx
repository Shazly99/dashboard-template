
import { Button, Layout, theme } from 'antd';
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './../components/SideBar/SideBar';
import Footers from './../components/Footer/Footer';
import Navbar from '../components/Navabar/Navbar';
import { GeneralData } from '../context/General';

const { Header, Content } = Layout;

const MainLayout = () => {
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
  let { isLang, collapsed, setCollapsed } = useContext(GeneralData)

  return (
    <Layout   >
      <SideBar collapsed={collapsed} />
      <Layout>
        <Navbar />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: '#fff',  // Light background for the content area
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
        <Footers />
      </Layout>
    </Layout>
  )
}

export default MainLayout
