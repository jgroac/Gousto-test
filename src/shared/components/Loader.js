import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';

const Loader = ({ isLoading, children }) =>
  isLoading ? <Skeleton data-testid="loader" /> : children;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Loader;
