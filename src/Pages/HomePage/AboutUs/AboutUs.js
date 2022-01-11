import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from './AboutUs.module.css';

const AboutUs = () => {
  const about = [
    {
      id: 1,
      name: 'Free Shipping',
      des: 'From $20.00',
      icon: (
        <svg
          stroke='#10B981'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
          height='34px'
          width='30px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='1' y='3' width='15' height='13'></rect>
          <polygon points='16 8 20 8 23 11 23 16 16 16 16 8'></polygon>
          <circle cx='5.5' cy='18.5' r='2.5'></circle>
          <circle cx='18.5' cy='18.5' r='2.5'></circle>
        </svg>
      ),
      bg: '#FEE2E2',
    },
    {
      id: 2,
      name: 'Support 24/7',
      des: 'At Anytime',
      icon: (
        <svg
          stroke='#10B981'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
          height='34px'
          width='30px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
        </svg>
      ),
      bg: '#E0E7FF',
    },
    {
      id: 3,
      name: 'Secure Payment',
      des: 'Totally Safe',
      icon: (
        <svg
          stroke='#10B981'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
          height='34px'
          width='30px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='1' y='4' width='22' height='16' rx='2' ry='2'></rect>
          <line x1='1' y1='10' x2='23' y2='10'></line>
        </svg>
      ),
      bg: '#FEF3C7',
    },
    {
      id: 4,
      name: 'Latest Offer',
      des: 'Upto 20% Off',
      icon: (
        <svg
          stroke='#10B981'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
          height='34px'
          width='30px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <polyline points='20 12 20 22 4 22 4 12'></polyline>
          <rect x='2' y='7' width='20' height='5'></rect>
          <line x1='12' y1='22' x2='12' y2='7'></line>
          <path d='M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z'></path>
          <path d='M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'></path>
        </svg>
      ),
      bg: '#D1FAE5',
    },
  ];
  return (
    <Container className={style.about__us}>
      <Row className='g-3'>
        {about.map((a) => (
          <Col key={a.id} lg={3} md={4} sm={6} xs={12}>
            <div style={{ background: a.bg, borderRadius: '7px' }} className='d-flex align-self-center p-4'>
              {a.icon}
              <span className='ms-3'>
                <h6>{a.name}</h6>
                <p>{a.des}</p>
              </span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutUs;
