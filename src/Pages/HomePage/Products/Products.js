import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadProductsAsync } from '../../../redux/feathers/productsSlice';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Products.module.css';

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsAsync());
  }, [dispatch]);

  const state = useSelector((state) => state.products);

  return (
    <section id={styles.products}>
      <Container>
        <h3>Popular Products for Daily Shopping</h3>
        <p>See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.</p>
        <div className={styles.products__container}>
          {state.productsState.slice(0, 20)?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {state.status === 'Pending' && <LoadingSpinner />}
        {state.error && toast.error(state.error)}
        <span className={styles.category__button}>
          <button onClick={() => navigate('categories/Fresh%20Vegetable')}>All Categories</button>
        </span>
      </Container>
    </section>
  );
};

export default Products;
