import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const initialState = {
  ordersState: [],
  status: 'idle',
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

export const updateOrdersAsync = createAsyncThunk('orders/updateOrdersAsync', async (payload) => {
  const response = await axios.put(`https://kacha-bazar.herokuapp.com/order/${payload.id}`, payload);
  return response;
});

export const cancelOrdersAsync = createAsyncThunk('orders/cancelOrdersAsync', async (payload) => {
  const response = await axios.delete(`https://kacha-bazar.herokuapp.com/order/${payload}`);
  return response.data;
});

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateOrders: (state, { payload }) => {
      state.ordersState = state.ordersState.map((item) => {
        let items = item;
        if (item._id === payload.id) {
          item.status = payload.status;
          items = { ...item };
        }
        return items;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadOrdersAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadOrdersAsync.fulfilled, (state, { payload }) => {
      state.ordersState = payload;
      state.status = 'Success';
      toast.success('Your Order is loaded!!!');
    });
    builder.addCase(loadOrdersAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      toast.error(message);
    });
    builder.addCase(cancelOrdersAsync.pending, (state, action) => {
      toast.loading('Deleting...Please Wait!!');
    });
    builder.addCase(cancelOrdersAsync.fulfilled, (state, { payload, meta: { arg } }) => {
      toast.dismiss();
      state.ordersState = state.ordersState.filter((order) => order._id !== arg);
      toast.success('Your Order is canceled..');
    });
    builder.addCase(cancelOrdersAsync.rejected, (state, { error: { message } }) => {
      toast.dismiss();
      toast.error(message);
    });
    builder.addCase(updateOrdersAsync.pending, (state, action) => {
      toast.loading('updating...Please Wait!!');
    });
    builder.addCase(updateOrdersAsync.fulfilled, (state, { payload }) => {
      toast.dismiss();
      const a = JSON.parse(payload?.config?.data);
      toast.success(`Order is ${a.status}`);
    });

    builder.addCase(updateOrdersAsync.rejected, (state, { error: { message } }) => {
      toast.dismiss();
      toast.error(message);
    });
  },
});

export const { updateOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
