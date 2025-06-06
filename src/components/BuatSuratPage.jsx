import React from 'react';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Tambahkan ini
import HeaderToolbar from './HeaderToolbar';

const suratTypes = [
  { title: 'SR Beasiswa', route: '/form-beasiswa' },
  { title: 'SR Magang', route: '/form-magang' },
  { title: 'SKM Aktif', route: '/form-skm-aktif' },
  { title: 'SK Tidak Menerima Beasiswa Lain', route: '/form-sktmb' },
];

const BuatSuratPage = () => {
  const navigate = useNavigate(); // ✅ Inisialisasi navigator

  return (
    <div className="p-6">
      {/* Header Toolbar */}
      <HeaderToolbar searchPlaceholder="Cari jenis surat..." />

      {/* Kartu Surat */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {suratTypes.map((surat, idx) => (
          <div
            key={idx}
            onClick={() => navigate(surat.route)} // ✅ Navigasi ke route
            className="bg-gray-300 rounded-md flex items-center justify-center gap-2 h-24 cursor-pointer hover:bg-gray-400 transition"
          >
            <FileText size={24} />
            <span className="text-sm font-medium text-center">
              {surat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuatSuratPage;
