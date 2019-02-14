import React from 'react';
import { Layout } from 'antd';
import './App.css';

import NavigationBar from './shared/components/NavigationBar';
import Breadcrumbs from './shared/components/Breadcrumbs';
import SearchBar from './shared/components/SearchBar';
import MainContent from './shared/components/MainContent';

const App = props => {
  return (
    <React.Fragment>
      <Layout>
        <NavigationBar />
        <Breadcrumbs />
        <SearchBar />
        <MainContent />
      </Layout>
    </React.Fragment>
  );
};

export default App;
