import React from 'react';

const CourseNotifications = () => {
  const notifications = [
    { id: 1, title: 'Mở đăng ký học kỳ 2/2024', time: '2 giờ trước' },
    { id: 2, title: 'Nhắc nhở nộp học phí', time: '1 ngày trước' },
    { id: 3, title: 'Kết quả thi giữa kỳ đã công bố', time: '3 ngày trước' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-gray-600 font-medium">Thông báo đăng ký môn</h3>
      <div className="mt-4">
        {notifications.map((item) => (
          <div key={item.id} className="flex items-center py-2 border-b border-gray-200">
            <div>
              <p className="text-gray-700 font-medium">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseNotifications;