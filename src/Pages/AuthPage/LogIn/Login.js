import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailIcon from '../../../assets/images/login/email.svg';
import facebookIcon from '../../../assets/images/login/facebook.svg';
import gitHubIcon from '../../../assets/images/login/gitHub.svg';
import googleIcon from '../../../assets/images/login/google.svg';
import passwordIcon from '../../../assets/images/login/password.svg';
import styles from './Login.module.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset()
  };
  return (
    <section id={styles.login}>
      <Container>
        <h3>Sign In!</h3>

        <Row className={styles.third__party}>
          <Col lg={4} className='g-4'>
            <div className={styles.method1}>
              <img src={googleIcon} alt='googleIcon' />
              <h5>Google</h5>
            </div>
          </Col>
          <Col lg={4} className='g-4'>
            <div className={styles.method2}>
              <img src={facebookIcon} alt='facebookIcon' />
              <h5>Facebook</h5>
            </div>
          </Col>
          <Col lg={4} className='g-4'>
            <div className={styles.method3}>
              <img src={gitHubIcon} alt='gitHubIcon' />
              <h5>GitHub</h5>
            </div>
          </Col>
        </Row>

        <p className={styles.another}>OR</p>
        <form onSubmit={handleSubmit}>
          <span className={styles.inputs}>
            <input
              type='email'
              name='email'
              id='email'
              autoComplete='off'
              spellCheck='false'
              placeholder='Enter Your Email Address'
            />
            <label htmlFor='email'>
              <img src={emailIcon} alt='emailIcon' />
            </label>
          </span>
          <span className={styles.inputs}>
            <input
              type='password'
              name='password'
              id='password'
              autoComplete='off'
              spellCheck='false'
              placeholder='Enter Your Secret Password'
            />
            <label htmlFor='password'>
              <img src={passwordIcon} alt='passwordIcon' />
            </label>
          </span>
          <button type='submit'>
            Sign In <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Login;
