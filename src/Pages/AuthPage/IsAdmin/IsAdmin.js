import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';

const IsAdmin = ({ children, ...rest }) => {
  const { loggedInUser, isLoading, isAdmin } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (loggedInUser && isAdmin) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} />;
};

export default IsAdmin;
