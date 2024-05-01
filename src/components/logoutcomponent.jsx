// LogoutComponent.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const LogoutComponent = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Perform logout logic if necessary
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutComponent;
