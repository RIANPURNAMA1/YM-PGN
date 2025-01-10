import React from 'react';


export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Halaman Ini Tidak Ada</h2>
        <p className="text-lg text-gray-700 mb-6">
          Maaf, halaman yang Anda cari tidak ditemukan. 
        </p>
       
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}