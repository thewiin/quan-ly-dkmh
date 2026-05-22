import {
  Table,
  Button,
  Card,
  message,
  Progress,
} from "antd";

import MainLayout from "../src/layout/MainLayout.jsx";

import axiosClient from "../src/api/axiosClient.js";

import { useEffect, useState } from "react";

function DangKyPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const res = await axiosClient.get(
      "/lophocphan"
    );

    setCourses(res.data);
  };

  const dangKy = async (record) => {
    try {
      await axiosClient.post("/dangky", {
        maSV: "SV001",
        maLHP: record.maLHP,
        hocPhi: 1500000,
      });

      message.success("Đăng ký thành công");

      loadCourses();
    } catch (err) {
      message.error("Đăng ký thất bại");
    }
  };

  const columns = [
    {
      title: "Mã lớp",
      dataIndex: "maLHP",
    },
    {
      title: "Sĩ số",
      render: (_, record) => (
        <Progress
          percent={
            (record.siSoHienTai /
              record.siSoToiDa) *
            100
          }
        />
      ),
    },
    {
      title: "Đăng ký",
      render: (_, record) => (
        <Button
          type="primary"
          disabled={
            record.siSoHienTai >=
            record.siSoToiDa
          }
          onClick={() => dangKy(record)}
        >
          Đăng ký
        </Button>
      ),
    },
  ];

  return (
    <MainLayout>
      <Card title="Đăng ký môn học">
        <Table
          rowKey="maLHP"
          columns={columns}
          dataSource={courses}
        />
      </Card>
    </MainLayout>
  );
}

export default DangKyPage;