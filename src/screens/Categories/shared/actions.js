import { createAction } from 'redux-actions';
import axios from 'axios';
import types from './types';

const requestCategories = createAction(types.LOAD_CATEGORIES_REQUEST);
const categoriesOnSuccess = createAction(types.LOAD_CATEGORIES_SUCCESS);
const categoriesOnFailure = createAction(types.LOAD_CATEGORIES_FAILURE);

const fetchCategories = () => async (dispatch, getState) => {
  const { categories } = getState();
  if (categories.isCached) {
    return categories.data;
  }

  dispatch(requestCategories());
  try {
    const response = await axios.get('https://api.gousto.co.uk/products/v2.0/categories');
    dispatch(categoriesOnSuccess(response.data.data));
    return response.data.data;
  } catch (error) {
    dispatch(categoriesOnFailure(error.message));
    return error;
  }
};

export default {
  fetchCategories
};
