import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DocumentPreview from "../components/DocumentPreview";
import { ArrowLeft } from "lucide-react";

const DocumentDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [document, setDocument] = useState(null);

  useEffect(() => {
    // Ambil data dari semua kemungkinan sumber (MySurat dan Sent)
    const mySuratJSON = localStorage.getItem("mySuratDocuments");
    const sentDocsJSON = localStorage.getItem("sentDocuments");

    let allDocs = [];
    if (mySuratJSON) {
      allDocs.push(...JSON.parse(mySuratJSON));
    }
    if (sentDocsJSON) {
      // Ekstrak dokumen dari dalam "amplop" pengiriman
      const sentEnvelopes = JSON.parse(sentDocsJSON);
      const nestedDocs = sentEnvelopes.map((envelope) => envelope.document);
      allDocs.push(...nestedDocs);
    }

    // Gunakan Map untuk memastikan tidak ada dokumen duplikat berdasarkan ID
    const uniqueDocs = [
      ...new Map(allDocs.map((doc) => [doc.id, doc])).values(),
    ];
    const foundDoc = uniqueDocs.find((doc) => doc.id.toString() === id);

    if (foundDoc) {
      setDocument(foundDoc);
    } else {
      // Jika dokumen tidak ditemukan sama sekali
      alert("Dokumen tidak ditemukan!");
      navigate("/");
    }
  }, [id, navigate]);

  if (!document) {
    return (
      <div className="flex justify-center items-center h-full p-10">
        <p className="text-gray-500">Memuat dokumen...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      {/* --- BAGIAN INI TELAH DIPERBAIKI --- */}
      <button
        // Menggunakan navigate(-1) untuk kembali ke halaman sebelumnya dalam riwayat peramban
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-sm font-semibold text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft size={18} />
        Kembali
      </button>

      {/* Komponen preview tetap sama */}
      <DocumentPreview formData={document} />
    </div>
  );
};

export default DocumentDetailPage;
