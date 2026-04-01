import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
// ===================================================
function UserReceiverDetails({ user }: { user: User }) {
  return (
    <div className="flex gap-2 items-center bg-white mx-auto shadow py-1.5 px-15 rounded-md mt-2">
      <Image
        src={user.image ? user.image : "/user.jpg"}
        alt="user image"
        width={50}
        height={50}
        className="size-11 rounded-full object-cover shrink-0"
      />
      <div>
        <Link
          href={`/feed/profile/${user.id}`}
          className="font-semibold text-[18px] capitalize hover:underline"
        >
          {user.name}
        </Link>
        <p className="text-xs font-normal text-gray-400">{user.bio}</p>
      </div>
    </div>
  );
}

export default UserReceiverDetails;
