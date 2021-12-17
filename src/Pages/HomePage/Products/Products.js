import React from 'react';
import { Container, Row } from 'react-bootstrap';
import fruits from '../../../assets/images/categories/cabbage.webp';
import fish from '../../../assets/images/categories/carp-fish.webp';
import shrimp from '../../../assets/images/categories/shrimp.webp';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';

const Products = () => {
  const products = [
    {
      _id: 1,
      name: 'Fish & Meat',
      images: fish,
    },
    {
      _id: 2,
      name: 'Fruits & Vegetable',
      images: fruits,
    },
    {
      _id: 3,
      name: 'Fresh Seafood',
      images: shrimp,
    },
  ];

  return (
    <section className={styles.products}>
      <Container>
        <h3>Featured Categories</h3>
        <p>Choose your necessary products from this feature categories.</p>
        <Row>
          {
            // map category data
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          }
        </Row>
      </Container>
    </section>
  );
};

export default Products;
