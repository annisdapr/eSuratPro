import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import BuatSuratPage from './components/BuatSuratPage';
import FormBeasiswa from './pages/FormBeasiswa'; // ✅ Tambahkan import halaman FormBeasiswa

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="p-6 w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/buat-surat" element={<BuatSuratPage />} />
              <Route path="/form-beasiswa" element={<FormBeasiswa />} /> {/* ✅ Tambahkan route baru */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
