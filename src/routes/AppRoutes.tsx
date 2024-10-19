import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageInit from '../pages/PageInit';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/academico" element={<PageInit />} />

    </Routes>
  );
};

export const routeNames: Record<string, string> = {
  "/academico": "Academico",
  "/academico/dashboard": "DashBoard",
 
};

export default AppRoutes;