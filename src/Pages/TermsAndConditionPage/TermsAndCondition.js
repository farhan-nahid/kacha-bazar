import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../AboutUsPage/Banner/Banner';
import DailyNeeds from '../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../SharedComponents/Footer/Footer';
import TopNavigation from '../SharedComponents/TopNavigation/TopNavigation';
import styles from './TermsAndCondition.module.css';

const TermsAndCondition = () => {
  useEffect(() => {
    document.title = 'Terms And Condition| Kacha Bazar';
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <TopNavigation />
      <Banner text='Terms And Condition' />
      <Container id={styles.terms__condition}>
        <h3> Welcome to Kacha Bazar!</h3>
        <p>
          These terms and conditions outline the rules and regulations for the use of KachaBazar's Website, located at https://kachabazar.com/. By
          accessing this website we assume you accept these terms and conditions. Do not continue to use KachaBazar if you do not agree to take all of
          the terms and conditions stated on this page.
        </p>

        <p className='mt-3'>
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You"
          and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves",
          "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the
          offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate
          manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with
          and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization
          and/or he/she or they, are taken as interchangeable and therefore as referring to same.
        </p>

        <h3>Cookies</h3>
        <p>
          We employ the use of cookies. By accessing KachaBazar, you agreed to use cookies in agreement with the KachaBazar's Privacy Policy. Most
          interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>

        <h3>License</h3>
        <p>
          Unless otherwise stated, KachaBazar and/or its licensors own the intellectual property rights for all material on KachaBazar. All
          intellectual property rights are reserved. You may access this from KachaBazar for your own personal use subjected to restrictions set in
          these terms and conditions.This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms
          And Conditions Generator.
        </p>

        <h3> Content Liability</h3>
        <p>
          We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.Without prior approval and
          written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our
          Website.
        </p>

        <h3>Your Privacy</h3>
        <p>
          Please read <Link to='/privacy-policy'>Privacy Policy</Link>
        </p>

        <h3>Reservation of Rights</h3>
        <p>
          We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links
          to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions./
        </p>

        <h3>Removal of links from our website</h3>
        <p>
          If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to respond to you directly. We do not ensure that the information on this
          website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that
          the material on the website is kept up to date.
        </p>
      </Container>
      <DailyNeeds />
      <Footer />
    </>
  );
};

export default TermsAndCondition;
