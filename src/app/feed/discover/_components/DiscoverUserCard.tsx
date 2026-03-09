import Image from "next/image";
import Link from "next/link";
import { FiUserPlus } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
// =====================================================================
function DiscoverUserCard({ user }: { user: any }) {
  return (
    <div
      className="p-5 border border-gray-200 bg-white rounded-md flex flex-col items-center gap-1 hover:shadow-2xl transition-css"
    >
      <div className="w-full p-3 bg-indigo-500 flex mb-3 items-center justify-center rounded-md">
        <Image
          src={user.image ? user.image : "/user.jpg"}
          alt="user image"
          width={100}
          height={100}
          className="size-15 rounded-full object-cover bg-white shadow p-0.5"
        />
      </div>
      <Link
        href={"/"}
        className="font-semibold text-[17px] hover:underline hover:text-indigo-500"
      >
        {user.name}
      </Link>
      <p className="text-xs text-gray-400 font-normal">{user.username}</p>
      <p className="line-clamp-2 text-sm text-center">{user.bio}</p>
      <div className="flex items-center gap-4">
        {user.location && (
          <h3 className="border border-gray-200 rounded-full flex items-center gap-1 px-4 text-slate-500 font-semibold text-xs py-1 capitalize">
            <SlLocationPin size={14} />
            {user.location}
          </h3>
        )}
        <h3 className="border border-gray-200 rounded-full text-slate-500 px-4 flex items-center gap-1 font-semibold text-xs py-1">
          <span> {user.followers}</span> Followers
        </h3>
      </div>
      <button className="text-white flex items-center tracking-[0.3px] gap-2 hover:scale-102 transition-css active:scale-95 justify-center bg-linear-to-r from-indigo-500 to-purple-500 py-2 w-full rounded-md cursor-pointer mt-3">
        <FiUserPlus /> Follow
      </button>
    </div>
  );
}

export default DiscoverUserCard;
