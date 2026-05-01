import React from "react";

const StatCard = ({ title, value }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
};

export default StatCard;
