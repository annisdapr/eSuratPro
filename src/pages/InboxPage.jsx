import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

// SIMULASI PENGGUNA YANG SEDANG LOGIN
// Di aplikasi nyata, data ini akan datang dari state global atau context setelah login.
const loggedInUser = {
  nim_nip: "2210511108", // Ganti dengan NIM/NIP yang Anda tuju saat mengirim
  name: "Annisa Dwi Aprilia",
};

const InboxPage = () => {
  const [receivedDocuments, setReceivedDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sentDocsJSON = localStorage.getItem("sentDocuments");
    if (sentDocsJSON) {
      const allSentDocs = JSON.parse(sentDocsJSON);
      const myReceivedDocs = allSentDocs.filter(
        (envelope) => envelope.recipient.nim_nip === loggedInUser.nim_nip
      );
      setReceivedDocuments(myReceivedDocs);
    }
  }, []);

  return (
    <div className="flex h-full bg-white rounded-xl shadow-md">
      <DashboardSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Inbox</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="border-b text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  Judul Dokumen
                </th>
                <th className="px-4 py-3 text-left font-semibold">Pengirim</th>
                <th className="px-4 py-3 text-left font-semibold">
                  Tanggal Diterima
                </th>
                <th className="px-4 py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {receivedDocuments.length > 0 ? (
                receivedDocuments.map((envelope) => (
                  <tr
                    key={envelope.document.id}
                    className="border-b hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      navigate(`/document/${envelope.document.id}`)
                    }
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {envelope.document.title}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {envelope.sender.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {new Date(envelope.sentAt).toLocaleString("id-ID", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <i className="fas fa-ellipsis-h text-gray-500"></i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-10 text-gray-500">
                    Tidak ada surat masuk
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

export default InboxPage;
