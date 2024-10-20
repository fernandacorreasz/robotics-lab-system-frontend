import React from 'react';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutOutlined, DashboardOutlined, FileTextOutlined, BellOutlined, BookOutlined, MessageOutlined, BarChartOutlined, TrophyOutlined } from '@ant-design/icons';

const StudentSidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissionLevel');
    navigate('/');
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['dashboard']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        <Link to="/student/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="activities" icon={<FileTextOutlined />}>
        <Link to="/student/activities">Atividades</Link>
      </Menu.Item>
      <Menu.Item key="components-library" icon={<BookOutlined />}>
        <Link to="/student/components-library">Biblioteca de Componentes</Link>
      </Menu.Item>
      <Menu.Item key="notifications" icon={<BellOutlined />}>
        <Link to="/student/notifications">Notificações</Link>
      </Menu.Item>
      <Menu.Item key="forum" icon={<MessageOutlined />}>
        <Link to="/student/forum">Fórum</Link>
      </Menu.Item>
      <Menu.Item key="reports" icon={<BarChartOutlined />}>
        <Link to="/student/reports">Relatórios</Link>
      </Menu.Item>
      <Menu.Item key="request-certificate" icon={<TrophyOutlined />}>
        <Link to="/student/request-certificate">Solicitar Certificado</Link>
      </Menu.Item>
    </Menu>
  );
};

export default StudentSidebar;
