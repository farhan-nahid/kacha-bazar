import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category: { name, images } }) => {
  return (
    <Col lg={2}>
      <div className={styles.card}>
        <img src={images} alt={name} />
        <h6>{name}</h6>
      </div>
    </Col>
  );
};

export default CategoryCard;
