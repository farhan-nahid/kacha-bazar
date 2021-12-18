import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';

const RequiredAuth = ({ children, ...rest }) => {
  const { loggedInUser, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (loggedInUser) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} />;
};

export default RequiredAuth;
