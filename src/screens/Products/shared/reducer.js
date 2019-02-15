import { handleActions } from 'redux-actions';
import types from './types';

export const initialState = {
  data: {
    entities: {
      products: {},
      categories: {}
    },
    result: []
  },
  searchTerm: '',
  isCached: false,
  isFetching: false,
  error: null
};

const reducerMap = {};

reducerMap[types.LOAD_PRODUCTS_REQUEST] = state => ({
  ...state,
  isCached: false,
  isFetching: true
});

reducerMap[types.LOAD_PRODUCTS_SUCCESS] = (state, { payload }) => ({
  ...state,
  isCached: true,
  isFetching: false,
  data: payload
});

reducerMap[types.LOAD_PRODUCTS_FAILURE] = (state, { payload }) => ({
  ...state,
  isCached: false,
  isFetching: false,
  error: payload
});

reducerMap[types.SEARCH_FOR_PRODUCT] = (state, { payload }) => ({
  ...state,
  searchTerm: payload
});

export default handleActions(reducerMap, initialState);
