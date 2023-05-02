import { configureStore } from '@reduxjs/toolkit';
import ReduxSlice from './../Redux/Redux'

// import rootReducer from './reducers';

const store = configureStore({
  reducer: ReduxSlice,
});

export default store