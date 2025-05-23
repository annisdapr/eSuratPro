import React from 'react';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white shadow-sm border-b border-gray-200">
      {/* Tombol Hamburger */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle sidebar"
      >
        {/* Icon strip 3 sederhana */}
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </button>

      {/* Profil */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="font-semibold text-gray-800">Budi Santoso</div>
          <div className="text-sm text-gray-500">NIM : 221051182</div>
        </div>
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
        />
      </div>
    </div>
  );
};

export default Topbar;
