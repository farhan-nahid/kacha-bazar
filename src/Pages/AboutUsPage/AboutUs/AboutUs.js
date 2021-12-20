import React, { useEffect } from 'react';
import DailyNeeds from '../../SharedComponents/DailyNeeds/DailyNeeds';
import Banner from '../Banner/Banner';
import WelcomeText from '../WelcomeText/WelcomeText';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us | Kacha Bazar';
  }, []);

  return (
    <>
      <Banner />
      <WelcomeText />
      <DailyNeeds />
    </>
  );
};

export default AboutUs;
