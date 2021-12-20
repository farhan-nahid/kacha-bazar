import { faFedex, faUps } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import Cart from '../SharedComponents/Cart/Cart';
import styles from './CheckoutPage.module.css';

const CheckOutPage = ({ cart, handleIncrease, totalPrice, handleDecrease, handleCancelOrder, setCart }) => {
  const [data, setData] = useState({});
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();
  const handelBlur = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const shipping = data.shipping ? data.shipping : 0;
  const total = totalPrice + Number(shipping);

  const handleSubmit = (e) => {
    e.preventDefault();
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const monthName = month[date.getMonth()];
    data.name = loggedInUser.displayName;
    data.email = loggedInUser.email;
    data.totalPrice = total;
    data.productInfo = cart;
    data.orderTime = `${day}-${monthName}-${year}`;
    data.status = 'Pending';
    axios.post('http://localhost:5000/order', data).then((res) => {
      if (res.status === 200) {
        swal({
          title: `Well Done ${loggedInUser.displayName}!!`,
          text: `You Have To Pay Us ${total}$!`,
          icon: 'success',
          button: 'OK!',
          position: 'center',
        });
        navigate('/dashboard/my-orders');
        setCart([]);
      }
    });
  };

  return (
    <section id={styles.checkout}>
      <Container>
        <Row>
          <Col lg={6}>
            <h4>01. Personal Details</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <Row className='g-4'>
                <Col lg={6}>
                  <label htmlFor='userName'>Your Name</label>
                  <input type='text' name='name' id='userName' value={loggedInUser.displayName} readOnly />
                </Col>
                <Col lg={6}>
                  <label htmlFor='userEmail'>Email Address</label>
                  <input type='email' name='email' id='userEmail' value={loggedInUser.email} readOnly />
                </Col>
                <Col lg={6}>
                  <label htmlFor='loginTime'>Last Login Time</label>
                  <input type='text' name='loginTime' id='loginTime' value={loggedInUser.metadata.lastSignInTime.slice(0, 16)} readOnly />
                </Col>
                <Col lg={6}>
                  <label htmlFor='cratedTime'>Created Account At</label>
                  <input type='text' name='cratedTime' id='cratedTime' value={loggedInUser.metadata.creationTime.slice(0, 16)} readOnly />
                </Col>
              </Row>
            </form>

            <h4>02. Shipping Details</h4>
            <form className='mt-4' onSubmit={handleSubmit}>
              <Row className='g-4'>
                <Col lg={12}>
                  <label htmlFor='street'>Street Address</label>
                  <input
                    type='text'
                    name='street'
                    id='street'
                    placeholder='123 Boulevard Rd, Beverley Hills'
                    autoComplete='off'
                    required
                    onBlur={handelBlur}
                  />
                </Col>
                <Col lg={4} className='mt-4'>
                  <label htmlFor='city'>Your City</label>
                  <input type='text' name='city' id='city' placeholder='Los Angeles' autoComplete='off' required onBlur={handelBlur} />
                </Col>
                <Col lg={4} className='mt-4'>
                  <label htmlFor='country'>Your Country</label>
                  <input
                    type='text'
                    name='country'
                    id='country'
                    placeholder='United State'
                    autoComplete='off'
                    required
                    onBlur={handelBlur}
                  />
                </Col>
                <Col lg={4} className='mt-4'>
                  <label htmlFor='zip'>Country Code</label>
                  <input type='number' name='zip' id='zip' placeholder='12345' autoComplete='off' required onBlur={handelBlur} />
                </Col>
              </Row>
              <h4 className='my-5'>03. Shipping method</h4>

              <Row>
                <Col lg={6} className={styles.shipping__methods}>
                  <label htmlFor='fexEx'>
                    <span>
                      <FontAwesomeIcon icon={faFedex} />
                      <small className='ms-3 mt-2' style={{ position: 'absolute' }}>
                        Delivery 1 Day Cost $15
                      </small>
                    </span>
                  </label>
                  <input type='radio' name='shipping' id='fexEx' required value='15' onChange={handelBlur} />
                </Col>
                <Col lg={6} className={styles.shipping__methods}>
                  <label htmlFor='ups'>
                    {' '}
                    <FontAwesomeIcon icon={faUps} />
                    <small className='ms-3 mt-1' style={{ position: 'absolute' }}>
                      Delivery 7 Days Cost $7
                    </small>
                  </label>
                  <input type='radio' name='shipping' id='ups' required value='7' onChange={handelBlur} />
                </Col>
              </Row>
              <h4 className='my-5'>04. Payment Details</h4>

              <Row>
                <Col lg={6} className={styles.payment__methods}>
                  <label htmlFor='money'>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <span className='ms-3'>Cash On Delivery</span>
                  </label>
                  <input type='radio' name='payment' id='money' required />
                </Col>
              </Row>
              <span className='d-flex justify-content-center'>
                <button type='submit' disabled={totalPrice ? false : true}>
                  Confirm Order
                </button>
              </span>
            </form>
          </Col>
          <Col lg={6}>
            <div className={styles.order__summery}>
              <h4 className='mb-4'>Order Summary</h4>
              {cart.length ? (
                <div className={styles.product__container}>
                  {
                    // map category data
                    cart.map((pd) => (
                      <Cart
                        key={pd._id}
                        pd={pd}
                        totalPrice={totalPrice}
                        handleDecrease={handleDecrease}
                        handleIncrease={handleIncrease}
                        handleCancelOrder={handleCancelOrder}
                      />
                    ))
                  }
                </div>
              ) : (
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
              <ul className={styles.total__cost}>
                <li>
                  <span>Subtotal</span> <span>${totalPrice}.00</span>
                </li>
                <li>
                  <span>Shipping Cost</span> <span>${shipping}.00</span>
                </li>
                <li>
                  <span>TOTAL COST</span> <span>${total}.00</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckOutPage;