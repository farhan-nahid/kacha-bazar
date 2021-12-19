import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/all-orders')
      .then((res) => setOrders(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

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

  const handleStatusChange = (id, status) => {
    const modifiedOrders = [];
    orders.forEach((order) => {
      if (order._id === id) {
        order.status = status;
      }
      modifiedOrders.push(order);
    });
    setOrders(modifiedOrders);

    const modifiedStatus = { id, status };
    const loading = toast.loading('Updating....Please wait!');
    axios
      .put(`http://localhost:5000/order/${id}`, modifiedStatus)
      .then((res) => {
        if (res.status === 200) {
          toast.dismiss(loading);
          toast.success(`Order is ${modifiedStatus.status}`);
        }
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };

  return (
    <section>
      <h1>Manage Order</h1>
      <div>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          {orders.map((order, idx) => (
            <tbody>
              <tr>
                <td>{idx + 1}</td>
                <td>{order.email}</td>
                <td>
                  <select
                    className={
                      order.status === 'Pending' ? 'btn btn-warning' : order.status === 'Shipped' ? 'btn btn-success' : 'btn btn-danger'
                    }
                    defaultValue={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  >
                    <option className='bg-white text-muted'>Pending</option>
                    <option className='bg-white text-muted'>Rejected</option>
                    <option className='bg-white text-muted'>Shipped</option>
                  </select>
                </td>
                <td>
                  <span onClick={() => handleDeleteOrder(order._id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </section>
  );
};

export default ManageOrders;
