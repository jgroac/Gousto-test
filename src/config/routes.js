import React from 'react';
import { Router } from '@reach/router';
import Products from '../screens/Products';
import NotFound from '../screens/NotFound';

const Routes = () => (
  <Router>
    <Products path="/" />
    <Products path="/categories/:categoryId" />
    <NotFound default />
  </Router>
);

export default Routes;
