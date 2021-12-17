import React from 'react';
import loader from '../../../assets/images/loader.svg';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <section className={styles.loading__spinner}>
      <img src={loader} alt='loaderImage' />
    </section>
  );
};

export default LoadingSpinner;
