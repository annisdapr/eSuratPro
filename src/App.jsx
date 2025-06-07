import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardPage from "./pages/DashboardPage";
import BuatSuratPage from "./pages/BuatSuratPage";
import FormBeasiswa from "./pages/FormBeasiswa";
import DocumentList from "./components/dashboard/DocumentList";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Topbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <Sidebar sidebarOpen={sidebarOpen} />
          <main className="p-6 w-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardPage />}>
                <Route index element={<DocumentList />} />{" "}
                {/* Tampilan default */}
                <Route path="draf" element={<DocumentList />} />
                <Route path="arsip" element={<DocumentList />} />
                <Route path="tanda-tangan" element={<DocumentList />} />
                <Route path="tanda-tangan/:status" element={<DocumentList />} />
              </Route>

              <Route path="/buat-surat" element={<BuatSuratPage />} />
              <Route path="/form-beasiswa" element={<FormBeasiswa />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
