import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/auth';
import productsReducer from './slices/products';

const persistAutConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

const persistProductsConfig = {
  key: 'products',
  storage,
  whitelist: ['products']
};

const store = configureStore({
  reducer: {
    // Add your reducers here
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAutConfig,
      authReducer
    ),
    products: persistReducer<ReturnType<typeof productsReducer>>(
      persistProductsConfig,
      productsReducer
    )
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<
  Promise<any>,
  RootState,
  unknown,
  Action<unknown>
>;

export const persistor = persistStore(store);

export default store;
