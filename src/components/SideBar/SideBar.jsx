import React, { useContext, useState } from 'react';
import { Menu, Layout, Drawer, Button } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import img from '../../constants/img';
import { GeneralData } from '../../context/General';

const { Sider } = Layout;

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label: path ? <NavLink to={path} activeClassName="active-link">{label}</NavLink> : label,
  };
}

const SideBar = ({ collapsed  }) => {


  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const {  setCollapsed, visible, setVisible } = useContext(GeneralData);
 
  const items = [
    getItem('Dashboard', '1', <PieChartOutlined />, null, '/'),
    getItem('Option 2', '2', <DesktopOutlined />, null, '/option2'),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3', null, null, '/user/tom'),
      getItem('Bill', '4', null, null, '/user/bill'),
      getItem('Alex', '5', null, null, '/user/alex'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
      getItem('Team 1', '6', null, null, '/team/team1'),
      getItem('Team 2', '8', null, null, '/team/team2'),
    ]),
    getItem('Files', '9', <FileOutlined />, null, '/files'),
  ];



  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <>
      {isMobile ? (
        <div>
          {/* <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} /> */}
          <Drawer
            title="مصنع أغذية الخليج للتموين"
            placement="left"
            onClose={closeDrawer}
            visible={visible}
            bodyStyle={{ padding: 0 }}
            size='small'
          >
            <Menu
              theme="light"
              defaultSelectedKeys={['1']}
              mode="inline"
              items={items}
            />
          </Drawer>
        </div>
      ) : (
        <Sider 
          style={{
            padding: 0,
            background: '#fff',
            position: 'fixed',
            height: '100vh',
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(collapse) => setCollapsed(collapse)}
        >
          <div className="demo-logo-vertical">
            <Link to={'/'}>
              <img src={!collapsed ? img.logo : img.logoSm} alt="" width={!collapsed ? 150 : 40} />
            </Link>
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
      )}
    </>
  );
};

export default SideBar;
