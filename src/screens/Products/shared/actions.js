import { createAction } from 'redux-actions';
import axios from 'axios';
import types from './types';
import normalizers from './normalizers';

const { normalizeProducts } = normalizers;

const requestProducts = createAction(types.LOAD_PRODUCTS_REQUEST);
const ProductsOnSuccess = createAction(types.LOAD_PRODUCTS_SUCCESS);
const productsOnFailure = createAction(types.LOAD_PRODUCTS_FAILURE);

const fetchCategories = () => async (dispatch, getState) => {
  const { products } = getState();
  if (products.isCached) {
    return products.data;
  }

  dispatch(requestProducts());
  try {
    const response = await axios.get('https://api.gousto.co.uk/products/v2.0/categories');
    const normalizedData = normalizeProducts(response.data.data);
    dispatch(ProductsOnSuccess(normalizedData));
    return normalizedData;
  } catch (error) {
    dispatch(productsOnFailure(error.message));
    return error;
  }
};

export default {
  fetchCategories
};
