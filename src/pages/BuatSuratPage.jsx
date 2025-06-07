import React from "react";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeaderToolbar from "../components/HeaderToolbar";
const suratTypes = [
  { title: "SR Beasiswa", route: "/form-beasiswa" },
  // { title: "SR Magang", route: "/form-magang" },
  // { title: "SKM Aktif", route: "/form-skm-aktif" },
  // { title: "SK Tidak Menerima Beasiswa Lain", route: "/form-sktmb" },
];

const BuatSuratPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header Toolbar */}
      <HeaderToolbar
        title="Buat Dokumen Baru"
        searchPlaceholder="Cari jenis surat..."
      />

      {/* Kartu Surat */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {suratTypes.map((surat, idx) => (
          <div
            key={idx}
            onClick={() => navigate(surat.route)}
            className="bg-white border rounded-lg flex flex-col items-center justify-center p-4 h-32 cursor-pointer hover:shadow-lg hover:border-blue-500 transition-all duration-200"
          >
            <FileText size={32} className="text-blue-600 mb-2" />
            <span className="text-sm font-medium text-center text-gray-700">
              {surat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuatSuratPage;
