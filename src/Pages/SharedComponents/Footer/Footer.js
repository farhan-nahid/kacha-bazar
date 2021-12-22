import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import footerLogo from '../../../assets/images/footerLogo.svg';
import paymentLogo from '../../../assets/images/payment-logo.webp';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg={6} md={12} className={styles.logo}>
              <img src={footerLogo} alt='footerLogo' />
              <p>
                There are many popular products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.
              </p>
              <h6>Follow Us</h6>
              <ul className={styles.social__link}>
                <li>
                  <a href='https://www.facebook.com/dev.farhanNahid' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/farhan__nahid' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/farhan__nahid/' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/farhan-nahid/' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href='tel:01879056875'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/farhan-nahid' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={4} sm={6} xs={6} className={styles.footer__column}>
              <h5>Company</h5>
              <ul>
                <li>
                  <NavLink to='/'>About Us</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Contact us</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Careers</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Latest news</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Latest Discount</NavLink>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={4} sm={6} xs={6} className={styles.footer__column}>
              <h5>Top Category</h5>
              <ul>
                <li>
                  <NavLink to='/'>Fish & Meat</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Soft Drinks</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Baby Care</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Beauty & Health</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Fruits & Vegetable</NavLink>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={4} sm={6} xs={6} className={styles.footer__column}>
              <h5>My Account</h5>
              <ul>
                <li>
                  <NavLink to='/'>Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to='/'>My Orders</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Recent Orders</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Updated Profile</NavLink>
                </li>
                <li>
                  <NavLink to='/'>Change Password</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <section id={styles.copyright__area} className='container'>
        <small>
          Copyright 2021 @
          <a href='https://www.facebook.com/dev.farhanNahid' target='_blank' rel='noopener noreferrer' className='mx-1'>
            Farhan
          </a>
          , All rights reserved.
        </small>
        <img src={paymentLogo} alt='paymentLogo' />
      </section>
    </>
  );
};

export default Footer;
