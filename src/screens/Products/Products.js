import React from 'react';
import { Layout } from 'antd';
import NavigationBar from '../Categories';
import Breadcrumbs from './components/Breadcrumbs';
import SearchBar from './components/SearchBar';

const Products = props => (
  <div>
    dashboards
    {props.categoryId}
  </div>
);

const MainContent = (props) => (
  <>
    <NavigationBar categoryId={props.categoryId} />
    <Layout.Content style={{ padding: '0 50px' }}>
      <Breadcrumbs />
      <SearchBar />
      <div style={{ background: '#fff', padding: 24, minHeight: 700 }}>
        <Products categoryId={props.categoryId} />
      </div>
    </Layout.Content>
  </>
);

export default MainContent;
