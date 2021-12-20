import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Testimonial.module.css';

const showRating = (star) => {
  const stars = [];
  const int = parseInt(star, 10);
  for (let i = 1; i <= int; i++) {
    stars.push(<FontAwesomeIcon key={i} className={styles.rating__icon} icon={faStar} />);
  }
  return <div>{stars}</div>;
};

const Testimonial = ({ review: { star, image, reviewText, email } }) => {
  return (
    <div className={styles.testimonial__card}>
      <div className={styles.testimonial__image}>
        <img src={image} alt={email} />
      </div>
      <FontAwesomeIcon icon={faQuoteRight} className={styles.quote__icon__right} />
      <FontAwesomeIcon icon={faQuoteLeft} className={styles.quote__icon__left} />
      <div className={styles.testimonial__description}>
        <p>{reviewText}</p>
      </div>
      {showRating(star)}
      <h6>{email}</h6>
    </div>
  );
};

export default Testimonial;
