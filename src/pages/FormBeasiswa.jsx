import React from "react";
import FormInput from "../components/FormInput";

const FormBeasiswa = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Formulir Pengajuan Surat Rekomendasi Beasiswa
        </h2>
        <p className="text-gray-500">Pastikan semua data diisi dengan benar.</p>
      </div>

      <div className="bg-gray-100 rounded px-4 py-2 mb-6 text-sm font-semibold text-gray-700">
        Data Pemohon
      </div>

      <form className="w-full max-w-2xl mx-auto">
        <FormInput label="Nama Lengkap" name="nama" />
        <FormInput label="NIM" name="nim" />
        <FormInput
          label="Tempat, Tanggal Lahir"
          name="ttl"
          placeholder="Contoh: Jakarta, 17 Agustus 2002"
        />
        <FormInput label="Program Studi" name="prodi" />

        <div className="flex justify-end pt-8">
          <button
            type="button"
            className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 mr-4"
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Ajukan Surat
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBeasiswa;
