import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root';

const isDevEnv = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line no-underscore-dangle
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = isDevEnv ? reduxDevTools || compose : compose;

const createStoreWithEnhancers = composeEnhancers(applyMiddleware(reduxThunkMiddleware))(
  createStore
);

const store = createStoreWithEnhancers(rootReducer);

export default store;
