import {
  Progress,
  Table,
  Tag,
} from 'antd';

import MainLayout from '../../layouts/MainLayout';

function DangKyPage() {
  const columns = [
    {
      title: 'Mã lớp',
      dataIndex: 'maLHP',
    },
    {
      title: 'Môn học',
      dataIndex: 'tenMH',
    },
    {
      title: 'Sĩ số',
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
      title: 'Trạng thái',
      render: (_, record) => (
        <Tag
          color={
            record.trangThai === 'Mở'
              ? 'green'
              : 'red'
          }
        >
          {record.trangThai}
        </Tag>
      ),
    },
    {
      title: 'Action',
      render: () => (
        <Button type="primary">
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
          dataSource={[]}
        />
      </Card>
    </MainLayout>
  );
}

export default DangKyPage;