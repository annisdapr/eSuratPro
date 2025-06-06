// src/pages/FormBeasiswa.jsx

import React from "react";

const FormBeasiswa = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-xl font-semibold mb-6">
        Formulir Pengajuan Surat Rekomendasi Beasiswa
      </h2>

      <div className="bg-gray-100 rounded px-4 py-2 mb-6 text-sm font-semibold">
        Data Pemohon
      </div>

      <form className="space-y-4 w-full max-w-lg">
        <div className="flex items-center">
          <label className="w-40">Nama</label>
          <span className="mr-2">:</span>
          <input
            type="text"
            className="flex-1 border-b border-black outline-none"
          />
        </div>

        <div className="flex items-center">
          <label className="w-40">NIM</label>
          <span className="mr-2">:</span>
          <input
            type="text"
            className="flex-1 border-b border-black outline-none"
          />
        </div>

        <div className="flex items-center">
          <label className="w-40">Tempat, Tanggal Lahir</label>
          <span className="mr-2">:</span>
          <input
            type="text"
            className="flex-1 border-b border-black outline-none"
          />
        </div>

        <div className="flex items-center">
          <label className="w-40">Program Studi</label>
          <span className="mr-2">:</span>
          <input
            type="text"
            className="flex-1 border-b border-black outline-none"
          />
        </div>

        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBeasiswa;
