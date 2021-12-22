import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './FounderCard.module.css';

const FounderCard = ({ founder: { name, image, post } }) => {
  return (
    <Col lg={2} md={4} sm={6} xs={6} className={styles.card}>
      <img src={image} alt={name} />
      <h6>{name}</h6>
      <p>{post}</p>
    </Col>
  );
};

export default FounderCard;
