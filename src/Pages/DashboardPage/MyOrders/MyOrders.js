import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { loggedInUser } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/all-orders?email=${loggedInUser.email}`)
      .then((res) => setOrders(res.data))
      .catch((err) => toast.error(err.message));
  }, [loggedInUser.email]);

  return (
    <section>
      <h1>My Order</h1>
      <div>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Order Time</th>
              <th>Email</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          {orders.map((order, idx) => (
            <tbody>
              <tr>
                <td>{idx + 1}</td>
                <td>{order.orderTime}</td>
                <td>{order.email}</td>
                <td>{order.totalPrice}</td>
                <td>{order.status}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </section>
  );
};

export default MyOrders;
