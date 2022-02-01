import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contact from '../../assets/images/contact-us.webp';
import Banner from '../AboutUsPage/Banner/Banner';
import DailyNeeds from '../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../SharedComponents/Footer/Footer';
import TopNavigation from '../SharedComponents/TopNavigation/TopNavigation';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    document.title = 'Contact Us | Kacha Bazar';
  }, []);

  return (
    <>
      <TopNavigation />
      <Banner text='Contact Us' />
      <Container id={styles.contact__page}>
        <Row>
          <Col lg={6} md={6}>
            <img src={contact} alt='contact' />
          </Col>
          <Col lg={6} md={6} className='mt-5 mt-md-0 pt-4 pt-md-0'>
            <h4>For any support just send your query</h4>
            <p>
              Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and
              standardized infrastructures.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.span__input__name}>
                <label htmlFor='customerFirstName'>First Name</label>
                <input type='text' id='customerFirstName' autoComplete='off' spellCheck='false' placeholder='Enter Your First Name' />
              </div>
              <div className={styles.span__input__name}>
                <label htmlFor='customerLastName'>Last Name</label>
                <input type='text' id='customerLastName' autoComplete='off' spellCheck='false' placeholder='Enter Your Last Name' />
              </div>
              <div className={styles.span__input}>
                <label htmlFor='customerSub'>Subject</label>
                <input type='text' id='customerSub' autoComplete='off' spellCheck='false' placeholder='Enter Your Subject' />
              </div>
              <div className={styles.span__input}>
                <label htmlFor='customerMsg'>Message</label>
                <textarea id='customerMsg' cols='20' rows='7' placeholder='Write a message'></textarea>
              </div>
              <button type='submit'>Send Message</button>
            </form>
          </Col>
        </Row>
      </Container>
      <DailyNeeds />
      <Footer />
    </>
  );
};

export default ContactUs;
