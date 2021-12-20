import { useContext } from 'react';
import { CartContext } from '../contexts/CartProvider';

const useRedux = () => useContext(CartContext);

export default useRedux;
