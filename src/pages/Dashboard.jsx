import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import { FileText } from "lucide-react"; 

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedDocsJSON = localStorage.getItem("mySuratDocuments");
    if (savedDocsJSON) {
      setDocuments(JSON.parse(savedDocsJSON));
    }
  }, []);

  return (
    <div className="flex h-full bg-white rounded-xl shadow-md">
      <DashboardSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="border-b text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  Dokumen Tersimpan (MySurat)
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Tanggal Disimpan
                </th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
                <th className="px-4 py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {documents.length > 0 ? (
                documents.map((doc) => (
                  <tr
                    key={doc.id}
                    className="border-b hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate(`/document/${doc.id}`)}
                  >
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded-md">
                        <FileText size={20} className="text-gray-500" />
                      </div>
                      <span className="font-medium text-gray-800">
                        {doc.title}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{doc.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${doc.statusColor}`}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <i className="fas fa-ellipsis-h text-gray-500 cursor-pointer"></i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-10 text-gray-500">
                    Belum ada dokumen yang disimpan di MySurat.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
