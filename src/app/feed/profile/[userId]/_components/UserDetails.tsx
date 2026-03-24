import { User } from "@prisma/client";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ButtonFolllow from "@/app/feed/profile/[userId]/_components/ButtonFolllow";
import { UserWithRelations } from "@/lib/types";
import { RiSendPlaneFill } from "react-icons/ri";
import Link from "next/link";
// =======================================================================
dayjs.extend(relativeTime);
function UserDetails({
  user,
  userSession,
}: {
  user: UserWithRelations;
  userSession: User;
}) {
  const userInformations = [
    {
      id: "location",
      icon: <HiOutlineLocationMarker size={15} />,
      label: user.location,
    },
    {
      id: "joined",
      icon: <MdOutlineDateRange size={15} />,
      label: `Joined ${dayjs(user.createdAt).fromNow()}`,
    },
  ];
  return (
    <>
      <h2 className="text-3xl font-bold capitalize">{user.name}</h2>
      {user.id !== userSession.id && (
        <div className="flex items-center gap-2">
          <ButtonFolllow user={user} userSession={userSession} />
          <Link
            href={`/feed/messages/${user.id}`}
            className="text-white w-fit flex items-center tracking-[0.3px] gap-2 hover:scale-102 transition-css active:scale-95 justify-center bg-linear-to-r from-indigo-500 to-purple-500 py-2 px-10 rounded-md cursor-pointer"
          >
            <RiSendPlaneFill size={20} /> Message
          </Link>
        </div>
      )}
      {user.username && (
        <h3 className="text-sm font-normal text-gray-400">@{user.username}</h3>
      )}
      <p className="font-semibold text-slate-600">{user.bio}</p>
      <div className="flex items-center gap-3 text-gray-400">
        {userInformations.map(
          (info) =>
            info.label && (
              <p
                key={info.id}
                className="flex items-center gap-1 capitalize text-xs font-semibold"
              >
                {info.icon} {info.label}
              </p>
            ),
        )}
      </div>
      <span className="w-full h-0.5 bg-gray-200 opacity-20 block mt-3" />
    </>
  );
}

export default UserDetails;
