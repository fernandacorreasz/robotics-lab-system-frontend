import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/login/LoginPage';
import PageAdmin from '../pages/pageAdmin/PageAdmin';
import PageLaboratorist from '../pages/pageLaboratorista/PageLaboratorist';
import PageStudent from '../pages/pageStudent/PageStudent';
import UnauthorizedPage from '../pages/login/UnauthorizedPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route 
        path="/admin" 
        element={
          <PrivateRoute requiredPermission={3}>
            <PageAdmin />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/laboratorist" 
        element={
          <PrivateRoute requiredPermission={2}>
            <PageLaboratorist />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/student" 
        element={
          <PrivateRoute requiredPermission={1}>
            <PageStudent />
          </PrivateRoute>
        } 
      />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
    </Routes>
  );
};

export default AppRoutes;
