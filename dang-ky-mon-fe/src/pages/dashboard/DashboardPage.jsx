import MainLayout from "../../components/layout/MainLayout";
import { Row, Col } from "antd";
import StatCard from "../../components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div
        style={{
          background:
            "linear-gradient(135deg,#2952ff,#5b2cff)",
          padding: 30,
          borderRadius: 24,
          color: "white",
          marginBottom: 20,
        }}
      >
        <h1>Xin chào, Nguyễn Văn A 👋</h1>
        <p>
          Chào mừng trở lại portal sinh viên
        </p>
      </div>

      <Row gutter={[20, 20]}>
        <Col span={6}>
          <StatCard
            title="Tín chỉ đăng ký"
            value="18"
            sub="Học kỳ 1/2024"
          />
        </Col>

        <Col span={6}>
          <StatCard
            title="GPA hiện tại"
            value="3.85"
            sub="Tăng 0.05"
          />
        </Col>

        <Col span={6}>
          <StatCard
            title="Học phí"
            value="0đ"
            sub="Đã thanh toán"
          />
        </Col>

        <Col span={6}>
          <StatCard
            title="Tín chỉ tích lũy"
            value="108"
            sub="Còn 12 tín chỉ"
          />
        </Col>
      </Row>
    </MainLayout>
  );
}