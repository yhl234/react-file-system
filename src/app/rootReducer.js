import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import breadCrumbReducer from '../features/file-browser/breadCrumbSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  breadCrumb: breadCrumbReducer,
});

export default rootReducer;
