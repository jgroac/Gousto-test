import { combineReducers } from 'redux';

function stateReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}

const appReducer = combineReducers({ state: stateReducer });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
