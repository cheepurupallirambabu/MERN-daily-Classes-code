import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children, authenicated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenicated) {
      navigate('/login');
    }
  }, [authenicated, navigate]);

  // Render children only if authenticated, otherwise render nothing while redirecting.
  return authenicated ? children : null;
}

export default ProtectedRoute;