import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LogoutPage = () => {
  const history = useHistory();

  useEffect(() => {
    // Handle logout logic here
    // For example, remove the authentication tokens from local storage
    localStorage.removeItem('authToken');

    // Redirect the user to the login page
    history.push('/login');
  }, [history]);

  return (
    <div className="logout-container">
      <p>Logging out...</p>
    </div>
  );
};

export default LogoutPage;
