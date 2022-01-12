import { faStar } from '@fortawesome/free-solid-svg-icons';
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
      <h6>Our Happy Clients</h6>
      <h3>What Clients Say ?</h3>
      <p>{reviewText}</p>
      <div className='d-flex align-items-center mt-5'>
        <img src={image} alt='..' />
        <div className='ms-3 text-start'>
          <span>{email}</span> <br />
          <span> {showRating(star)}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
