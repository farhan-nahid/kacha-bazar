import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import emailIcon from '../../../assets/images/login/email.svg';
import facebookIcon from '../../../assets/images/login/facebook.svg';
import gitHubIcon from '../../../assets/images/login/gitHub.svg';
import googleIcon from '../../../assets/images/login/google.svg';
import passwordIcon from '../../../assets/images/login/password.svg';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../SharedComponents/Footer/Footer';
import TopNavigation from '../../SharedComponents/TopNavigation/TopNavigation';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn, gitHubSignIn, emailSignIn, isDisable } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please Enter a valid Email Address..');
    } else {
      emailSignIn(email, password, navigate, location, e);
    }
  };

  useEffect(() => {
    document.title = 'Login | Kacha Bazar';
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <TopNavigation />
      <section id={styles.login}>
        <Container>
          <h3>Sign In!</h3>

          <Row className={styles.third__party}>
            <Col lg={4} className='g-4'>
              <button className={styles.method1} onClick={() => googleSignIn(navigate, location)}>
                <img src={googleIcon} alt='googleIcon' />
                <h5>Google</h5>
              </button>
            </Col>
            <Col lg={4} className='g-4'>
              <button className={styles.method2} onClick={() => toast.error('Sorry Facebook auth not work in deployment')}>
                <img src={facebookIcon} alt='facebookIcon' />
                <h5>Facebook</h5>
              </button>
            </Col>
            <Col lg={4} className='g-4'>
              <button className={styles.method3} onClick={() => gitHubSignIn(navigate, location)}>
                <img src={gitHubIcon} alt='gitHubIcon' />
                <h5>GitHub</h5>
              </button>
            </Col>
          </Row>

          <p className={styles.another}>OR</p>
          <form onSubmit={handleSubmit}>
            <span className={styles.inputs}>
              <input type='email' name='email' id='email' autoComplete='off' spellCheck='false' placeholder='Enter Your Email Address' required />
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
                required
              />
              <label htmlFor='password'>
                <img src={passwordIcon} alt='passwordIcon' />
              </label>
            </span>
            <span className={styles.options}>
              <NavLink to='/reset-password'>Forget Password?</NavLink>
              <NavLink to='/register'>New User?</NavLink>
            </span>
            <button type='submit' disabled={isDisable}>
              {isDisable ? 'Signing....' : 'Sign In'} <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Login;
