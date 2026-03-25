import { User } from "@prisma/client";
import Image from "next/image";

function Cover({ user }: { user: User }) {
  return (
    <>
      {user.cover ? (
        <Image
          src={user.cover}
          alt="cover"
          className="w-full sm:h-55 h-45 object-cover bg-linear-to-r from-indigo-300 to-purple-300 "
          width={400}
          height={400}
        />
      ) : (
        <div className="w-full sm:h-55 h-40 bg-linear-to-r from-indigo-300 to-purple-300 " />
      )}
    </>
  );
}

export default Cover;
