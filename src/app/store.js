import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import breadCrumbReducer from '../features/file-browser/breadCrumbSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    breadCrumb: breadCrumbReducer,
  },
});
