import { Button, Input, Card } from "antd";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="overlay-card">
          <h1>Hệ Thống Đăng Ký Môn Học</h1>

          <p>
            Đăng nhập để quản lý thời khóa biểu
            và đăng ký môn học.
          </p>
        </div>
      </div>

      <div className="right-panel">
        <Card className="login-card">
          <h1>Đăng Nhập</h1>

          <Input
            placeholder="Tên đăng nhập"
            size="large"
          />

          <Input.Password
            placeholder="Mật khẩu"
            size="large"
            style={{ marginTop: 20 }}
          />

          <Button
            type="primary"
            size="large"
            block
            style={{
              marginTop: 20,
              height: 50,
              borderRadius: 12,
            }}
          >
            Đăng Nhập
          </Button>
        </Card>
      </div>
    </div>
  );
}