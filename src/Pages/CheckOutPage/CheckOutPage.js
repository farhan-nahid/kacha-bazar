import { faFedex, faUps } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Cart from '../SharedComponents/Cart/Cart';
import LoadingSpinner from '../SharedComponents/LoadingSpinner/LoadingSpinner';
import styles from './Checkout.module.css';

const CheckOutPage = ({ cart, handleIncrease, totalPrice, handleDecrease }) => {
  const [data, setData] = useState({});
  const { loggedInUser } = useAuth();

  const handelBlur = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const shipping = data.shipping ? data.shipping : '0.00';
  const total = totalPrice + Number(shipping);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(data);
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
                  <input
                    type='text'
                    name='loginTime'
                    id='loginTime'
                    value={loggedInUser.metadata.lastSignInTime.slice(0, 16)}
                    readOnly
                  />
                </Col>
                <Col lg={6}>
                  <label htmlFor='cratedTime'>Created Account At</label>
                  <input
                    type='text'
                    name='cratedTime'
                    id='cratedTime'
                    value={loggedInUser.metadata.creationTime.slice(0, 16)}
                    readOnly
                  />
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
                  <input
                    type='text'
                    name='city'
                    id='city'
                    placeholder='Los Angeles'
                    autoComplete='off'
                    required
                    onBlur={handelBlur}
                  />
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
                  <input
                    type='number'
                    name='zip'
                    id='zip'
                    placeholder='12345'
                    autoComplete='off'
                    required
                    onBlur={handelBlur}
                  />
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
                <button type='submit'>Confirm Order</button>
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
                      />
                    ))
                  }
                </div>
              ) : (
                <LoadingSpinner />
              )}
              <ul className={styles.total__cost}>
                <li>
                  <span>Subtotal</span> <span>${totalPrice}</span>
                </li>
                <li>
                  <span>Shipping Cost</span> <span>${shipping}</span>
                </li>
                <li>
                  <span>TOTAL COST</span> <span>${total}</span>
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
