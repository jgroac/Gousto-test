import { createAction } from 'redux-actions';
import types from './types';
import normalizers from './normalizers';
import service from '../../../shared/util/service';

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
    const response = await service.getProducts();
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
