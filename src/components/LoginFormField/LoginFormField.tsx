"use client";
// =============================================================
type LoginFormField = {
  id: string;
  label: string;
  placeholder: string;
  type: "password" | "email" | "text";
};
function LoginFormField({ id, placeholder, label, type }: LoginFormField) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-800 w-fit" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border border-gray-200 rounded-[7px] px-3 py-1.5 focus:border-gray-400 hover:border-gray-400 text-sm font-medium focus:outline-3 outline-gray-300 transition-css"
      />
    </div>
  );
}

export default LoginFormField;
