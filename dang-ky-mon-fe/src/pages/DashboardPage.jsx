import MainLayout from "../src/layout/MainLayout.jsx";

import { Card, Col, Row } from "antd";

function DashboardPage() {
  return (
    <MainLayout>
      <h1>Dashboard Sinh Viên</h1>

      <Row gutter={20}>
        <Col span={8}>
          <Card title="Tín chỉ">
            15
          </Card>
        </Col>

        <Col span={8}>
          <Card title="GPA">
            3.5
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Học phí">
            5.000.000 VNĐ
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default DashboardPage;