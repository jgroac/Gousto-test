import { combineReducers } from 'redux';
import categories from '../../screens/Categories/shared/reducer';

const rootReducer = combineReducers({
  categories
});

export default rootReducer;
