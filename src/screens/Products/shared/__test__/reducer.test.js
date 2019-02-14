import reducer, { initialState } from '../reducer';
import types from '../types';

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD_PRODUCTS_REQUEST', () => {
    const action = { type: types.LOAD_PRODUCTS_REQUEST };
    const nextState = reducer(initialState, action);
    expect(nextState.isCached).toBe(false);
    expect(nextState.isFetching).toBe(true);
  });

  it('should handle LOAD_PRODUCTS_SUCCESS', () => {
    const payload = {
      entities: {},
      results: []
    };
    const action = { type: types.LOAD_PRODUCTS_SUCCESS, payload };
    const nextState = reducer(initialState, action);
    expect(nextState.isCached).toBe(true);
    expect(nextState.isFetching).toBe(false);
    expect(nextState.data).toEqual(payload);
  });

  it('should handle LOAD_PRODUCTS_FAILURE', () => {
    const payload = 'product request failed';
    const action = { type: types.LOAD_PRODUCTS_FAILURE, payload };
    const nextState = reducer(initialState, action);
    expect(nextState.isCached).toBe(true);
    expect(nextState.isFetching).toBe(false);
    expect(nextState.error).toEqual(payload);
  });
});
