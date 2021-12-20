import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import emailIcon from '../../../assets/images/login/email.svg';
import facebookIcon from '../../../assets/images/login/facebook.svg';
import gitHubIcon from '../../../assets/images/login/gitHub.svg';
import googleIcon from '../../../assets/images/login/google.svg';
import passwordIcon from '../../../assets/images/login/password.svg';
import userIcon from '../../../assets/images/login/user.svg';
import styles from './Register.module.css';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset()
  };

  useEffect(() => {
    document.title = 'Register | Kacha Bazar';
  }, []);

  return (
    <section id={styles.register}>
      <Container>
        <h3>Get started for free!</h3>

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
        <form onSubmit={handleSubmit} autoComplete='off'>
          <span className={styles.inputs}>
            <input type='text' name='name' id='name1' autoComplete='off' spellCheck='false' placeholder='Enter Your Full Name' required />
            <label htmlFor='name1'>
              <img src={userIcon} alt='userIcon' />
            </label>
          </span>
          <span className={styles.inputs}>
            <input
              type='email'
              name='email'
              id='email2'
              autoComplete='new-password'
              spellCheck='false'
              placeholder='Enter Your Email Address'
              required
            />
            <label htmlFor='email2'>
              <img src={emailIcon} alt='emailIcon' />
            </label>
          </span>
          <span className={styles.inputs}>
            <input
              type='password'
              name='password'
              id='password1'
              autoComplete='off'
              spellCheck='false'
              placeholder='Enter Your Password'
              required
            />
            <label htmlFor='password1'>
              <img src={passwordIcon} alt='passwordIcon' />
            </label>
          </span>
          <span className={styles.inputs}>
            <input
              type='password'
              name='password'
              id='password2'
              autoComplete='off'
              spellCheck='false'
              placeholder='Confirm Your Password'
              required
            />
            <label htmlFor='password2'>
              <img src={passwordIcon} alt='passwordIcon' />
            </label>
          </span>
          <span className={styles.options}>
            <NavLink to='/login'>Already Have Account?</NavLink>
          </span>
          <button type='submit'>
            Get Started Now <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Register;
