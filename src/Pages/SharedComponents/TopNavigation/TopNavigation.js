import React from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import cartIcon from '../../../assets/images/cart.svg';
import headerLogo from '../../../assets/images/headerLogo.svg';
import notifyIcon from '../../../assets/images/notifyIcon.svg';
import searchIcon from '../../../assets/images/search.svg';
import userIcon from '../../../assets/images/user.svg';
import useAuth from '../../../hooks/useAuth';
import styles from './TopNavigation.module.css';

const TopNavigation = ({ cart, handleShow, handleClose, show }) => {
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();

  return (
    <header id={styles.header__top}>
      <Container>
        <Row>
          <Col lg={2} className='d-flex align-self-center'>
            <NavLink to='/'>
              <img src={headerLogo} alt='headerLogo' />
            </NavLink>
          </Col>
          <Col lg={7}>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type='text'
                placeholder='Search for products (e.g. fish, apple, oil)'
                autoComplete='off'
                spellCheck='false'
              />
              <button type='submit'>
                <img src={searchIcon} alt='searchIcon' />
              </button>
            </form>
          </Col>
          <Col lg={3} className='d-flex justify-content-end align-self-center'>
            <ul className={styles.top__nav__icon}>
              <li>
                <img src={notifyIcon} alt='notifyIcon' />
              </li>

              <li className={styles.cart__icon}>
                <img src={cartIcon} alt='cartIcon' onClick={handleShow} />
                <span>{cart.length}</span>
              </li>
              <li>
                {!loggedInUser ? (
                  <img src={userIcon} alt='userIcon' onClick={() => navigate('/login')} />
                ) : (
                  <img
                    src={loggedInUser.photoURL}
                    alt={loggedInUser.displayName}
                    className='rounded-circle'
                    onClick={() => navigate('/dashboard/profile')}
                  />
                )}
              </li>
              <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
                  lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default TopNavigation;
