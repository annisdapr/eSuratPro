import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Topbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 w-full flex items-center justify-between px-4 sm:px-6 py-2 bg-white shadow-sm border-b border-gray-200">
      {/* Sisi Kiri: Tombol & Logo Aplikasi */}
      <div className="flex items-center gap-4">
        {/* Tombol Hamburger */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle sidebar"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </div>
        </button>

        {/* Logo dan Nama Aplikasi */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Go to Dashboard"
        >
          <img src={logo} className="w-9 h-9" alt="Logo Aplikasi" />
          <span className="font-bold text-lg hidden sm:block">E-SuratPro</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-right hidden sm:block">
          <div className="font-semibold text-gray-800">Budi Santoso</div>
          <div className="text-sm text-gray-500">NIM : 221051182</div>
        </div>
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
        />
      </div>
    </header>
  );
};

export default Topbar;
