import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import appStore from '../../../assets/images/app-store.svg';
import dailyNeeds from '../../../assets/images/DailyNeeds.webp';
import playStore from '../../../assets/images/play-store.svg';
import styles from './DailyNeeds.module.css';

const DailyNeeds = () => {
  return (
    <section id={styles.daily__needs}>
      <Container>
        <Row>
          <Col lg={6} md={6} className={styles.daily__needs__content}>
            <h5>Get Your Daily Needs From Our Kacha Bazar Store</h5>
            <p>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>
            <span>
              <img src={appStore} alt='appStore' />
              <img src={playStore} alt='playStore' />
            </span>
          </Col>
          <Col lg={6} md={6} className={styles.deal__image}>
            <img src={dailyNeeds} alt='DailyNeeds' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DailyNeeds;
