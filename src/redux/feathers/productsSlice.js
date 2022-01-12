import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productsState: [],
  queryProductsState: [],
  cart: [],
  status: 'idle',
  error: '',
};

export const loadProductsAsync = createAsyncThunk('products/loadProductsAsync', async () => {
  const response = await axios.get('https://kacha-bazar.herokuapp.com/all-products');
  return response.data;
});

export const loadQueryProductsAsync = createAsyncThunk('products/loadQueryProductsAsync', async (payload) => {
  const response = await axios.get(`https://kacha-bazar.herokuapp.com/all-products?category=${payload}`);
  return response.data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    emptyCart: (state, action) => {
      state.cart = [];
    },
    emptyPrev: (state, action) => {
      state.queryProductsState = [];
    },
    handleCancelOrder: (state, { payload }) => {
      state.cart = state.cart.filter((pd) => pd.item._id !== payload);
    },
    handleIncrease: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        let items = item;
        if (item.item._id === payload) {
          item.quantity = item.quantity + 1;
          item.totalPrice = Number(item.quantity) * Number(item.item.price);
          items = { ...item };
        }
        return items;
      });
    },
    handleDecrease: (state, { payload }) => {
      state.cart = state.cart.map((item) => {
        let items = item;
        if (item.item._id === payload && item.quantity > 1) {
          item.quantity = item.quantity - 1;
          item.totalPrice = Number(item.quantity) * Number(item.item.price);
          items = { ...item };
        }
        return items;
      });
    },
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
    builder.addCase(loadQueryProductsAsync.pending, (state, action) => {
      state.status = 'Pending';
    });
    builder.addCase(loadQueryProductsAsync.fulfilled, (state, { payload }) => {
      state.queryProductsState = payload;
      state.status = 'Success';
    });
    builder.addCase(loadQueryProductsAsync.rejected, (state, { error: { message } }) => {
      state.status = 'Rejected';
      state.error = message;
    });
  },
});

export const { addToCart, emptyCart, emptyPrev, handleCancelOrder, handleIncrease, handleDecrease } = productsSlice.actions;

export default productsSlice.reducer;
