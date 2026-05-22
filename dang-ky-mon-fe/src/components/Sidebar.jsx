import {
  DashboardOutlined,
  BookOutlined,
  CalendarOutlined,
  DollarOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Sider
      width={240}
      style={{
        background: "#17308f",
      }}
    >
      <div className="logo">
        <h2 style={{ color: "white", padding: 20 }}>
          PNUni
        </h2>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          background: "#17308f",
          border: "none",
        }}
        items={[
          {
            key: "1",
            icon: <DashboardOutlined />,
            label: "Dashboard",
            onClick: () => navigate("/"),
          },
          {
            key: "2",
            icon: <BookOutlined />,
            label: "Đăng ký môn",
          },
          {
            key: "3",
            icon: <CalendarOutlined />,
            label: "Thời khóa biểu",
          },
          {
            key: "4",
            icon: <DollarOutlined />,
            label: "Học phí",
          },
          {
            key: "5",
            icon: <UserOutlined />,
            label: "Hồ sơ cá nhân",
          },
        ]}
      />
    </Sider>
  );
}