import React from "react";

const FormTextarea = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start mb-4">
      <label
        htmlFor={name}
        className="w-full sm:w-48 font-semibold text-gray-700 mb-1 sm:mb-0 pt-1"
      >
        {label}
      </label>
      <div className="w-full">
        <textarea
          id={name}
          name={name}
          rows="3"
          placeholder={placeholder || `Masukkan ${label}...`}
          className="flex-1 w-full border border-gray-300 rounded-md outline-none focus:border-blue-500 transition p-2"
          required
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormTextarea;
