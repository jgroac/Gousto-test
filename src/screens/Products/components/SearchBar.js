import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => (
  <div style={{ padding: '20px 0px' }}>
    <Search
      placeholder="Search Product"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
  </div>
);

export default SearchBar;
