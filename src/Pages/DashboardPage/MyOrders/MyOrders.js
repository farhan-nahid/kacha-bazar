import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import styles from './MyOrders.module.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [nothing, setNothing] = useState('');
  const { loggedInUser } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/all-orders?email=${loggedInUser.email}`)
      .then((res) => {
        if (res.headers) {
          JSON.stringify(res.headers).slice(19, 20) === '2' && setNothing('Nothing order');
        }
        setOrders(res.data);
      })
      .catch((err) => toast.error(err.message));
  }, [loggedInUser.email]);

  const handleDeleteOrder = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'After deleted you will not be able to recover this Order!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const loading = toast.loading('Deleting...Please Wait!!');
        axios
          .delete(`http://localhost:5000/order/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              swal('This Order has been deleted!!', {
                icon: 'success',
              });
              axios
                .get(`http://localhost:5000/all-orders?email=${loggedInUser.email}`)
                .then((res) => {
                  if (res.headers) {
                    JSON.stringify(res.headers).slice(19, 20) === '2' && setNothing('Nothing order');
                  }
                  setOrders(res.data);
                })
                .catch((err) => toast.error(err.message));
              const restOrders = orders.filter((order) => order._id !== id);
              setOrders(restOrders);
            }
          })
          .catch((err) => toast.error(err.message))
          .finally(() => toast.dismiss(loading));
      } else {
        swal('This Order is safe!!');
      }
    });
  };

  return (
    <section id={styles.my__order}>
      <h1>My Orders</h1>
      <div>
        {nothing ? (
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
            <h6>Your Don't Order Any Product</h6>
            <p>No items added in your Order List. Please add product to your Order list.</p>
          </div>
        ) : (
          <>
            {orders.length ? (
              <Table bordered size='sm' responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Order Time</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Total Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {orders.map((order, idx) => (
                  <tbody>
                    <tr>
                      <td className='fw-bold'>{idx + 1}</td>
                      <td>{order.orderTime}</td>
                      <td>{order.email}</td>
                      <td className={`order__${order.status.toLowerCase()}`}>{order.status}</td>
                      <td>{order.totalPrice}</td>
                      <td>
                        <span onClick={() => handleDeleteOrder(order._id)}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            ) : (
              <LoadingSpinner />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MyOrders;
