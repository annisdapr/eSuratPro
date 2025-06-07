import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";

const allDocuments = [
  {
    id: 1,
    title: "SKM Aktif 2210511164",
    avatar: "https://i.pravatar.cc/150?u=a1",
    date: "May 05, 2025 18:26",
    status: "Draf",
  },
  {
    id: 2,
    title: "SR Beasiswa 2210511108",
    avatar: "https://i.pravatar.cc/150?u=a2",
    date: "May 04, 2025 09:00",
    status: "Ditolak",
  },
  {
    id: 3,
    title: "SR Magang 2110511101",
    avatar: "https://i.pravatar.cc/150?u=a3",
    date: "May 02, 2025 13:02",
    status: "Selesai",
  },
  {
    id: 4,
    title: "SR Magang 2210511179",
    avatar: "https://i.pravatar.cc/150?u=a4",
    date: "May 02, 2025 13:02",
    status: "Tertunda",
  },
  {
    id: 5,
    title: "SR Riset 2010511100",
    avatar: "https://i.pravatar.cc/150?u=a5",
    date: "May 01, 2025 11:00",
    status: "Selesai",
  },
];

const statusStyles = {
  Draf: "bg-yellow-100 text-yellow-800",
  Ditolak: "bg-red-100 text-red-800",
  Selesai: "bg-green-100 text-green-800",
  Tertunda: "bg-orange-100 text-orange-800",
};

const DocumentList = () => {
  const { status } = useParams(); // Mengambil status dari URL, misal: 'selesai'
  const location = window.location.pathname;

  const filteredDocuments = useMemo(() => {
    if (location === "/draf") {
      return allDocuments.filter((doc) => doc.status === "Draf");
    }
    if (status) {
      // untuk /tanda-tangan/selesai, /tanda-tangan/ditolak, dll
      return allDocuments.filter(
        (doc) => doc.status.toLowerCase() === status.toLowerCase()
      );
    }
    if (location === "/tanda-tangan") {
      // Gabungan Selesai, Tertunda, Ditolak
      const requiredStatuses = ["Selesai", "Tertunda", "Ditolak"];
      return allDocuments.filter((doc) =>
        requiredStatuses.includes(doc.status)
      );
    }
    // Default (untuk path "/") atau path lain yang belum terdefinisi
    return allDocuments;
  }, [status, location]);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 border-b text-sm font-medium text-gray-500">
        <div className="w-2/5">Seluruh Dokumen</div>
        <div className="w-1/4 text-left">Tanggal Unggah</div>
        <div className="w-1/4 text-left">Status</div>
        <div className="w-auto"></div>
      </div>

      <div>
        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
            className="flex justify-between items-center px-6 py-4 border-b hover:bg-gray-50 last:border-b-0"
          >
            <div className="w-2/5 flex items-center">
              <img
                src={doc.avatar}
                alt="Avatar"
                className="w-8 h-8 rounded-full mr-4"
              />
              <span className="font-medium text-gray-800">{doc.title}</span>
            </div>
            <div className="w-1/4 text-gray-600">{doc.date}</div>
            <div className="w-1/4">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  statusStyles[doc.status]
                }`}
              >
                {doc.status}
              </span>
            </div>
            <div className="w-auto">
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal />
              </button>
            </div>
          </div>
        ))}
        {filteredDocuments.length === 0 && (
          <div className="text-center p-10 text-gray-500">
            Tidak ada dokumen.
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentList;
