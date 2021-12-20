import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Not Found | Kacha Bazar';
  }, []);

  return (
    <Container className={styles.notFound__container}>
      <div>
        <h2>404</h2>
        <h3>Page not found</h3>
        <Link to='/'>Back to homepage</Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
