import { createAction } from 'redux-actions';
import types from './types';
import service from '../../../shared/util/service';

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
    const response = await service.getCategories();
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
