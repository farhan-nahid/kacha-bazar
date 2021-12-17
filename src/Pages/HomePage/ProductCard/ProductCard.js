import React from 'react';
import buttonIcon from '../../../assets/images/buttonIcon.svg';
import styles from './ProductCard.module.css';

const ProductCard = ({ product: { images, name, price } }) => {
  return (
    <div className={styles.card}>
      <img src={images} alt={name} />
      <div className={styles.card__content}>
        <h6>{name}</h6>
        <span className='d-flex justify-content-between align-self-center mt-3'>
          <h4> ${price}</h4>
          <button>
            <img src={buttonIcon} alt='buttonIcon' />
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
