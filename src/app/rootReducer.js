import { combineReducers } from '@reduxjs/toolkit';
import breadCrumbReducer from '../features/file-browser/breadCrumbSlice';

const rootReducer = combineReducers({
  breadCrumb: breadCrumbReducer,
});

export default rootReducer;
