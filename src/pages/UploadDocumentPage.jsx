import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, File, X, CheckCircle } from "lucide-react";
import Stepper from "../components/Stepper";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";
import DashboardSidebar from "../components/DashboardSidebar";

const UploadDocumentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [signatureData, setSignatureData] = useState({
    email: "",
    nim_nip: "",
    keterangan: "",
  });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State untuk modal sukses
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const steps = ["Upload Document", "Preview Document", "Request Signature"];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setCurrentStep(2);
    }
  };

  const handleSignatureChange = (e) => {
    const { name, value } = e.target;
    setSignatureData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleConfirmAndSubmit = () => {
    // 1. Siapkan data untuk disimpan
    const sentDocsJSON = localStorage.getItem("sentDocuments");
    const sentDocs = sentDocsJSON ? JSON.parse(sentDocsJSON) : [];
    const envelope = {
      document: {
        id: Date.now(),
        title: uploadedFile.name,
        date: new Date().toLocaleString("id-ID", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
        status: "Terkirim",
        statusColor: "bg-blue-400",
      },
      sender: { name: "Budi Santoso", nim: "2210511182" }, // Pengguna yang login (simulasi)
      recipient: signatureData,
      sentAt: new Date().toISOString(),
    };

    // 2. Simpan ke localStorage
    const updatedSentDocs = [envelope, ...sentDocs];
    localStorage.setItem("sentDocuments", JSON.stringify(updatedSentDocs));

    // 3. Tampilkan modal sukses
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/sent"); // Arahkan ke halaman "Sent"
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div
            className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50"
            onClick={() => fileInputRef.current.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
            <UploadCloud size={48} className="text-gray-400 mb-4" />
            <p className="text-gray-600">Click to upload a file</p>
            <p className="text-xs text-gray-500">PDF, DOC, or DOCX</p>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-t-lg border-b">
              <div className="flex items-center gap-2">
                <File size={16} />
                <span className="font-semibold text-sm">
                  {uploadedFile.name}
                </span>
              </div>
              <button
                onClick={() => {
                  setUploadedFile(null);
                  setCurrentStep(1);
                }}
                className="p-1 hover:bg-gray-200 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
            <div className="w-full h-[500px] border">
              <iframe
                src={URL.createObjectURL(uploadedFile)}
                title="Document Preview"
                className="w-full h-full"
              />
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Continue & Request Signature
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <form
              onSubmit={handleSubmitRequest}
              className="w-full max-w-2xl mx-auto border p-6 rounded-lg bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-center mb-4">
                Signature Request
              </h3>
              <FormInput
                label="Recipient's Email Address"
                name="email"
                type="email"
                value={signatureData.email}
                onChange={handleSignatureChange}
              />
              <FormInput
                label="Recipient's NIM/NIP"
                name="nim_nip"
                value={signatureData.nim_nip}
                onChange={handleSignatureChange}
              />
              <FormTextarea
                label="Note"
                name="keterangan"
                value={signatureData.keterangan}
                onChange={handleSignatureChange}
              />
              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex h-full bg-white rounded-xl shadow-md">
        <DashboardSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Stepper currentStep={currentStep} steps={steps} />
          {renderStepContent()}
        </main>
      </div>

      {/* --- MODAL KONFIRMASI --- */}
      {showConfirmModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm w-full pointer-events-auto border">
            <h2 className="text-lg font-semibold mb-2">Confirm Request</h2>
            <p className="mb-4 text-gray-700">
              Are you sure you want to send this signature request?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAndSubmit}
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                Yes, Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL SUKSES --- */}
      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-sm w-full pointer-events-auto border flex flex-col items-center">
            <CheckCircle size={48} className="text-green-500 mb-4" />
            <h2 className="text-lg font-semibold mb-2">Success!</h2>
            <p className="mb-6 text-gray-700">
              Document has been sent successfully.
            </p>
            <button
              onClick={handleCloseSuccessModal}
              className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadDocumentPage;
