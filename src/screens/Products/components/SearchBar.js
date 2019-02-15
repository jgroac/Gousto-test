import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ onChange, searchValue }) => (
  <div style={{ padding: '20px 0px' }}>
    <Search
      placeholder="Search Product"
      value={searchValue}
      onChange={e => onChange(e.target.value)}
      style={{ width: 200 }}
    />
  </div>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
};

export default SearchBar;
