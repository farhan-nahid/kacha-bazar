import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { emptyPrev, loadQueryProductsAsync, productSorting } from '../../../redux/feathers/productsSlice';
import ProductCard from '../../HomePage/ProductCard/ProductCard';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import styles from './SingleCategory.module.css';

const SingleCategory = () => {
  const { searchString } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    dispatch(emptyPrev());
    dispatch(loadQueryProductsAsync(searchString));
  }, [dispatch, searchString]);

  return (
    <Container>
      {products.status === 'Pending' ? (
        <div className='mt-5 pt-5'>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {products.error && toast.error(products.error)}
          <div className='d-flex justify-content-between mb-4'>
            <h6>
              Total <strong>{products.queryProductsState.length}</strong> items Found
            </h6>
            <form onSubmit={(e) => e.preventDefault()}>
              <select name='price' onChange={(e) => dispatch(productSorting(e.target.value))}>
                <option value='high'>High to Low</option>
                <option value='low'>Low to High</option>
              </select>
            </form>
          </div>

          <div className={styles.category__container}>
            {products.queryProductsState.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default SingleCategory;
