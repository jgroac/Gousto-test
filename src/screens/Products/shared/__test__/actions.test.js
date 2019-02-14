import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';
import types from '../types';
import actions from '../actions';
import normalizers from '../normalizers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('fetchProducts', () => {
  it('should call the api and dispatch the success action', async () => {
    const categoryMock = { id: '232323' };
    const productMock = {
      id: '121212',
      categories: [categoryMock]
    };
    const dataMock = [productMock];
    const response = { data: { data: dataMock } };

    axios.get.mockImplementation(() => Promise.resolve(response));
    const payload = normalizers.normalizeProducts(dataMock);

    const expectedActions = [
      { type: types.LOAD_PRODUCTS_REQUEST },
      { type: types.LOAD_PRODUCTS_SUCCESS, payload }
    ];

    const store = mockStore({
      products: { isCached: false }
    });

    store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should catch the error and dispatch a failure action', async () => {
    const errorMessage = 'Product request failed';
    const error = new Error(errorMessage);
    axios.get.mockImplementation(() => Promise.reject(error));
    const expectedActions = [
      { type: types.LOAD_PRODUCTS_REQUEST },
      { type: types.LOAD_PRODUCTS_FAILURE, payload: errorMessage }
    ];

    const store = mockStore({
      products: { isCached: false }
    });

    store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return the categories without call the api if they are cached', async () => {
    const expectedActions = [];

    const store = mockStore({
      products: { isCached: true }
    });

    store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
