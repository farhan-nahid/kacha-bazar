import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productsState: [],
  status: 'idle',
  error: '',
};

export const loadProductsAsync = createAsyncThunk('products/loadProductsAsync', async () => {
  const response = await axios.get('https://kacha-bazar.herokuapp.com/all-products');
  return response.data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // removePrevDetail: (state) => {
    //   state.detailsState = {};
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(loadProductsAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadProductsAsync.fulfilled, (state, { payload }) => {
      state.productsState = payload;
      state.status = 'Success';
    });
    builder.addCase(loadProductsAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      state.error = message;
    });
  },
});

// export const { removePrevDetail } = productsSlice.actions;

export default productsSlice.reducer;
