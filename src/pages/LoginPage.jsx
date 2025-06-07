import React from "react";
import { useNavigate } from "react-router-dom";
import upnLogo from "../assets/logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Di sini Anda dapat menambahkan logika otentikasi.
    // Untuk saat ini, kita akan langsung navigasi ke dashboard setelah login.
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-sm w-full bg-white shadow-xl rounded-xl p-8">
        <div className="flex justify-center mb-6">
          {/* ✅ 2. Gunakan variabel logo yang sudah diimpor */}
          <img src={upnLogo} alt="Logo UPN Veteran Jakarta" className="h-24" />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">E-SuratPro</h1>
          <p className="text-gray-500">UPN "Veteran" Jakarta</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="nim"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              NIM (Nomor Induk Mahasiswa)
            </label>
            <input
              type="text"
              id="nim"
              placeholder="Contoh: 2210511182"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="******************"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
