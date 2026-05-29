import React from 'react';

const StatCard = ({ title, value, sub }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <p className="text-3xl font-semibold text-indigo-500">{value}</p>
      <p className="text-gray-500">{sub}</p>
    </div>
  );
};

export default StatCard;