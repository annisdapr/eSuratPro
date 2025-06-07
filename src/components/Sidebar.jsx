import { Home, FileText, Settings, LogOut } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

// Komponen item sidebar
const SidebarItem = ({ icon, text, active, sidebarOpen, onClick }) => (
  <li
    onClick={onClick}
    className={`
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group
      ${
        active
          ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
          : "hover:bg-gray-100 text-gray-600"
      }
    `}
  >
    {icon}
    <span
      className={`overflow-hidden transition-all whitespace-nowrap ${
        sidebarOpen ? "w-52 ml-3" : "w-0"
      }`}
    >
      {text}
    </span>
  </li>
);

// Komponen utama Sidebar
export const Sidebar = ({ sidebarOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate("/login");
  };

  return (
    <>
      <aside className="h-screen z-20">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <ul className="flex-1 px-3 pt-4">
            <SidebarItem
              icon={<Home size={20} />}
              text="Dashboard"
              active={pathname === "/"}
              sidebarOpen={sidebarOpen}
              onClick={() => navigate("/")}
            />
            <SidebarItem
              icon={<FileText size={20} />}
              text="Buat Surat"
              active={
                pathname.startsWith("/buat-surat") ||
                pathname.startsWith("/form-")
              }
              sidebarOpen={sidebarOpen}
              onClick={() => navigate("/buat-surat")}
            />
            <SidebarItem
              icon={<Settings size={20} />}
              text="Pengaturan"
              active={pathname === "/pengaturan"}
              sidebarOpen={sidebarOpen}
              />
            <SidebarItem
              icon={<LogOut size={20} />}
              text="Logout"
              sidebarOpen={sidebarOpen}
              onClick={() => setShowLogoutModal(true)}
            />
          </ul>
        </nav>
      </aside>

      {/* Modal Konfirmasi Logout - tanpa latar hitam */}
      {showLogoutModal && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full pointer-events-auto">
            <h2 className="text-lg font-semibold mb-4">Yakin ingin logout?</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
