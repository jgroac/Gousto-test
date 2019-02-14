import './App.css';
import React from 'react';
import { Layout } from 'antd';
import Routes from './config/routes';

const App = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
