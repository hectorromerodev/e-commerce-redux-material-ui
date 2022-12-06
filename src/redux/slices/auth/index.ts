import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthState from '@/models/redux/AuthState.interface';
import Login from '@/models/Login.interface';

import type { AxiosResponse, AxiosError } from 'axios';
import type { Thunk } from '@/redux/store';
import axios from '@/utils/axios';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setToken, setIsLoading } = authSlice.actions;

export const login =
  (data: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.post('/login', data);
      dispatch(setToken(response.data.token));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export default authSlice.reducer;
