import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

// SIMULASI PENGGUNA YANG SEDANG LOGIN (PENGIRIM)
const loggedInUser = {
  nim: "2210511182", // NIM pengguna yang mengirim surat
  name: "Budi Santoso",
};

const SentPage = () => {
  const [sentDocuments, setSentDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allSentJSON = localStorage.getItem("sentDocuments");
    if (allSentJSON) {
      const allSentEnvelopes = JSON.parse(allSentJSON);
      const mySentItems = allSentEnvelopes.filter(
        (envelope) => envelope.sender.nim === loggedInUser.nim
      );
      setSentDocuments(mySentItems);
    }
  }, []);

  return (
    <div className="flex h-full bg-white rounded-xl shadow-md">
      <DashboardSidebar />
      <main className="flex-1 p-6 overflow-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Sent</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="border-b text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  Judul Dokumen
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Penerima (NIM/NIP)
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Email Penerima
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Tanggal Dikirim
                </th>
                <th className="px-4 py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {sentDocuments.length > 0 ? (
                sentDocuments.map((envelope) => (
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
                      {envelope.recipient.nim_nip}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {envelope.recipient.email}
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
                  <td colSpan="5" className="text-center py-10 text-gray-500">
                    Belum ada surat yang Anda kirim.
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

export default SentPage;
