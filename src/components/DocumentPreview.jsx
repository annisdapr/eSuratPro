import React from "react";

const DocumentPreview = ({ formData }) => {
  // Mengambil tanggal hari ini untuk ditampilkan di surat
  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mt-8 border-t-2 pt-8">
      <h3 className="text-xl font-semibold text-center mb-6">
        Preview Dokumen
      </h3>
      <div className="bg-white p-8 md:p-12 border shadow-md max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h4 className="text-lg font-bold underline uppercase">
            SURAT REKOMENDASI
          </h4>
          <p className="text-sm">Nomor: REK/XXX/UN61/FIK/2024</p>
        </div>

        <p className="mb-4">
          Melalui surat ini, saya yang bertanda tangan di bawah ini:
        </p>
        <table className="w-full text-left mb-4 text-sm">
          <tbody>
            <tr>
              <td className="w-1/4 py-1">Nama</td>
              <td>: Prof. Dr. Ir. Supriyanto, ST., M.Sc., IPM. </td>
            </tr>
            <tr>
              <td className="w-1/4 py-1">Jabatan</td>
              <td>: Dekan Fakultas Ilmu Komputer UPN "Veteran" Jakarta </td>
            </tr>
            <tr>
              <td className="w-1/4 py-1">NIP/NIDN</td>
              <td>: 197605082003121002 </td>
            </tr>
          </tbody>
        </table>

        <p className="mb-4">
          Memberikan rekomendasi kepada mahasiswa dengan data diri berikut ini:
        </p>
        <table className="w-full text-left mb-4 text-sm">
          <tbody>
            <tr>
              <td className="w-1/4 py-1">Nama</td>
              {/* Data dari formulir akan ditampilkan di sini */}
              <td>: {formData.nama || "[Nama Lengkap]"}</td>
            </tr>
            <tr>
              <td className="w-1/4 py-1">NIM</td>
              <td>: {formData.nim || "[NIM]"}</td>
            </tr>
            <tr>
              <td className="w-1/4 py-1">Program Studi</td>
              <td>: {formData.prodi || "[Program Studi]"}</td>
            </tr>
            <tr>
              <td className="w-1/4 py-1">Jenjang</td>
              <td>: Strata 1 </td>
            </tr>
            <tr>
              <td className="w-1/4 py-1">Semester</td>
              <td>: 6 </td>
            </tr>
          </tbody>
        </table>

        <p className="mb-4 text-sm leading-relaxed text-justify">
          Mahasiswa di atas kami rekomendasikan untuk menjadi peserta di Program
          Coding Camp 2025 powered by DBS Foundation dengan pertimbangan bahwa
          mahasiswa tersebut sanggup mengikuti program secara penuh dan
          bertanggung jawab. Sebagai bentuk dukungan, kami selaku pihak
          perwakilan kampus menyatakan kesediaan untuk memberikan pengakuan
          keikutsertaan mahasiswa melalui rekognisi SKS atau hal lainnya yang
          menunjang kegiatan akademik.
        </p>
        <p className="text-sm leading-relaxed text-justify">
          Demikian surat rekomendasi ini kami buat untuk digunakan dalam Program
          Coding Camp 2025 powered by DBS Foundation.
        </p>

        <div className="flex justify-end mt-16">
          <div className="text-center">
            <p>Jakarta, {formattedDate}</p>
            <p className="mb-16">Dekan,</p>
            <p className="font-bold underline">Supriyanto,</p>
            <p>NIP. 197605082003121002 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPreview;
