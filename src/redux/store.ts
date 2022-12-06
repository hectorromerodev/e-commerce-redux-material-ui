import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import productsReducer from './slices/products';

const store = configureStore({
  reducer: {
    // Add your reducers here
    auth: authReducer,
    products: productsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
