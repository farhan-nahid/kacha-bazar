import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ text }) => {
  return (
    <section id={styles.about__banner}>
      <h1>{text}</h1>
    </section>
  );
};

export default Banner;
