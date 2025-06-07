import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  FileText,
  Archive,
  Edit3,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const DashboardMenu = () => {
  const [isTandaTanganOpen, setIsTandaTanganOpen] = useState(true);

  const linkClass = "flex items-center p-2 rounded-md transition-colors";
  const activeLinkClass = "bg-gray-100 font-semibold text-gray-900";
  const inactiveLinkClass =
    "text-gray-600 hover:bg-gray-50 hover:text-gray-900";

  const getNavLinkClass = ({ isActive }) =>
    `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`;

  const subLinkClass =
    "flex items-center p-2 rounded-md text-sm transition-colors";
  const activeSubLinkClass = "font-semibold text-gray-900";
  const inactiveSubLinkClass = "text-gray-500 hover:text-gray-800";

  const getSubNavLinkClass = ({ isActive }) =>
    `${subLinkClass} ${isActive ? activeSubLinkClass : inactiveSubLinkClass}`;

  return (
    <aside className="w-64 p-4 pr-6">
      <nav className="space-y-2">
        <NavLink to="/" end className={getNavLinkClass}>
          <FileText size={20} className="mr-3" />
          Dokumen
        </NavLink>
        <NavLink to="/arsip" className={getNavLinkClass}>
          <Archive size={20} className="mr-3" />
          Arsip
        </NavLink>
        <NavLink to="/draf" className={getNavLinkClass}>
          <Edit3 size={20} className="mr-3" />
          Draf
        </NavLink>

        {/* Menu Tanda Tangan dengan Submenu */}
        <div>
          <button
            onClick={() => setIsTandaTanganOpen(!isTandaTanganOpen)}
            className="w-full flex justify-between items-center p-2 text-gray-600"
          >
            <div className="flex items-center">
              <FileText size={20} className="mr-3" />
              <span className="font-medium">Tanda Tangan</span>
            </div>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                isTandaTanganOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isTandaTanganOpen && (
            <div className="pl-6 mt-1 space-y-1">
              <NavLink
                to="/tanda-tangan/selesai"
                className={getSubNavLinkClass}
              >
                <CheckCircle size={16} className="mr-3" />
                Selesai
              </NavLink>
              <NavLink
                to="/tanda-tangan/tertunda"
                className={getSubNavLinkClass}
              >
                <Clock size={16} className="mr-3" />
                Tertunda
              </NavLink>
              <NavLink
                to="/tanda-tangan/ditolak"
                className={getSubNavLinkClass}
              >
                <XCircle size={16} className="mr-3" />
                Ditolak
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default DashboardMenu;
