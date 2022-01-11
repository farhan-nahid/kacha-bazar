import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../../assets/images/banner/banner-1.webp';
import banner2 from '../../../assets/images/banner/banner-2.webp';
import first from '../../../assets/images/banner/slider-1.webp';
import second from '../../../assets/images/banner/slider-2.webp';
import third from '../../../assets/images/banner/slider-3.webp';
import styles from './Banner.module.css';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Container id='banner' className={styles.banner}>
      <Row className='mt-5 mt-md-0'>
        <Col lg={6} md={12}>
          <Carousel pause='false'>
            <Carousel.Item className={styles.carousel__item}>
              <img className='img-fluid w-100' src={first} alt='First' />
              <div className={styles.overlay}>
                <h3> The Best Quality Products Guaranteed!</h3>
                <p>Dramatically facilitate effective total linkage for go forward processes...</p>
                <button onClick={() => navigate('/categories/Fish%20and%20Meat')}>Learn More</button>
              </div>
            </Carousel.Item>

            <Carousel.Item className={styles.carousel__item}>
              <img src={second} alt='Second' />
              <div className={styles.overlay}>
                <h3> Best Different Type of Grocery Store </h3>
                <p>Quickly aggregate empowered networks after emerging products...</p>
                <button onClick={() => navigate('/categories/Fish%20and%20Meat')}>Learn More</button>
              </div>
            </Carousel.Item>

            <Carousel.Item className={styles.carousel__item}>
              <img src={third} alt='Third' />
              <div className={styles.overlay}>
                <h3> Quality Freshness Guaranteed!</h3>
                <p>intrinsically fashion performance based products rather than accurate benefits...</p>
                <button onClick={() => navigate('/categories/Fish%20and%20Meat')}>Learn More</button>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6} md={12} className={styles.banner__side}>
          <img src={banner1} alt='banner1' />
          <div className='mt-3'>
            <img src={banner2} alt='banner2' />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
