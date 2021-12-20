import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

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
        .put('http://localhost:5000/user/admin', user, {
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
    <div>
      <h1>Add Admin</h1>
      <form onSubmit={handelSubmit}>
        <input type='text' autoComplete='off' name='adminEmail' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddAdmin;
