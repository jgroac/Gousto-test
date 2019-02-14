import { combineReducers } from 'redux';
import categories from '../../screens/Categories/shared/reducer';
import products from '../../screens/Products/shared/reducer';

const rootReducer = combineReducers({
  categories,
  products
});

export default rootReducer;
