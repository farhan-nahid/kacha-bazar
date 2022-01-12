import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/feathers/productsSlice';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [isDisable, setIsDisable] = useState(false);
  const dispatch = useDispatch();
  const { image, name, price, _id } = product;
  const cart = useSelector((state) => state.products.cart);

  useEffect(() => {
    const pd = cart.find((pd) => pd.item._id === _id);
    if (pd) {
      setIsDisable(true);
    }
  }, [_id, cart]);

  const handleClick = (item) => {
    const pd = {};
    pd.item = item;
    pd.quantity = 1;
    pd.totalPrice = pd.item.price;
    dispatch(addToCart(pd));
  };

  return (
    <div className={styles.card}>
      <span className={styles.card__img}>
        <img src={image} alt={name} />
      </span>
      <div className={styles.card__content}>
        <h6>{name}</h6>
        <span className='d-flex justify-content-between align-self-center mt-3'>
          <h4> ${price}</h4>
          <button onClick={() => handleClick(product)} disabled={isDisable}>
            <svg stroke='currentColor' fill='#10b981' strokeWidth='0' viewBox='0 0 512 512' height='23px' width='23px' xmlns='http://www.w3.org/2000/svg'>
              <path d='M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64z'></path>
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
