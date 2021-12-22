import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../../assets/images/aboutUs/about-banner.webp';
import gridImg from '../../../assets/images/aboutUs/about-us.webp';
import styles from './WelcomeText.module.css';

const WelcomeText = () => {
  return (
    <Container id={styles.welcome__text}>
      <Row className='gx-4'>
        <Col lg={6} md={6} className='gx-4'>
          <h3>Welcome to our Kacha Bazar</h3>
          <p>
            Holistically seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective
            scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive
            mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.
          </p>

          <p>
            Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data.
            Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly
            facilitate revolutionary metrics with strategic theme areas.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>10K</h2>
              <h4>Listed Products</h4>
              <p>Dynamically morph team driven partnerships after vertical.</p>
            </div>
            <div className={styles.card}>
              <h2>8K</h2>
              <h4>Lovely Customer</h4>
              <p>Competently productize virtual models without performance.</p>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} className={styles.about__image}>
          <img src={gridImg} alt='gridImg' />
        </Col>
      </Row>

      <p>
        Holistically seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios.
        Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through
        cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Energetically
        reconceptualize global leadership for high-quality networks. Credibly restore an expanded array of systems rather than accurate results. Collaboratively
        synergize backend bandwidth without 24/7 functionalities. Credibly utilize proactive ideas whereas cross-media core competencies. Uniquely maximize
        professional best practices through resource maximizing services. Conveniently architect cross-unit web services for e-business imperatives.
      </p>

      <p className='mb-5'>
        Appropriately visualize market-driven data before one-to-one scenarios. Collaboratively productize multifunctional ROI through intuitive supply chains.
        Enthusiastically seize revolutionary value and process-centric services. Competently harness intuitive information after interoperable markets.
        Interactively revolutionize future-proof value before granular sources. Dynamically embrace diverse customer service and installed base paradigms.
        Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures.
        Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
      </p>
      <img src={banner} alt='banner' />
    </Container>
  );
};

export default WelcomeText;
