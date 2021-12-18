import { faQuoteLeft, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <section id={styles.dashboard}>
      <Container>
        <Row>
          <Col lg={3}>
            <aside>
              <ul>
                <NavLink to='/dashboard/profile'>
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  Profile
                </NavLink>
                <NavLink to='/dashboard/my-orders'>
                  <span>
                    <FontAwesomeIcon icon={faTasks} />
                  </span>
                  My Orders
                </NavLink>
                <NavLink to='/dashboard/review'>
                  <span>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </span>
                  Review
                </NavLink>
                <NavLink to='/dashboard/'></NavLink>
                <NavLink to='/dashboard/'></NavLink>
                <NavLink to='/dashboard/'></NavLink>
                <NavLink to='/dashboard/'></NavLink>
                <NavLink to='/dashboard/'></NavLink>
                <NavLink to='/dashboard/'></NavLink>
              </ul>
            </aside>
          </Col>
          <Col lg={9}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
