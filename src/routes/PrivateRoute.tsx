import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;  // Corrigir a tipagem para JSX.Element
  requiredPermission: number;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredPermission }) => {
  const token = localStorage.getItem('token');
  const permissionLevel = parseInt(localStorage.getItem('permissionLevel') || '0', 10);

  if (!token) {
    return <Navigate to="/" />;
  }

  if (permissionLevel !== requiredPermission) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
