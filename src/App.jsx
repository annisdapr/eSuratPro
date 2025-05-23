import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // fungsi toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className="p-6 w-full">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
