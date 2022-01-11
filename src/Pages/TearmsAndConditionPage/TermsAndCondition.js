import React, { useEffect } from 'react';
import Banner from '../AboutUsPage/Banner/Banner';
import DailyNeeds from '../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../SharedComponents/Footer/Footer';
import TopNavigation from '../SharedComponents/TopNavigation/TopNavigation';
import styles from './TermsAndCondition.module.css';

const TermsAndCondition = () => {
  useEffect(() => {
    document.title = 'Terms And Condition| Kacha Bazar';
  }, []);

  return (
    <>
      <TopNavigation />
      <Banner text='Terms And Condition' />
      <div id={styles.terms__condition}>
        <h3> Welcome to KachaBazar!</h3>
        <p>
          These terms and conditions outline the rules and regulations for the use of KachaBazar's Website, located at https://kachabazar.com/. By accessing
          this website we assume you accept these terms and conditions. Do not continue to use KachaBazar if you do not agree to take all of the terms and
          conditions stated on this page.
        </p>

        <p>
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and
          "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and
          "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and
          consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of
          meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands.
          Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </p>

        <h3>Cookies</h3>
        <p>
          We employ the use of cookies. By accessing KachaBazar, you agreed to use cookies in agreement with the KachaBazar's Privacy Policy. Most interactive
          websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain
          areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
        </p>

        <h3>License</h3>
        <p>
          Unless otherwise stated, KachaBazar and/or its licensors own the intellectual property rights for all material on KachaBazar. All intellectual
          property rights are reserved. You may access this from KachaBazar for your own personal use subjected to restrictions set in these terms and
          conditions.This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Generator.
        </p>
      </div>
      <DailyNeeds />
      <Footer />
    </>
  );
};

export default TermsAndCondition;
