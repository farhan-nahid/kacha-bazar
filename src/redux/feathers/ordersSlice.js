import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  ordersState: [],
  status: 'idle',
  deleteStatus: 'idle',
  error: '',
  deleteError: '',
};

export const loadOrdersAsync = createAsyncThunk('orders/loadOrdersAsync', async (payload) => {
  if (payload) {
    const response = await axios.get(`https://kacha-bazar.herokuapp.com/all-orders?email=${payload}`);
    return response.data;
  } else {
    const response = await axios.get(`https://kacha-bazar.herokuapp.com/all-orders`);
    return response.data;
  }
});

export const cancelOrdersAsync = createAsyncThunk('orders/cancelOrdersAsync', async (payload) => {
  const response = await axios.delete(`https://kacha-bazar.herokuapp.com/order/${payload}`);
  return response.data;
});

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadOrdersAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadOrdersAsync.fulfilled, (state, { payload }) => {
      state.ordersState = payload;
      state.status = 'Success';
    });
    builder.addCase(loadOrdersAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      state.error = message;
    });
    builder.addCase(cancelOrdersAsync.pending, (state, action) => {
      state.deleteStatus = 'Pending';
    });
    builder.addCase(cancelOrdersAsync.fulfilled, (state, { meta: { arg } }) => {
      state.ordersState = state.ordersState.filter((order) => order._id !== arg);
      state.deleteStatus = 'Success';
    });
    builder.addCase(cancelOrdersAsync.rejected, (state, { error: { message } }) => {
      state.deleteStatus = 'Rejected';
      state.deleteError = message;
    });
  },
});

export default ordersSlice.reducer;
