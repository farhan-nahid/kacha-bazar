import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { emptyCart } from '../../../redux/feathers/productsSlice';
import styles from './Profile.module.css';

const Profile = () => {
  const { loggedInUser, logOut } = useAuth();
  const dispatch = useDispatch();

  const signOut = () => {
    logOut();
    dispatch(emptyCart());
  };

  return (
    <>
      {loggedInUser && (
        <section id={styles.my__profile}>
          <Container>
            <h1>My Profile</h1>
            <div className={styles.profile}>
              <img src={loggedInUser?.photoURL} alt={loggedInUser.displayName} />
              <h4>{loggedInUser.displayName}</h4>
              <p>{loggedInUser.email}</p>
              <button onClick={signOut}>Logout</button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default Profile;
