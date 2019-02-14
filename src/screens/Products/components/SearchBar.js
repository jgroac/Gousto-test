import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => (
  <div style={{ padding: '20px 50px' }}>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
  </div>
);

export default SearchBar;
