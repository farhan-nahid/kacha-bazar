import React from 'react';
import useRedux from '../../../hooks/useRedux';
import styles from './CartTracker.module.css';

const CartTracker = () => {
  const { cart, handleShow, totalPrice } = useRedux();

  let total = 0;
  for (const pd of cart) {
    total = total + Number(pd.quantity);
  }

  return (
    <section id={styles.cart__tracker} onClick={handleShow}>
      <span>
        <svg stroke='#059669' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='50px' width='50px' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32'
            d='M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32'
          ></path>
          <path fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16'></path>
        </svg>
        <p>{total}</p>
      </span>
      <h6>{totalPrice ? totalPrice : '00'}.00</h6>
    </section>
  );
};

export default CartTracker;
