import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const { Content } = Layout;

export default function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <Topbar />

        <Content
          style={{
            margin: 20,
            padding: 20,
            background: "#f5f7fb",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}