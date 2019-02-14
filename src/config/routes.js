import React from 'react';
import { Router } from '@reach/router';
import Products from '../screens/Products';

const Routes = () => (
  <Router>
    <Products path="/categories/:categoryId" />
  </Router>
);

export default Routes;
