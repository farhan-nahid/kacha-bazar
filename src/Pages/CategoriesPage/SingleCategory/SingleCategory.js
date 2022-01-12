import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { emptyPrev, loadQueryProductsAsync } from '../../../redux/feathers/productsSlice';
import ProductCard from '../../HomePage/ProductCard/ProductCard';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import styles from './SingleCategory.module.css';

const SingleCategory = () => {
  const [isHigh, setIsHigh] = useState('');
  const { searchString } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(emptyPrev());
    dispatch(loadQueryProductsAsync(searchString));
  }, [dispatch, searchString]);

  const handleChange = (e) => setIsHigh(e.target.value);
  /* 
  if (isHigh === 'low') {
    const eitherSort = (arr) => {
      const sorter = (a, b) => {
        console.log(a, b);
        return +a.price - +b.price;
      };
      arr.sort(sorter);
    };
    eitherSort(state?.queryProductsState);
  }

  if (isHigh === 'high') {
    const eitherSort = (arr) => {
      const sorter = (a, b) => {
        console.log(a, b);
        return +b.price - +a.price;
      };
     arr?.sort(sorter);
    };
    eitherSort(state?.queryProductsState);
  } */

  return (
    <Container>
      <div className='d-flex justify-content-between mb-4'>
        <h6>
          Total <strong>{state.queryProductsState.length}</strong> items Found
        </h6>
        <form onSubmit={(e) => e.preventDefault()}>
          <select name='price' onChange={handleChange}>
            <option value='high'>High to Low</option>
            <option value='low'>Low to High</option>
          </select>
        </form>
      </div>

      {state.status === 'Pending' && <LoadingSpinner />}
      {state.error && toast.error(state.error)}

      <div className={styles.category__container}>
        {state.queryProductsState.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default SingleCategory;
