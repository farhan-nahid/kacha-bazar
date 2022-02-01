import React, { useEffect } from 'react';
import DailyNeeds from '../../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../../SharedComponents/Footer/Footer';
import TopNavigation from '../../SharedComponents/TopNavigation/TopNavigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import CartTracker from '../CartTracker/CartTracker';
import FeaturedCategories from '../FeaturedCategories/FeaturedCategories';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Kacha Bazar';
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <TopNavigation />
      <Banner />
      <AboutUs />
      <FeaturedCategories />
      <Products />
      <CartTracker />
      <Testimonials />
      <DailyNeeds />
      <Footer />
    </>
  );
};

export default Home;
