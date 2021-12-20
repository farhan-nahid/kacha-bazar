import React from 'react';
import { Container } from 'react-bootstrap';
import emailIcon from '../../../assets/images/login/email.svg';
import forgetPass from '../../../assets/images/login/forget-password.png';
import styles from './ResetPassword.module.css';

const ResetPassword = () => {
  const handelReset = (e) => {
    e.preventDefault();
    // e.target.reset()
  };

  return (
    <Container className={styles.reset__section}>
      <div className={styles.reset__container}>
        <img src={forgetPass} alt='forgetPass' className={styles.reset__img} />
        <form className={styles.reset__email} onSubmit={handelReset}>
          <span className={styles.inputs}>
            <input
              type='email'
              name='email'
              id='resetEmail'
              autoComplete='new-password'
              spellCheck='false'
              placeholder='Enter Your Email Address'
              required
            />
            <label htmlFor='resetEmail'>
              <img src={emailIcon} alt='emailIcon' />
            </label>
          </span>
          <div className='d-flex justify-content-end'>
            <button type='submit'>Reset</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
