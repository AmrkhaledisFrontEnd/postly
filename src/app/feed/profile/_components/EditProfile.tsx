"use client";
import { FaRegEdit } from "react-icons/fa";
// ==================================================================
function EditProfile() {
  return (
    <button className="flex items-center border absolute top-3 right-3 border-gray-100 rounded-md py-2 px-4 font-semibold text-slate-500 hover:shadow transition-css cursor-pointer gap-1.5">
      <FaRegEdit size={20} /> Edit
    </button>
  );
}

export default EditProfile;
