import React from 'react';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeaderToolbar from '../components/HeaderToolbar'; // <-- INI PERBAIKANNYA

const suratTypes = [
  { title: 'SR Beasiswa', route: '/form-beasiswa' },
  { title: 'SR Magang', route: '/form-magang' },
  { title: 'SKM Aktif', route: '/form-skm-aktif' },
  { title: 'SK Tidak Menerima Beasiswa Lain', route: '/form-sktmb' },
];

const BuatSuratPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderToolbar searchPlaceholder="Cari jenis surat..." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {suratTypes.map((surat, idx) => (
          <div
            key={idx}
            onClick={() => navigate(surat.route)}
            className="bg-white rounded-md flex items-center justify-center gap-2 h-24 cursor-pointer hover:bg-gray-100 transition shadow-sm"
          >
            <FileText size={24} />
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