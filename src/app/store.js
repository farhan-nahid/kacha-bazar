import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/feathers/productsSlice';

const store = configureStore({
  reducer: { products: productsReducer },
});

export default store;
