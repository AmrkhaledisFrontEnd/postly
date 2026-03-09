import Image from "next/image";
import Cover from "./_components/Cover";
import UserStats from "./_components/UserStats";
import EditProfile from "./_components/EditProfile";
import UserDetails from "./_components/UserDetails";
import { GetSession } from "@/lib/GetSession";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
// =============================================================
async function Profile() {
  const userSession: User | null = await GetSession();
  if (!userSession) return redirect("/login")
    return (
      <main className="flex-1 flex justify-center pt-5">
        <div className="w-3xl rounded-lg overflow-hidden h-fit">
          <Cover />
          <div className="flex gap-3 bg-white">
            <Image
              src={
                "https://i.pinimg.com/1200x/66/d3/e9/66d3e97f197172f39ba50247ba7232e5.jpg"
              }
              alt="your image"
              width={150}
              height={150}
              className="rounded-full shrink-0 size-30 ml-5 ring-3 ring-white -mt-13 shadow-2xl object-cover"
            />
            <div className="w-full pr-5 pt-2 pb-4 relative space-y-2">
              <UserDetails />
              <UserStats />
              <EditProfile />
            </div>
          </div>
        </div>
      </main>
    );
}

export default Profile;
