import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  File,
  Inbox,
  Send,
  PenSquare,
  Upload,
  BarChart2,
  CheckCircle,
  XCircle,
  Clock,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const MenuItem = ({
  icon,
  text,
  hasSubMenu = false,
  isOpen = false,
  onClick,
  level = 0,
  active = false,
}) => (
  <li
    onClick={onClick}
    className={`flex items-center justify-between p-2 rounded-md cursor-pointer text-sm my-1
      transition-colors
      ${active ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}
      ${level > 0 ? "text-gray-600" : "text-gray-800 font-medium"}
    `}
    style={{ paddingLeft: `${0.75 + level * 1}rem` }}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span>{text}</span>
    </div>
    {hasSubMenu &&
      (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
  </li>
);

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [openMenus, setOpenMenus] = useState({
    eSignature: false,
    pengajuan: false,
    status: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="w-64 bg-white p-2 border-r border-gray-200 flex-shrink-0">
      <div className="p-2">
        <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">
          Menu
        </h2>
      </div>
      <ul className="mt-2">
        <MenuItem
          icon={<File size={18} />}
          text="MySurat"
          active={pathname === "/"}
          onClick={() => navigate("/")}
        />
        <MenuItem
          icon={<Inbox size={18} />}
          text="Inbox"
          active={pathname === "/inbox"}
          onClick={() => navigate("/inbox")}
        />
        <MenuItem
          icon={<Send size={18} />}
          text="Sent"
          active={pathname === "/sent"}
          onClick={() => navigate("/sent")}
        />

        <MenuItem
          icon={<PenSquare size={18} />}
          text="e-Signature"
          hasSubMenu
          isOpen={openMenus.eSignature}
          onClick={() => toggleMenu("eSignature")}
          level={0}
        />
        {openMenus.eSignature && (
          <ul>
            <MenuItem
              text="Pengajuan tanda tangan"
              hasSubMenu
              isOpen={openMenus.pengajuan}
              onClick={() => toggleMenu("pengajuan")}
              level={1}
            />
            {openMenus.pengajuan && (
              <ul>
                <MenuItem
                  icon={<Upload size={16} />}
                  text="Upload Dokumen"
                  level={2}
                  active={pathname === "/upload-document"}
                  onClick={() => navigate("/upload-document")}
                />
                <MenuItem
                  icon={<BarChart2 size={16} />}
                  text="Status"
                  hasSubMenu
                  isOpen={openMenus.status}
                  onClick={() => toggleMenu("status")}
                  level={2}
                />
                {openMenus.status && (
                  <ul>
                    <MenuItem
                      icon={
                        <CheckCircle size={14} className="text-green-500" />
                      }
                      text="Selesai"
                      level={3}
                    />
                    <MenuItem
                      icon={<Clock size={14} className="text-blue-500" />}
                      text="Diproses"
                      level={3}
                    />
                    <MenuItem
                      icon={<XCircle size={14} className="text-red-500" />}
                      text="Ditolak"
                      level={3}
                    />
                  </ul>
                )}
              </ul>
            )}
            <MenuItem text="Penandatanganan Dokumen" level={1} />
          </ul>
        )}
      </ul>
    </aside>
  );
};

export default DashboardSidebar;
