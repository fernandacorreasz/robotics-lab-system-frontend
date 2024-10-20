import React, { useState } from 'react';
import { Layout } from 'antd';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import CustomBreadcrumb from '../../components/Common/CustomBreadcrumb';

const { Header, Content, Footer, Sider } = Layout;

const PageAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh', width: "100%"  }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapse}>
        <AdminSidebar />
      </Sider>
      <Layout  style={{width: 'max-content' }}>
        <Header>
          <div >Painel do Administrador</div>
        </Header>
        <CustomBreadcrumb />
        <Content >
          <h2>Bem-vindo ao painel do administrador!</h2>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2024 Robotics Lab Admin Panel
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PageAdmin;
