import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../../../assets/images/footerLogo.svg';
import paymentLogo from '../../../assets/images/payment-logo.webp';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg={6} className={styles.logo}>
              <img src={footerLogo} alt='footerLogo' />
              <p>
                There are many popular products you will find our shop, Choose
                your daily necessary product from our KachaBazar shop and get
                some special offer.
              </p>
              <h6>Follow Us</h6>
              <ul className={styles.social__link}>
                <li>
                  <a
                    href='https://www.facebook.com/dev.farhanNahid'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/farhan__nahid'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/farhan__nahid/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/farhan-nahid/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href='tel:01879056875'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/farhan-nahid'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={2}></Col>
            <Col lg={2}></Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      </footer>
      <section className='border-top'>
        <Container className='d-flex justify-content-between p-4'>
          <small>
            Copyright 2021 @{' '}
            <a
              href='https://github.com/farhan-nahid'
              target='_blank'
              rel='noopener noreferrer'
            >
              Farhan
            </a>
            , All rights reserved.
          </small>
          <img
            src={paymentLogo}
            alt='paymentLogo'
            style={{ width: '220px', height: '40px' }}
          />
        </Container>
      </section>
    </>
  );
};

export default Footer;
