import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import category from '../../../assets/images/icons/category.svg';
import styles from './AddAdmin.module.css';

const AddAdmin = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const admin = e.target.adminEmail.value;
    const loading = toast.loading('Adding as Admin... Please wait!!!');
    if (!/\S+@\S+\.\S+/.test(admin)) {
      toast.error('Please Enter a valid Email Address..');
    } else {
      const user = { email: admin };
      axios
        .put('https://kacha-bazar.up.railway.app/user/admin', user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('kacha_bazar_token')}`,
          },
        })
        .then((res) => {
          if (res.data.matchedCount) {
            swal({
              title: 'Good job!',
              text: `You Added ${user.email} as an Admin!`,
              icon: 'success',
              button: 'OK!',
            });
            e.target.reset();
          } else {
            toast.error('This User is not in out Database');
          }
        })
        .catch((err) => toast.error(err.message))
        .finally(() => toast.dismiss(loading));
    }
  };

  return (
    <section id={styles.add__admin}>
      <Container>
        <h1>Add Admin</h1>
        <form onSubmit={handelSubmit}>
          <span className={styles.inputs}>
            <input
              type='text'
              placeholder='Add a New Admin'
              id='addAdmin'
              autoComplete='off'
              name='category'
            />
            <label htmlFor='addAdmin'>
              <img src={category} alt='category' />
            </label>
          </span>
          <button type='submit'>Add Admin</button>
        </form>
      </Container>
    </section>
  );
};

export default AddAdmin;
