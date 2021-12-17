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
      <Row>
        <Col lg={6}>
          <Carousel pause='false'>
            <Carousel.Item className={styles.carousel__item}>
              <img className='img-fluid w-100' src={first} alt='First' />
              <div className={styles.overlay}>
                <h3> The Best Quality Products Guaranteed!</h3>
                <p>
                  Dramatically facilitate effective total linkage for go forward
                  processes...
                </p>
                <button onClick={() => navigate('/all-products')}>
                  Learn More
                </button>
              </div>
            </Carousel.Item>

            <Carousel.Item className={styles.carousel__item}>
              <img className='img-fluid w-100' src={second} alt='Second' />
              <div className={styles.overlay}>
                <h3> Best Different Type of Grocery Store </h3>
                <p>
                  Quickly aggregate empowered networks after emerging
                  products...
                </p>
                <button onClick={() => navigate('/all-products')}>
                  Learn More
                </button>
              </div>
            </Carousel.Item>

            <Carousel.Item className={styles.carousel__item}>
              <img className='img-fluid w-100' src={third} alt='Third' />
              <div className={styles.overlay}>
                <h3> Quality Freshness Guaranteed!</h3>
                <p>
                  intrinsically fashion performance based products rather than
                  accurate benefits...
                </p>
                <button onClick={() => navigate('/all-products')}>
                  Learn More
                </button>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6} className={styles.banner__side}>
          <img src={banner1} className='img-fluid w-100' alt='' />
          <img src={banner2} className='img-fluid w-100' alt='' />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
