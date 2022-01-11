import React from 'react';
import { Container, Row } from 'react-bootstrap';
import team1 from '../../../assets/images/aboutUs/team-1.webp';
import team2 from '../../../assets/images/aboutUs/team-2.webp';
import team3 from '../../../assets/images/aboutUs/team-3.jpg';
import team4 from '../../../assets/images/aboutUs/team-4.jpg';
import team5 from '../../../assets/images/aboutUs/team-5.jpg';
import team6 from '../../../assets/images/aboutUs/team-6.jpg';
import FounderCard from '../FounderCard/FounderCard';
import styles from './OurFounders.module.css';

const OurFounders = () => {
  const founders = [
    {
      id: 1,
      name: 'Niamh Shea',
      image: team1,
      post: 'Co-founder & Executive',
    },
    {
      id: 2,
      name: 'Orla Dwyer',
      image: team2,
      post: 'Chief Executive',
    },
    {
      id: 3,
      name: 'Danien James',
      image: team3,
      post: 'Co-founder, Chairman',
    },
    {
      id: 4,
      name: 'Dara Frazier',
      image: team4,
      post: 'Chief Strategy Officer',
    },
    {
      id: 5,
      name: 'Glenda Arvidson ',
      image: team5,
      post: 'HR Officer',
    },
    {
      id: 6,
      name: 'Melvin Davis',
      image: team6,
      post: 'Lead Developer',
    },
  ];

  return (
    <Container className={styles.founders}>
      <h3>Our Founders</h3>
      <p className='w-75'>We’re impartial and independent, and every day we create distinctive, world-class re intermediate backend supply programmes.</p>
      <Row className='g-4 my-3 my-md-4'>
        {founders.map((founder) => (
          <FounderCard key={founder.id} founder={founder} />
        ))}
      </Row>
    </Container>
  );
};

export default OurFounders;
