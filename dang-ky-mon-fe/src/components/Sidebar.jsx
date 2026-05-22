import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  BookOutlined,
  CalendarOutlined,
  DollarOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Sider width={240} theme="dark">
      <div
        style={{
          color: 'white',
          fontSize: 24,
          padding: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        DKMH
      </div>

      <Menu
        theme="dark"
        mode="inline"
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: '/dang-ky',
            icon: <BookOutlined />,
            label: 'Đăng ký môn',
          },
          {
            key: '/thoi-khoa-bieu',
            icon: <CalendarOutlined />,
            label: 'Thời khóa biểu',
          },
          {
            key: '/hoc-phi',
            icon: <DollarOutlined />,
            label: 'Học phí',
          },
          {
            key: '/profile',
            icon: <UserOutlined />,
            label: 'Cá nhân',
          },
        ]}
      />
    </Sider>
  );
}

export default Sidebar;