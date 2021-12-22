import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import Testimonial from '../Testimonial/Testimonial';
import styles from './Testimonials.module.css';

SwiperCore.use([Pagination, Autoplay]);

const swiperSettings = {
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  slidesPerView: 1,
  pagination: {
    clickable: true,
  },
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get('https://kacha-bazar.herokuapp.com/all-reviews')
      .then((res) => setTestimonials(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <section id={styles.testimonials}>
      <div className={styles.transparent}>
        <Container>
          <Row>
            <Col lg={7} md={5} className='d-flex align-self-center'>
              <h1>So that's us.There's no other way to put it.</h1>
            </Col>
            <Col lg={5} md={7}>
              {testimonials.length ? (
                <Swiper {...swiperSettings}>
                  {testimonials.map((review) => (
                    <SwiperSlide key={review._id}>
                      <Testimonial review={review} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <LoadingSpinner />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Testimonials;
