import reducer, { initialState } from '../reducer';
import types from '../types';

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD_CATEGORIES_REQUEST', () => {
    const action = { type: types.LOAD_CATEGORIES_REQUEST };
    const nextState = reducer(initialState, action);
    expect(nextState.isCached).toBe(false);
    expect(nextState.isFetching).toBe(true);
  });

  it('should handle LOAD_CATEGORIES_SUCCESS', () => {
    const payload = { id: 100 };
    const action = { type: types.LOAD_CATEGORIES_SUCCESS, payload };
    const nextState = reducer(initialState, action);
    expect(nextState.isCached).toBe(true);
    expect(nextState.isFetching).toBe(false);
    expect(nextState.data).toEqual(payload);
  });
});
