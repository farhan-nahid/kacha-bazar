import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import publicRequest from '../../configs/axios';

const initialState = {
  ordersState: [],
  status: 'idle',
};

export const postOrdersAsync = createAsyncThunk(
  'orders/postOrdersAsync',
  async (payload) => {
    const response = await publicRequest.post('/order', payload);
    return response.data;
  }
);

export const loadOrdersAsync = createAsyncThunk(
  'orders/loadOrdersAsync',
  async (payload) => {
    if (payload) {
      const response = await publicRequest.get(`/all-orders?email=${payload}`);
      return response.data;
    } else {
      const response = await publicRequest.get('/all-orders');
      return response.data;
    }
  }
);

export const updateOrdersAsync = createAsyncThunk(
  'orders/updateOrdersAsync',
  async (payload) => {
    const response = await publicRequest.put(`/order/${payload.id}`, payload);
    return response;
  }
);

export const cancelOrdersAsync = createAsyncThunk(
  'orders/cancelOrdersAsync',
  async (payload) => {
    const response = await publicRequest.delete(`/order/${payload}`);
    return response.data;
  }
);

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
    builder.addCase(postOrdersAsync.pending, (state, action) => {
      toast.loading('Processing... Please Wait!!');
    });
    builder.addCase(postOrdersAsync.fulfilled, (state, { payload }) => {
      toast.dismiss();
      toast.success('Your Order is Successfully post!!!');
    });
    builder.addCase(postOrdersAsync.rejected, (state, { error: { message } }) => {
      toast.dismiss();
      toast.error(message);
    });
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
      toast.loading('Deleting... Please Wait!!');
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
      toast.loading('updating... Please Wait!!');
    });
    builder.addCase(updateOrdersAsync.fulfilled, (state, { payload }) => {
      toast.dismiss();
      const data = JSON.parse(payload?.config?.data);
      toast.success(`Order is ${data.status}`);
    });

    builder.addCase(updateOrdersAsync.rejected, (state, { error: { message } }) => {
      toast.dismiss();
      toast.error(message);
    });
  },
});

export const { updateOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
