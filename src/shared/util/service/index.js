import axios from 'axios';
import Service from './Service.factory';
import productsMock from '../mocks/products.mock';
import categoriesMock from '../mocks/categories.mock';

const service = new Service(axios);

const serviceMock = {
  getCategories: () => Promise.resolve(categoriesMock),
  getProducts: () => Promise.resolve(productsMock)
};

// if you want to enable the mock response
// only change the enableMockService to true
const enableMockService = false;
const mockOrRealService = enableMockService ? serviceMock : service;

export default mockOrRealService;
