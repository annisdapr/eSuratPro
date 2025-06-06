import React from 'react';

const HeaderToolbar = ({ title, searchPlaceholder = "Cari...", onSearch }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex space-x-4 items-center">
        <div className="bg-white flex items-center rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="outline-none bg-transparent text-sm"
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <i className="fas fa-search ml-2 text-gray-500"></i>
        </div>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
          <i className="fas fa-filter"></i>
        </button>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default HeaderToolbar;
