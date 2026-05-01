import React from "react";

const Header = () => {
  return (
    <header className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Task management dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage, track, and organize your daily tasks
        </p>
      </div>
    </header>
  );
};

export default Header;
