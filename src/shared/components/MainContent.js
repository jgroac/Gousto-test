import React from 'react';
import { Router } from '@reach/router';
import { Layout } from 'antd';

const Home = () => <div>hello</div>;
const Dashboard = () => <div>dashboard</div>;

const MainContent = () => (
  <Layout.Content style={{ padding: '0 50px' }}>
    <div style={{ background: '#fff', padding: 24, minHeight: 700 }}>
      <Router>
        <Home path="/" />
        <Dashboard path="dashboard" />
      </Router>
    </div>
  </Layout.Content>
);

export default MainContent;
