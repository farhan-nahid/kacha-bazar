import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import category from '../../../assets/images/icons/category.svg';
import price from '../../../assets/images/icons/price.svg';
import product from '../../../assets/images/icons/product.svg';
import upload from '../../../assets/images/upload.png';
import { postProductAsync } from '../../../redux/feathers/productsSlice';
import styles from './AddProduct.module.css';

const AddProduct = () => {
  const [data, setData] = useState({});
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handelBlur = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set('key', '1c7b42d86523b93639ae849aae708b2e');
    imageData.append('image', e.target.files[0]);
    const loading = toast.loading('Uploading... Please wait!');
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then((res) => {
        if (res.status === 200) {
          toast.success('Successfully Upload The Image...!!!');
          setImage(res.data.data.display_url);
        }
      })
      .catch((error) => toast.error(error.message))
      .finally(() => toast.dismiss(loading));
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const loading = toast.loading('Inserting a new product... Please wait!!!');
    if (!image) {
      toast.dismiss(loading);
      toast.error('Please Upload a Image');
    } else {
      const product = data;
      product.image = image;
      dispatch(postProductAsync(product)).then((res) => {
        if (res.payload.insertedId) {
          swal({
            title: 'Good job!',
            text: `${product.name} is successfully Added!`,
            icon: 'success',
            button: 'OK!',
          });
          e.target.reset();
        }
      });
    }
  };

  return (
    <section id={styles.add__product}>
      <h3>Add Product</h3>
      <form onSubmit={handleProductSubmit}>
        <span className={styles.inputs}>
          <input type='text' placeholder='Product Name' id='pdName' onBlur={handelBlur} autoComplete='off' name='name' />
          <label htmlFor='pdName'>
            <img src={product} alt='product' />
          </label>
        </span>

        <span className={styles.inputs}>
          <input type='number' placeholder='Product Price' id='pdPrice' onBlur={handelBlur} autoComplete='off' name='price' />
          <label htmlFor='pdPrice'>
            <img src={price} alt='price' />
          </label>
        </span>

        <span className={styles.inputs}>
          <input type='text' placeholder='Product Category' id='pdCategory' onBlur={handelBlur} autoComplete='off' name='category' />
          <label htmlFor='pdCategory'>
            <img src={category} alt='category' />
          </label>
        </span>

        <span className={styles.upload__btn__wrapper}>
          <label htmlFor='pdImage'>
            <img src={upload} alt='upload' />
          </label>
          <input type='file' name='image' id='pdImage' onChange={handleImageUpload} />
        </span>

        <span className={styles.btn__wrapper}>
          <button type='submit'>Add Product</button>
        </span>
      </form>
    </section>
  );
};

export default AddProduct;
