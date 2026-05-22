import { Card, Col, Row, Statistic } from 'antd';
import MainLayout from '../../layouts/MainLayout';

function DashboardPage() {
  return (
    <MainLayout>
      <h1>Dashboard Sinh Viên</h1>

      <Row gutter={20}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Tín chỉ"
              value={15}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="GPA"
              value={3.5}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Học phí"
              value={5000000}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Môn đã đăng ký"
              value={5}
            />
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default DashboardPage;