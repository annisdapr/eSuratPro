import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import DocumentPreview from "../components/DocumentPreview";

const FormBeasiswa = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    ttl: "",
    prodi: "",
  });
  const [recipientData, setRecipientData] = useState({
    email: "",
    nim_nip: "",
    keterangan: "",
  });
  const [showPreview, setShowPreview] = useState(false);
  const [showSendForm, setShowSendForm] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecipientChange = (e) => {
    const { name, value } = e.target;
    setRecipientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreatePreview = (e) => {
    e.preventDefault();
    setShowPreview(true);
    setShowSendForm(false);
  };

  const handleSave = () => {
    const savedDocsJSON = localStorage.getItem("mySuratDocuments");
    const savedDocs = savedDocsJSON ? JSON.parse(savedDocsJSON) : [];
    const newDoc = {
      id: Date.now(),
      title: `SR Beasiswa ${formData.nim}`,
      date: new Date().toLocaleString("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
      status: "Draf",
      statusColor: "bg-yellow-400",
      ...formData,
    };
    const updatedDocs = [newDoc, ...savedDocs];
    localStorage.setItem("mySuratDocuments", JSON.stringify(updatedDocs));
    alert("Dokumen disimpan di MySurat!");
    navigate("/");
  };

  const handleSendSubmit = (e) => {
    e.preventDefault();
    setShowConfirmationModal(true);
  };

  // ✅ FUNGSI INI TELAH DIPERBAIKI
  const handleFinalSend = () => {
    const sentDocsJSON = localStorage.getItem("sentDocuments");
    const sentDocs = sentDocsJSON ? JSON.parse(sentDocsJSON) : [];
    const envelope = {
      document: {
        id: Date.now(),
        title: `SR Beasiswa ${formData.nim}`,
        date: new Date().toLocaleString("id-ID", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
        status: "Terkirim",
        statusColor: "bg-blue-400",
        ...formData,
      },
      sender: { name: "Budi Santoso", nim: "2210511182" },
      recipient: recipientData,
      sentAt: new Date().toISOString(),
    };

    // Perbaikan: seharusnya menggunakan 'sentDocs' bukan 'updatedSentDocs'
    const updatedSentDocs = [envelope, ...sentDocs];
    localStorage.setItem("sentDocuments", JSON.stringify(updatedSentDocs));

    // Simpan juga salinan terkirim ke MySurat si pengirim
    const mySuratJSON = localStorage.getItem("mySuratDocuments");
    const mySuratDocs = mySuratJSON ? JSON.parse(mySuratJSON) : [];
    const updatedMySurat = [envelope.document, ...mySuratDocs];
    localStorage.setItem("mySuratDocuments", JSON.stringify(updatedMySurat));

    setShowConfirmationModal(false);
    setShowSendForm(false);
    alert("Dokumen berhasil dikirim!");
    navigate("/");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      {/* ...sisa kode JSX tidak berubah... */}
      {/* --- FORMULIR UTAMA --- */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Formulir Pengajuan Surat
        </h2>
        <p className="text-gray-500">Pastikan semua data diisi dengan benar.</p>
      </div>
      <div className="bg-gray-100 rounded px-4 py-2 mb-6 text-sm font-semibold text-gray-700">
        Data Pemohon
      </div>
      <form onSubmit={handleCreatePreview} className="w-full max-w-2xl mx-auto">
        <FormInput
          label="Nama Lengkap"
          name="nama"
          value={formData.nama}
          onChange={handleFormChange}
        />
        <FormInput
          label="NIM"
          name="nim"
          value={formData.nim}
          onChange={handleFormChange}
        />
        <FormInput
          label="Tempat, Tanggal Lahir"
          name="ttl"
          value={formData.ttl}
          onChange={handleFormChange}
        />
        <FormInput
          label="Program Studi"
          name="prodi"
          value={formData.prodi}
          onChange={handleFormChange}
        />
        <div className="flex justify-end pt-8">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Buat Preview
          </button>
        </div>
      </form>

      {/* --- BAGIAN PREVIEW DAN AKSI (SAVE & SENT) --- */}
      {showPreview && (
        <div className="mt-8">
          <DocumentPreview formData={formData} />
          <div className="flex justify-end gap-4 mt-8 border-t pt-6 max-w-4xl mx-auto">
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setShowSendForm(true)}
              className="px-6 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700"
            >
              Sent
            </button>
          </div>
          {showSendForm && (
            <div className="mt-8 pt-6 max-w-2xl mx-auto">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  Kirim Dokumen
                </h3>
                <p className="text-gray-500">Isi data penerima dokumen.</p>
              </div>
              <form onSubmit={handleSendSubmit}>
                <FormInput
                  label="Alamat Email Penerima"
                  name="email"
                  type="email"
                  value={recipientData.email}
                  onChange={handleRecipientChange}
                />
                <FormInput
                  label="NIM/NIP Penerima"
                  name="nim_nip"
                  value={recipientData.nim_nip}
                  onChange={handleRecipientChange}
                />
                <FormTextarea
                  label="Keterangan"
                  name="keterangan"
                  value={recipientData.keterangan}
                  onChange={handleRecipientChange}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700"
                  >
                    Sent
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* --- MODAL KONFIRMASI PENGIRIMAN --- */}
      {showConfirmationModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm w-full pointer-events-auto border">
            <h2 className="text-lg font-semibold mb-2">Confirmation</h2>
            <p className="mb-4 text-gray-700">
              Are you sure you want to send this document?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleFinalSend}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Yes, Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FormBeasiswa;
