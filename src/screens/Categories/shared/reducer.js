import { handleActions } from 'redux-actions';
import types from './types';

export const initialState = {
  data: [],
  isCached: false,
  isFetching: false,
  error: null
};

const reducerMap = {};

reducerMap[types.LOAD_CATEGORIES_REQUEST] = state => ({
  ...state,
  isFetching: true,
  isCached: false
});

reducerMap[types.LOAD_CATEGORIES_SUCCESS] = (state, { payload }) => ({
  ...state,
  isFetching: false,
  isCached: true,
  data: payload
});

reducerMap[types.LOAD_CATEGORIES_FAILURE] = (state, { payload }) => ({
  ...state,
  isFetching: false,
  isCached: false,
  error: payload
});

export default handleActions(reducerMap, initialState);
