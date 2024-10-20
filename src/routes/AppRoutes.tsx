import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/login/LoginPage';
import PageAdmin from '../pages/pageAdmin/PageAdmin';
import PageLaboratorist from '../pages/pageLaboratorista/PageLaboratorist';
import PageStudent from '../pages/pageStudent/PageStudent';

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
    </Routes>
  );

}

export const routeNames: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/manage-users": "Gerenciar Usuários",
  "/admin/certificates": "Certificados",
  "/admin/performance-reports": "Relatórios de Desempenho",
  "/admin/forum-sac": "Fórum-SAC",
  "/admin/profile-settings": "Configuração de Perfil"
};

export default AppRoutes;
