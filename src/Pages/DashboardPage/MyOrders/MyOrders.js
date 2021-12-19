import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/all-orders')
      .then((res) => setOrders(res.data))
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <div>
      <h1>My Order</h1>
      <div>
        {orders.map((order) => (
          <h1>{order.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
