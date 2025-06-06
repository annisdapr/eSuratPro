import { Home, FileText, Settings, LogOut, Menu, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-gray-200 z-20 pt-16
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'w-64' : 'w-16'}
        overflow-hidden
      `}
    >
      {/* Header: Logo & Toggle Button */}
      <div className="absolute top-0 left-0 flex items-center justify-between w-full px-4 py-3 bg-gray-300 z-30">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          {sidebarOpen && (
            <h1 className="text-lg font-semibold text-gray-800 whitespace-nowrap">E-SuratPro</h1>
          )}
        </div>
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <ArrowLeft size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col flex-1 px-2 py-6 space-y-8 mt-14">
        <div
          className="flex items-center space-x-4 cursor-pointer hover:text-blue-600 px-2"
          onClick={() => navigate('/')}
        >
          <Home size={20} />
          {sidebarOpen && <span className="text-base font-medium">Dashboard</span>}
        </div>
        <div
          className="flex items-center space-x-4 cursor-pointer hover:text-blue-600 px-2"
          onClick={() => navigate('/buat-surat')}
        >
          <FileText size={20} />
          {sidebarOpen && <span className="text-base font-medium">Buat Surat</span>}
        </div>
        <div
          className="flex items-center space-x-4 cursor-pointer hover:text-blue-600 px-2"
          onClick={() => navigate('/pengaturan')}
        >
          <Settings size={20} />
          {sidebarOpen && <span className="text-base font-medium">Pengaturan</span>}
        </div>
      </div>

      {/* Logout */}
      <div className="px-6 py-6 border-t border-gray-300">
        <div
          className="flex items-center space-x-4 cursor-pointer hover:text-red-600 px-2"
          onClick={() => navigate('/logout')}
        >
          <LogOut size={20} />
          {sidebarOpen && <span className="text-base font-medium">Keluar</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
