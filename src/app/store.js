import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from '../redux/feathers/ordersSlice';
import productsReducer from '../redux/feathers/productsSlice';

const store = configureStore({
  reducer: { products: productsReducer, orders: ordersReducer },
});

export default store;
