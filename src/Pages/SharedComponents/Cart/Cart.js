import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ pd, handleIncrease, handleDecrease }) => {
  return (
    <div className={styles.cart__item}>
      <div className='d-flex align-self-center'>
        <img src={pd.image} alt={pd.name} />
        <span className='ms-3'>
          <h6>{pd.name}</h6>
          <small>${pd.price}</small>
          <h5>{pd.totalPrice ? pd.totalPrice : pd.price}</h5>
        </span>
      </div>
      <div className={styles.counter}>
        <span onClick={() => handleDecrease(pd._id)}>
          <FontAwesomeIcon icon={faMinus} />
        </span>
        <span>{pd.quantity}</span>
        <span onClick={() => handleIncrease(pd._id)}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
      <div className={styles.delete__icon}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default Cart;
