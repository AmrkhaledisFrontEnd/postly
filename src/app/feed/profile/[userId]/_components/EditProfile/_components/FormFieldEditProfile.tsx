"use client";

import { Dispatch, SetStateAction } from "react";
// ======================================================================
function FormFieldEditProfile({
  label,
  placeholder,
  id,
  type,
  setState,
  value,
}: {
  label: string;
  placeholder?: string;
  id: string;
  type: "password" | "email" | "number" | "text";
  value: string;
  setState: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={(e) => setState(e.target.value)}
        type={type}
        id={id}
        className="border border-gray-300 py-2 px-3 font-medium rounded-md outline-none focus:border-indigo-500 transition-css"
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormFieldEditProfile;
