import React from 'react';
import { Search, Filter, Plus, MoreHorizontal } from 'lucide-react';

const documents = [
  {
    id: 'SKM Aktif 2210511164',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    date: 'May 05, 2025 18:26',
    status: 'Draf',
  },
  {
    id: 'SR Beasiswa 2210511108',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    date: 'May 04, 2025 09:00',
    status: 'Ditolak',
  },
  {
    id: 'SR Magang 2110511101',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    date: 'May 02, 2025 13:02',
    status: 'Selesai',
  },
  {
    id: 'SR Magang 2210511179',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
    date: 'May 02, 2025 13:02',
    status: 'Tertunda',
  },
];

const statusStyles = {
  Draf: 'bg-yellow-100 text-yellow-800',
  Ditolak: 'bg-red-100 text-red-800',
  Selesai: 'bg-green-100 text-green-800',
  Tertunda: 'bg-orange-100 text-orange-800', 
};

const Dokumen = () => {
  return (
    <div className="p-8 flex-1">
      {/* Header Konten */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dokumen</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tabel Daftar Dokumen */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header Tabel */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-500 bg-gray-50">
          <div className="w-2/5">Seluruh Dokumen</div>
          <div className="w-1/4 text-left">Tanggal Unggah</div>
          <div className="w-1/4 text-left">Status</div>
          <div className="w-1/12 text-right"></div> {/* Untuk tombol aksi */}
        </div>

        {/* Isi Tabel */}
        <div>
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
            >
              {/* Kolom Dokumen */}
              <div className="w-2/5 flex items-center">
                <img src={doc.avatar} alt="User Avatar" className="w-8 h-8 rounded-full mr-4" />
                <span className="font-medium text-gray-800">{doc.id}</span>
              </div>

              {/* Kolom Tanggal */}
              <div className="w-1/4 text-gray-600 text-left">{doc.date}</div>

              {/* Kolom Status */}
              <div className="w-1/4 text-left">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[doc.status] || 'bg-gray-100 text-gray-800'}`}
                >
                  {doc.status}
                </span>
              </div>
              
              {/* Kolom Tombol Aksi */}
              <div className="w-1/12 text-right">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dokumen;