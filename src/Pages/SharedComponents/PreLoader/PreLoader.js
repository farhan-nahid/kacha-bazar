import React from 'react';
import loader from '../../../assets/images/loader.svg';
import styles from './PreLoader.module.css';

const PreLoader = () => {
  return (
    <section className={styles.pre__loader}>
      <img src={loader} alt='loaderImage' />
    </section>
  );
};

export default PreLoader;
