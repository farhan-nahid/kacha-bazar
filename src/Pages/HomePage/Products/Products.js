import React from 'react';
import { Container } from 'react-bootstrap';
import fruits from '../../../assets/images/products/Ahold-Acorn-Squash-1ct.webp';
import fish from '../../../assets/images/products/Aloe-Vera-Leaf-each.webp';
import shrimp from '../../../assets/images/products/Blackberries-1-25-qt.webp';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';

const Products = ({ handleAddToCart }) => {
  const products = [
    {
      _id: 1,
      name: 'Fish & Meat',
      images: fish,
      price: 20,
    },
    {
      _id: 2,
      name: 'Fruits & Vegetable',
      images: fruits,
      price: 12,
    },
    {
      _id: 3,
      name: 'Fresh Seafood',
      images: shrimp,
      price: 15,
    },
    {
      _id: 4,
      name: 'Fish & Meat',
      images: fish,
      price: 20,
    },
    {
      _id: 5,
      name: 'Fruits & Vegetable',
      images: fruits,
      price: 12,
    },
    {
      _id: 6,
      name: 'Fresh Seafood',
      images: shrimp,
      price: 15,
    },
  ];

  return (
    <section id={styles.products}>
      <Container>
        <h3>Popular Products for Daily Shopping</h3>
        <p>
          See all our popular products in this week. You can choose your daily needs products from this list and get
          some special offer with free shipping.
        </p>
        <div className={styles.products__container}>
          {
            // map category data
            products.map((product) => (
              <ProductCard key={product._id} product={product} handleAddToCart={handleAddToCart} />
            ))
          }
        </div>
      </Container>
    </section>
  );
};

export default Products;
