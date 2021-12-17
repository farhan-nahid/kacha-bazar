import React from 'react';
import { Container, Row } from 'react-bootstrap';
import fruits from '../../../assets/images/categories/cabbage.webp';
import fish from '../../../assets/images/categories/carp-fish.webp';
import shrimp from '../../../assets/images/categories/shrimp.webp';
import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './FeaturedCategories.module.css';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Fish & Meat',
      images: fish,
    },
    {
      id: 2,
      name: 'Fruits & Vegetable',
      images: fruits,
    },
    {
      id: 3,
      name: 'Fresh Seafood',
      images: shrimp,
    },
  ];

  return (
    <section id={styles.categories}>
      <Container>
        <h3>Featured Categories</h3>
        <p>Choose your necessary products from this feature categories.</p>
        <Row>
          {
            // map category data
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          }
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedCategories;
