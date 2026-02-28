import { FcGoogle } from "react-icons/fc";
// ================================================================
function ButtonSignWithGoogle() {
  return (
    <button className="flex items-center gap-3 hover:bg-gray-100 shadow-[0_0.5px_0_#dbdbdb] bg-white py-1 justify-center text-[13px] w-full rounded-md cursor-pointer border border-gray-200 text-slate-600 font-medium transition-css">
      <i className="text-xl">
        <FcGoogle />
      </i>
      Continue with Google
    </button>
  );
}

export default ButtonSignWithGoogle;
