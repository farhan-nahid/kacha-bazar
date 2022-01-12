import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import ProductCard from '../../HomePage/ProductCard/ProductCard';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import styles from './SingleCategory.module.css';

const SingleCategory = () => {
  const [products, setProducts] = useState([]);
  const [isHigh, setIsHigh] = useState('');
  const { searchString } = useParams();

  const handleChange = (e) => setIsHigh(e.target.value);

  if (isHigh === 'low') {
    const eitherSort = (arr) => {
      const sorter = (a, b) => {
        return +a.price - +b.price;
      };
      arr?.sort(sorter);
    };
    eitherSort(products);
  }

  if (isHigh === 'high') {
    const eitherSort = (arr) => {
      const sorter = (a, b) => {
        return +b.price - +a.price;
      };
      arr?.sort(sorter);
    };
    eitherSort(products);
  }

  useEffect(() => {
    setProducts([]);
    axios
      .get(`https://kacha-bazar.herokuapp.com/all-products?category=${searchString}`)
      .then((res) => setProducts(res.data))
      .catch((err) => toast.error(err.message));
  }, [searchString]);

  return (
    <Container>
      {products.length ? (
        <>
          <div className='d-flex justify-content-between mb-4'>
            <h6>
              Total <strong>{products.length}</strong> items Found
            </h6>
            <form onSubmit={(e) => e.preventDefault()}>
              <select name='price' onChange={handleChange}>
                <option value='high'>High to Low</option>
                <option value='low'>Low to High</option>
              </select>
            </form>
          </div>
          <div className={styles.category__container}>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
};

export default SingleCategory;
