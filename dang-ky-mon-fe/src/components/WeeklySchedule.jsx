import React from 'react';

const WeeklySchedule = () => {
  const schedule = [
    { day: 'Thứ 2', time: '07:00 - 09:30', subject: 'Lập trình Web', room: 'A101' },
    { day: 'Thứ 3', time: '13:00 - 15:30', subject: 'Cơ sở dữ liệu', room: 'B203' },
    { day: 'Thứ 4', time: '09:45 - 12:15', subject: 'Mạng máy tính', room: 'C305' },
    { day: 'Thứ 5', time: '07:00 - 09:30', subject: 'Trí tuệ nhân tạo', room: 'D102' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-gray-600 font-medium">Lịch học tuần này</h3>
      <div className="mt-4">
        {schedule.map((item) => (
          <div key={item.subject} className="flex items-center justify-between py-2 border-b border-gray-200">
            <div>
              <p className="text-gray-700 font-medium">{item.subject}</p>
              <p className="text-gray-500 text-sm">{item.time}</p>
              <p className="text-gray-500 text-sm">Phòng: {item.room}</p>
            </div>
            <span className="bg-indigo-100 text-indigo-500 text-xs px-2 py-1 rounded-full">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;