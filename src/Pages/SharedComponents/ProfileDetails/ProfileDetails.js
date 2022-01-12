import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { emptyCart } from '../../../redux/feathers/productsSlice';
import styles from './ProfileDetails.module.css';

const ProfileDetails = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { loggedInUser, logOut } = useAuth();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const signOut = () => {
    logOut();
    dispatch(emptyCart());
  };

  return (
    <div ref={ref}>
      <img style={{ width: '47px', height: '45px', borderRadius: '50%' }} onClick={handleClick} src={loggedInUser?.photoURL} alt={loggedInUser.displayName} />

      <Overlay show={show} target={target} placement='bottom' container={ref}>
        <Popover id='popover-contained' className={styles.profile__body}>
          <Popover.Body>
            <img onClick={handleClick} style={{ border: '3px solid #10b981', width: '47px', height: '45px', borderRadius: '50%' }} src={loggedInUser?.photoURL} alt={loggedInUser?.displayName} className={styles.profile__popper} />
            <h6>
              <strong>{loggedInUser?.displayName}</strong>
            </h6>
            <p>
              <strong>{loggedInUser?.email}</strong>
            </p>
            <button onClick={signOut}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default ProfileDetails;
