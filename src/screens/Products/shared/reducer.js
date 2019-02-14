import { handleActions } from 'redux-actions';
import types from './types';

export const initialState = {
  data: {},
  isCached: false,
  isFetching: false,
  error: null
};

const reducerMap = {};

reducerMap[types.LOAD_PRODUCTS_REQUEST] = state => ({
  ...state,
  isCached: false,
  isFetching: true,
});

reducerMap[types.LOAD_PRODUCTS_SUCCESS] = (state, { payload }) => ({
  ...state,
  isCached: true,
  isFetching: false,
  data: payload
});

reducerMap[types.LOAD_PRODUCTS_FAILURE] = (state, { payload }) => ({
  ...state,
  isCached: true,
  isFetching: false,
  error: payload
});

export default handleActions(reducerMap, initialState);
