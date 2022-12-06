import { createSlice } from '@reduxjs/toolkit';

import ProductState from '@/models/redux/ProductState.interface';

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.isLoading = true;
    }
  }
});

export const { fetchProductsStart } = productsSlice.actions;

export default productsSlice.reducer;
