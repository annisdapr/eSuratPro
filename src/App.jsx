import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import BuatSuratPage from './pages/BuatSuratPage';
import FormBeasiswa from './pages/FormBeasiswa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/buat-surat" element={<BuatSuratPage />} />
          <Route path="/form-beasiswa" element={<FormBeasiswa />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;