import { createAction } from 'redux-actions';
import axios from 'axios';
import types from './types';
import normalizers from './normalizers';

const { normalizeProducts } = normalizers;

const requestProducts = createAction(types.LOAD_PRODUCTS_REQUEST);
const ProductsOnSuccess = createAction(types.LOAD_PRODUCTS_SUCCESS);
const productsOnFailure = createAction(types.LOAD_PRODUCTS_FAILURE);
const searchForProduct = createAction(types.SEARCH_FOR_PRODUCT);

const fetchProducts = () => async (dispatch, getState) => {
  const { products } = getState();
  if (products.isCached) {
    return products.data;
  }

  dispatch(requestProducts());
  try {
    const response = await axios.get('https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i%20mage_sizes[]=400&period_id=120%20For%20cross%20origin%20accessibility%20please');
    const normalizedData = normalizeProducts(response.data.data);
    dispatch(ProductsOnSuccess(normalizedData));
    return normalizedData;
  } catch (error) {
    dispatch(productsOnFailure(error.message));
    return error;
  }
};

const searchProduct = value => async dispatch => {
  dispatch(searchForProduct(value));
  return value;
};

export default {
  fetchProducts,
  searchProduct
};
