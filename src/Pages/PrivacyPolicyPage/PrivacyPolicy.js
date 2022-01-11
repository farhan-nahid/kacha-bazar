import React, { useEffect } from 'react';
import Banner from '../AboutUsPage/Banner/Banner';
import DailyNeeds from '../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../SharedComponents/Footer/Footer';
import TopNavigation from '../SharedComponents/TopNavigation/TopNavigation';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Kacha Bazar';
  }, []);
  return (
    <>
      <TopNavigation />
      <Banner text='Privacy Policy' />
      <section></section>
      <DailyNeeds />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
