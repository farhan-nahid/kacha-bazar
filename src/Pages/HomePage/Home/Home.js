import React, { useEffect } from 'react';
import useRedux from '../../../hooks/useRedux';
import DailyNeeds from '../../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../../SharedComponents/Footer/Footer';
import RouteNavigation from '../../SharedComponents/RouteNavigation/RouteNavigation';
import TopNavigation from '../../SharedComponents/TopNavigation/TopNavigation';
import Banner from '../Banner/Banner';
import CartTracker from '../CartTracker/CartTracker';
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  const { handleAddToCart, cart, totalPrice, handleShow } = useRedux();

  useEffect(() => {
    document.title = 'Home | Kacha Bazar';
  }, []);

  return (
    <>
      <TopNavigation />
      <RouteNavigation />
      <Banner />
      <FeaturedCategories />
      <Products handleAddToCart={handleAddToCart} />
      <CartTracker cart={cart} handleShow={handleShow} totalPrice={totalPrice} />
      <Testimonials />
      <DailyNeeds />
      <Footer />
    </>
  );
};

export default Home;
