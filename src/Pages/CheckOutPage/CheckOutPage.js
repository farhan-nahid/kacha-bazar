import { faFedex, faUps } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import { postOrdersAsync } from '../../redux/feathers/ordersSlice';
import { emptyCart } from '../../redux/feathers/productsSlice';
import Cart from '../SharedComponents/Cart/Cart';
import Footer from '../SharedComponents/Footer/Footer';
import TopNavigation from '../SharedComponents/TopNavigation/TopNavigation';
import styles from './CheckoutPage.module.css';

const CheckOutPage = () => {
  const [data, setData] = useState({});
  const [isDisable, setIsDisable] = useState(false);
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const handelChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  let totalPrice = 0;
  for (const pd of cart) {
    totalPrice = totalPrice + Number(pd.totalPrice);
  }

  const shipping = data.shipping ? data.shipping : 0;
  const total = totalPrice + Number(shipping);

  useEffect(() => {
    document.title = 'Checkout | Kacha Bazar';
    window.scrollTo({
      top: 0,
    });
    if (!totalPrice) {
      setIsDisable(true);
    }
  }, [totalPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisable(true);
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const monthName = month[date.getMonth()];
    data.name = loggedInUser.displayName;
    data.email = loggedInUser.email;
    data.street = e.target.street.value;
    data.city = e.target.city.value;
    data.country = e.target.country.value;
    data.zip = e.target.zip.value;
    data.totalPrice = total;
    data.productInfo = cart;
    data.orderTime = `${day}-${monthName}-${year}`;
    data.status = 'Pending';
    dispatch(postOrdersAsync(data)).then((res) => {
      if (res.payload.insertedId) {
        swal({
          title: `Well Done ${loggedInUser.displayName}!!`,
          text: `You Have To Pay Us ${total}$!`,
          icon: 'success',
          button: 'OK!',
          position: 'center',
        });
        navigate('/dashboard/my-orders');
        dispatch(emptyCart());
        setIsDisable(false);
      }
    });
  };

  return (
    <>
      <TopNavigation />
      <section id={styles.checkout}>
        <Container>
          <Row>
            <Col lg={6} className='mt-4 mt-md-0'>
              <Container>
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
                      <input type='text' name='street' id='street' placeholder='123 Boulevard Rd, Beverley Hills' autoComplete='off' required />
                    </Col>
                    <Col lg={4} className='mt-4'>
                      <label htmlFor='city'>Your City</label>
                      <input type='text' name='city' id='city' placeholder='Los Angeles' autoComplete='off' required />
                    </Col>
                    <Col lg={4} className='mt-4'>
                      <label htmlFor='country'>Your Country</label>
                      <input type='text' name='country' id='country' placeholder='United State' autoComplete='off' required />
                    </Col>
                    <Col lg={4} className='mt-4'>
                      <label htmlFor='zip'>Country Code</label>
                      <input type='number' name='zip' id='zip' placeholder='12345' autoComplete='off' required />
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
                      <input type='radio' name='shipping' id='fexEx' required value='15' onChange={handelChange} />
                    </Col>
                    <Col lg={6} className={styles.shipping__methods}>
                      <label htmlFor='ups'>
                        <FontAwesomeIcon icon={faUps} />
                        <small className='ms-3 mt-1' style={{ position: 'absolute' }}>
                          Delivery 7 Days Cost $7
                        </small>
                      </label>
                      <input type='radio' name='shipping' id='ups' required value='7' onChange={handelChange} />
                    </Col>
                  </Row>
                  <h4 className='my-5'>04. Payment Details</h4>

                  <Row>
                    <Col lg={6} className={styles.payment__methods}>
                      <label htmlFor='money'>
                        <FontAwesomeIcon icon={faMoneyBillWave} />
                        <span className='ms-3'>Cash On Delivery</span>
                      </label>
                      <input type='radio' name='payment' id={styles.money} required onChange={handelChange} value='COD' />
                    </Col>
                  </Row>
                  <span className='d-flex justify-content-center'>
                    <button type='submit' disabled={isDisable}>
                      Confirm Order
                    </button>
                  </span>
                </form>
              </Container>
            </Col>
            <Col lg={6}>
              <div className={styles.order__summery}>
                <h4 className='mb-4'>Order Summary</h4>
                {cart.length ? (
                  <div className={styles.product__container}>
                    {
                      // map category data
                      cart.map((pd) => (
                        <Cart key={pd.item._id} pd={pd} />
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
      <Footer />
    </>
  );
};

export default CheckOutPage;
