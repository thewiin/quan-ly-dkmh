import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />

      <Layout>
        <Navbar />

        <Content style={{ padding: 24 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;