import { Card, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <Card
        title="Đăng nhập hệ thống"
        style={{ width: 400 }}
      >
        <Input
          placeholder="Tài khoản"
          style={{ marginBottom: 20 }}
        />

        <Input.Password
          placeholder="Mật khẩu"
          style={{ marginBottom: 20 }}
        />

        <Button
          type="primary"
          block
          onClick={login}
        >
          Đăng nhập
        </Button>
      </Card>
    </div>
  );
}

export default LoginPage;