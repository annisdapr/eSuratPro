import React from 'react';

const documents = [
  {
    id: 1,
    title: 'SKM Aktif 2210511164',
    date: 'May 05, 2025 18:26',
    status: 'Draf',
    statusColor: 'bg-yellow-400',
  },
  {
    id: 2,
    title: 'SR Beasiswa 2210511108',
    date: 'May 04, 2025 09.00',
    status: 'Ditolak',
    statusColor: 'bg-red-300',
  },
  {
    id: 3,
    title: 'SR Magang 2110511101',
    date: 'May 02, 2025 13.02',
    status: 'Selesai',
    statusColor: 'bg-green-300',
  },
  {
    id: 4,
    title: 'SR Magang 2210511179',
    date: 'May 02, 2025 13.02',
    status: 'Tertunda',
    statusColor: 'bg-yellow-200',
  },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen">

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Seluruh Dokumen</h2>
          <div className="flex space-x-4 items-center">
            <div className="bg-white flex items-center rounded-full px-4 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Cari..."
                className="outline-none bg-transparent text-sm"
              />
              <i className="fas fa-search ml-2 text-gray-500"></i>
            </div>
            <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
              <i className="fas fa-filter"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="border-b text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">Seluruh Dokumen</th>
                <th className="px-4 py-2 text-left">Tanggal Unggah</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b">
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{doc.title}</span>
                  </td>
                  <td className="px-4 py-3">{doc.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs text-black font-medium px-3 py-1 rounded-full ${doc.statusColor}`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <i className="fas fa-ellipsis-h text-gray-500"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
