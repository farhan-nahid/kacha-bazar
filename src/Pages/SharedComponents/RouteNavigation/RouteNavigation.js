import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import aboutUsIcon from '../../../assets/images/aboutUs.svg';
import checkoutIcon from '../../../assets/images/checkout.svg';
import contactUsIcon from '../../../assets/images/contactUs.svg';
import errorIcon from '../../../assets/images/error.svg';
import faqIcon from '../../../assets/images/faq.svg';
import offerIcon from '../../../assets/images/gift.svg';
import privacyIcon from '../../../assets/images/privacy.svg';
import termsIcon from '../../../assets/images/terms.svg';
import styles from './RouteNavigation.module.css';

const RouteNavigation = () => {
  return (
    <nav className={styles.nav__items}>
      <Container>
        <Row>
          <Col lg={6}>
            <ul className={styles.left__item}>
              <li>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/contact-us'>Contact Us</NavLink>
                <NavLink to='/' className={styles.dropdown}>
                  Pages <FontAwesomeIcon icon={faChevronDown} />
                  <ul>
                    <li>
                      <NavLink to='/offer'>
                        {' '}
                        <img src={offerIcon} alt='offerIcon' /> Offer
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/'>
                        {' '}
                        <img src={checkoutIcon} alt='checkoutIcon' />
                        Checkout
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/'>
                        {' '}
                        <img src={faqIcon} alt='faqIcon' /> FAQ
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/'>
                        {' '}
                        <img src={aboutUsIcon} alt='aboutUsIcon' /> About Us
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/'>
                        {' '}
                        <img src={contactUsIcon} alt='contactUsIcon' />
                        Contact Us
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/'>
                        {' '}
                        <img src={privacyIcon} alt='privacyIcon' />
                        Privacy Policy
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/'>
                        {' '}
                        <img src={termsIcon} alt='termsIcon' />
                        Terms & Conditions
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/'>
                        {' '}
                        <img src={errorIcon} alt='errorIcon' /> 404
                      </NavLink>
                    </li>
                  </ul>
                </NavLink>
                <NavLink to='/offers'>Offers</NavLink>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <ul className={styles.right__item}>
              <li>
                <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                <NavLink to='/terms-and-conditions'>Terms & Conditions</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default RouteNavigation;
