import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://kacha-bazar.herokuapp.com/all-products')
      .then((res) => setProducts(res.data.slice(0, 20)))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <section id={styles.products}>
      <Container>
        <h3>Popular Products for Daily Shopping</h3>
        <p>
          See all our popular products in this week. You can choose your daily needs products from this list and get some special
          offer with free shipping.
        </p>
        {products.length ? (
          <div className={styles.products__container}>
            {
              // map category data
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            }
          </div>
        ) : (
          <LoadingSpinner />
        )}
        <span className={styles.category__button}>
          <button onClick={() => navigate('categories/Fresh%20Vegetable')}>All Categories</button>
        </span>
      </Container>
    </section>
  );
};

export default Products;
