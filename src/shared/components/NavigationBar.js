import React from 'react';
import { Link } from '@reach/router';
import { Layout, Menu } from 'antd';

const logoStyles = { width: 120, margin: '0px 16px', float: 'left', color: 'white' };

const NavigationBar = () => (
  <Layout.Header>
    <div style={logoStyles}>
      <span>
        <strong>Store Cupboard</strong>
      </span>
    </div>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Layout.Header>
);

export default NavigationBar;
