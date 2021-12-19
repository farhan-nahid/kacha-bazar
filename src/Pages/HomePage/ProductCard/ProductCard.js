import React, { useState } from 'react';
import buttonIcon from '../../../assets/images/buttonIcon.svg';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, handleAddToCart }) => {
  const { image, name, price } = product;
  const [isDisable, setIsDisable] = useState(false);

  const handleClick = (item) => {
    item.quantity = 1;
    item.totalPrice = price;
    handleAddToCart(item);
    setIsDisable(true);
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
            <img src={buttonIcon} alt='buttonIcon' />
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
