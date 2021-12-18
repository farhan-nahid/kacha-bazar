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
                <NavLink to='/about-us' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                  About Us
                </NavLink>
                <NavLink to='/contact-us' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                  Contact Us
                </NavLink>
                <span className={styles.dropdown}>
                  Pages{' '}
                  <span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  <ul>
                    <li>
                      <NavLink to='/offer' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                        {' '}
                        <img src={offerIcon} alt='offerIcon' /> Offer
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/checkout' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                        {' '}
                        <img src={checkoutIcon} alt='checkoutIcon' />
                        Checkout
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/faq' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                        {' '}
                        <img src={faqIcon} alt='faqIcon' /> FAQ
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/about-us' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                        {' '}
                        <img src={aboutUsIcon} alt='aboutUsIcon' /> About Us
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/contact-us' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                        {' '}
                        <img src={contactUsIcon} alt='contactUsIcon' />
                        Contact Us
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/privacy-and-policy' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                        {' '}
                        <img src={privacyIcon} alt='privacyIcon' />
                        Privacy Policy
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/terms-and-condition' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                        {' '}
                        <img src={termsIcon} alt='termsIcon' />
                        Terms & Conditions
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/not-found' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                        {' '}
                        <img src={errorIcon} alt='errorIcon' /> 404
                      </NavLink>
                    </li>
                  </ul>
                </span>
                <NavLink to='/offers' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                  Offers
                </NavLink>
                <NavLink to='/dashboard' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <ul className={styles.right__item}>
              <li>
                <NavLink to='/privacy-policy' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                  Privacy Policy
                </NavLink>
                <NavLink to='/terms-and-conditions' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default RouteNavigation;
