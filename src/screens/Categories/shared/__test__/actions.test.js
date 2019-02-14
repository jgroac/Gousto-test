import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';
import types from '../types';
import actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('fetchCategories', () => {
  it('should call the api and dispatch the success action', async () => {
    const response = { data: { data: [{ id: 1 }] } };
    axios.get.mockImplementation(() => Promise.resolve(response));
    const expectedActions = [
      { type: types.LOAD_CATEGORIES_REQUEST },
      { type: types.LOAD_CATEGORIES_SUCCESS, payload: response.data.data }
    ];

    const store = mockStore({
      categories: {
        isCached: false,
        isFetching: false,
        data: []
      }
    });

    store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should catch the error and dispatch a failure action', async () => {
    const errorMessage = 'Request failed';
    const error = new Error(errorMessage);
    axios.get.mockImplementation(() => Promise.reject(error));
    const expectedActions = [
      { type: types.LOAD_CATEGORIES_REQUEST },
      { type: types.LOAD_CATEGORIES_FAILURE, payload: errorMessage }
    ];

    const store = mockStore({
      categories: {
        isCached: false,
        isFetching: false,
        data: []
      }
    });

    store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return the categories without call the api if they are cached', async () => {
    const expectedActions = [];

    const store = mockStore({
      categories: {
        isCached: true,
        data: [{ id: 1 }]
      }
    });

    store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
