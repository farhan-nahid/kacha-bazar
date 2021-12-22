import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useRedux from '../../../hooks/useRedux';
import styles from './Cart.module.css';

const Cart = ({ pd }) => {
  const { handleIncrease, handleDecrease, handleCancelOrder } = useRedux();
  
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
        <span onClick={() => handleDecrease(pd)}>
          <FontAwesomeIcon icon={faMinus} />
        </span>
        <span>{pd.quantity}</span>
        <span onClick={() => handleIncrease(pd)}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
      <div className={styles.delete__icon} onClick={() => handleCancelOrder(pd._id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default Cart;
