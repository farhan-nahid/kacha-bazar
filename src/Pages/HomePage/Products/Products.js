import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';

const Products = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/all-products')
      .then((res) => setProducts(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <section id={styles.products}>
      <Container>
        <h3>Popular Products for Daily Shopping</h3>
        <p>
          See all our popular products in this week. You can choose your daily needs products from this list and get
          some special offer with free shipping.
        </p>
        {products.length ? (
          <div className={styles.products__container}>
            {
              // map category data
              products.map((product) => (
                <ProductCard key={product._id} product={product} handleAddToCart={handleAddToCart} />
              ))
            }
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </Container>
    </section>
  );
};

export default Products;
