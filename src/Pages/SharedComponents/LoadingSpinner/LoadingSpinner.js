import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <section className={styles.loading__spinner}>
      <div className={styles.loading__spinner__container}>
        <div className={styles.spinner}>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;
