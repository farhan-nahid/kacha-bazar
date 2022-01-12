import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleCancelOrder, handleDecrease, handleIncrease } from '../../../redux/feathers/productsSlice';
import styles from './Cart.module.css';

const Cart = ({ pd: { item, quantity, totalPrice } }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cart__item}>
      <div className='d-flex align-self-center'>
        <img src={item.image} alt={item.name} />
        <span className='ms-3'>
          <h6>{item.name}</h6>
          <small>${item.price}</small>
          <h5>{totalPrice ? totalPrice : item.price}</h5>
        </span>
      </div>
      <div className={styles.counter}>
        <span onClick={() => dispatch(handleDecrease(item._id))}>
          <FontAwesomeIcon icon={faMinus} />
        </span>
        <span>{quantity}</span>
        <span onClick={() => dispatch(handleIncrease(item._id))}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
      <div className={styles.delete__icon} onClick={() => dispatch(handleCancelOrder(item._id))}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default Cart;
