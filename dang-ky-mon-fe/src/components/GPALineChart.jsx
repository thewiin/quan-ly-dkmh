import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'HK1', gpa: 3.2 },
  { name: 'HK2', gpa: 3.5 },
  { name: 'HK3', gpa: 3.7 },
  { name: 'HK4', gpa: 4.0 },
  { name: 'HK5', gpa: 3.9 },
  { name: 'HK6', gpa: 4.0 },
];

const GPALineChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-gray-600 font-medium">Biểu đồ GPA theo kỳ</h3>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="gpa" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default GPALineChart;