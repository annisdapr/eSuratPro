import React from "react";

const FormInput = ({ label, name, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
      <label
        htmlFor={name}
        className="w-full sm:w-48 font-semibold text-gray-700 mb-1 sm:mb-0"
      >
        {label}
      </label>
      <div className="w-full">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder || `Masukkan ${label}...`}
          className="flex-1 w-full border-b border-gray-400 outline-none focus:border-blue-500 transition px-2 py-1"
          required
        />
      </div>
    </div>
  );
};

export default FormInput;
