"use client";

import { Dispatch, SetStateAction } from "react";
import AlertMessage from "../AlertMessage/AlertMessage";
// =============================================================
type AuthFormFieldType = {
  id: string;
  label: string;
  placeholder: string;
  type: "password" | "email" | "text";
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  error?: string;
};
function AuthFormField({
  id,
  placeholder,
  label,
  type,
  onChange,
  value,
  error,
}: AuthFormFieldType) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium w-fit" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`border border-gray-200 rounded-[7px] px-3 py-1.5 focus:border-gray-400 hover:border-gray-400 text-sm font-medium focus:outline-3 outline-gray-300 transition-css ${error && "border-red-500"}`}
      />
      {error && <AlertMessage type="ERROR" message={error} />}
    </div>
  );
}

export default AuthFormField;
