import React from 'react';
import DailyNeeds from '../../SharedComponents/DailyNeeds/DailyNeeds';
import Banner from '../Banner/Banner';
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import Products from '../Products/Products';

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedCategories />
      <Products />
      <DailyNeeds />
    </>
  );
};

export default Home;
