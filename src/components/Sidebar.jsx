// Lokasi: src/components/Sidebar.jsx

import { useState } from "react";
import {
  Home,
  FileText,
  Settings,
  LogOut,
  User,
  Shield,
  ChevronDown,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook untuk mendapatkan path URL saat ini

  // State untuk mengontrol visibilitas submenu
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Fungsi untuk mengecek apakah sebuah link sedang aktif
  const isActive = (path) => location.pathname === path;

  // Daftar item menu utama
  const menuItems = [
    { name: "Dashboard", icon: <Home size={22} />, route: "/" },
    { name: "Buat Surat", icon: <FileText size={22} />, route: "/buat-surat" },
  ];

  // Daftar item submenu pengaturan
  const settingsSubItems = [
    { name: "Profil", icon: <User size={20} />, route: "/pengaturan/profil" },
    {
      name: "Keamanan",
      icon: <Shield size={20} />,
      route: "/pengaturan/keamanan",
    },
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 h-screen flex flex-col justify-between pt-4
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? "w-64" : "w-20"} 
      `}
    >
      <div>
        {/* Header Logo */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                E-Surat
              </h1>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-6">
          <ul className="space-y-1 px-2">
            {/* Menu Utama */}
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.route);
                  }}
                  className={`flex items-center py-2.5 px-4 rounded-lg transition-colors
                    ${
                      isActive(item.route)
                        ? "bg-gray-200 text-gray-900 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {item.icon}
                  {sidebarOpen && <span className="ml-4">{item.name}</span>}
                </a>
              </li>
            ))}

            {/* Menu Pengaturan dengan Submenu */}
            <li>
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className={`w-full flex items-center justify-between py-2.5 px-4 rounded-lg transition-colors text-gray-600 hover:bg-gray-100`}
              >
                <div className="flex items-center">
                  <Settings size={22} />
                  {sidebarOpen && <span className="ml-4">Pengaturan</span>}
                </div>
                {sidebarOpen && (
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      isSettingsOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Daftar Submenu */}
              {isSettingsOpen && sidebarOpen && (
                <ul className="mt-1 pl-8 space-y-1">
                  {settingsSubItems.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(subItem.route);
                        }}
                        className={`flex items-center py-2 px-4 rounded-lg text-sm
                                ${
                                  isActive(subItem.route)
                                    ? "text-gray-900 font-semibold"
                                    : "text-gray-500 hover:text-gray-900"
                                }`}
                      >
                        {subItem.icon}
                        <span className="ml-3">{subItem.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout */}
      <div className="px-2 pb-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/logout");
          }}
          className="flex items-center py-2.5 px-4 rounded-lg text-gray-600 hover:bg-gray-100 border-t border-gray-200 mt-4"
        >
          <LogOut size={22} />
          {sidebarOpen && <span className="ml-4">Keluar</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
