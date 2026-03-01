"use client";
import { signIn } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";
import { FcGoogle } from "react-icons/fc";
// ================================================================
function ButtonSignWithGoogle({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const handle = async () => {
    setLoading(true);
    await signIn("google");
  };
  return (
    <button
      type="button"
      onClick={handle}
      disabled={loading }
      className="flex disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-default items-center gap-3 hover:bg-gray-100 shadow-[0_0.5px_0_#dbdbdb] bg-white py-1 justify-center text-[13px] w-full rounded-md cursor-pointer border border-gray-200 text-slate-600 font-medium transition-css"
    >
      {loading ? (
        <div className="size-4 rounded-full border-2 border-indigo-400 animate-spin border-t-transparent"></div>
      ) : (
        <i className="text-xl">
          <FcGoogle />
        </i>
      )}
      Continue with Google
    </button>
  );
}

export default ButtonSignWithGoogle;
