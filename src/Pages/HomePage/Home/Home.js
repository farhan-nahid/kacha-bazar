import React from 'react';
import DailyNeeds from '../../SharedComponents/DailyNeeds/DailyNeeds';
import Banner from '../Banner/Banner';
import CartTracker from '../CartTracker/CartTracker';
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import Products from '../Products/Products';

const Home = ({ handleAddToCart, cart, handleShow, handleIncrease, handleDecrease, totalPrice }) => {
  return (
    <>
      <Banner />
      <FeaturedCategories />
      <Products handleAddToCart={handleAddToCart} />
      <CartTracker cart={cart} handleShow={handleShow} totalPrice={totalPrice} />
      <DailyNeeds />
    </>
  );
};

export default Home;
