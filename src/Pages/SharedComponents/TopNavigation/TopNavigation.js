import React from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import cartIcon from '../../../assets/images/cart.svg';
import headerLogo from '../../../assets/images/headerLogo.svg';
import notifyIcon from '../../../assets/images/notifyIcon.svg';
import searchIcon from '../../../assets/images/search.svg';
import userIcon from '../../../assets/images/user.svg';
import useAuth from '../../../hooks/useAuth';
import Cart from '../Cart/Cart';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import styles from './TopNavigation.module.css';

const TopNavigation = ({ cart, handleShow, handleClose, show, handleDecrease, handleIncrease, totalPrice, handleCancelOrder, setCart }) => {
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/checkout');
    handleClose();
  };

  return (
    <header id={styles.header__top}>
      <Container>
        <Row>
          <Col lg={2} className='d-flex align-self-center'>
            <NavLink to='/'>
              <img src={headerLogo} alt='headerLogo' style={{ width: '110px' }} />
            </NavLink>
          </Col>
          <Col lg={7}>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type='text' placeholder='Search for products (e.g. fish, apple, oil)' autoComplete='off' spellCheck='false' />
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
                  <ProfileDetails setCart={setCart} />
                )}
              </li>
              <Offcanvas show={show} onHide={handleClose} placement='end' scroll={true}>
                <Offcanvas.Header closeButton className='offCanvas__header'>
                  <Offcanvas.Title>
                    {' '}
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='32'
                        d='M320 264l-89.6 112-38.4-44.88'
                      ></path>
                      <path
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='32'
                        d='M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32'
                      ></path>
                    </svg>{' '}
                    Shopping Cart
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {!cart.length && (
                    <div className={styles.placeholder__text}>
                      <span className={styles.placeholder__image}>
                        <svg
                          stroke='currentColor'
                          fill='#10b981 '
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='30px'
                          width='30px'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z'></path>
                        </svg>
                      </span>
                      <h6>Your cart is empty</h6>
                      <p>No items added in your cart. Please add product to your cart list.</p>
                    </div>
                  )}

                  <div className={styles.cart__item__container}>
                    {cart.map((pd) => (
                      <Cart
                        key={pd._id}
                        pd={pd}
                        totalPrice={totalPrice}
                        handleDecrease={handleDecrease}
                        handleIncrease={handleIncrease}
                        handleCancelOrder={handleCancelOrder}
                      />
                    ))}
                  </div>

                  <button className={styles.cart__button} onClick={handelClick} disabled={totalPrice ? false : true}>
                    Proceed To Checkout
                    <span>${totalPrice}.00</span>
                  </button>
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
