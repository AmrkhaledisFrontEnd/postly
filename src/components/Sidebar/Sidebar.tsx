"use client";
import Nav from "./_components/Nav";
import Head from "./_components/Head";
import UserProfileCard from "./_components/UserProfileCard";
import { User } from "@prisma/client";
import { RiMenu2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// =======================================================================
function Sidebar({ userSession }: { userSession: User }) {
  const pathname = usePathname();
  const [openSideBar, setOpenSideBar] = useState(false);
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!e.target.closest(".sideBar, .button"))
          setOpenSideBar(false);
      }
    };
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, []);
  useEffect(() => {
    if (openSideBar) {
      setOpenSideBar(false);
    }
  }, [pathname]);
  return (
    <>
      <button
        onClick={() => setOpenSideBar(!openSideBar)}
        className="md:hidden button transition-css active:scale-90 hover:scale-105 block fixed top-1 left-1 sm:text-2xl text-sm bg-indigo-500 p-2 rounded-full cursor-pointer text-white shadow z-35"
      >
        <RiMenu2Line />
      </button>
      <aside
        className={`bg-white shrink-0 sideBar md:pt-0 sm:pt-10 pt-5 md:z-0 z-30 border-r border-r-gray-100 w-60 h-screen flex flex-col justify-between md:sticky md:left-0 fixed top-0 ${openSideBar ? "left-0" : "-left-400"} transition-css  `}
      >
        <div className="space-y-3">
          <Head />
          <Nav user={userSession} />
        </div>
        <UserProfileCard userSession={userSession} />
      </aside>
    </>
  );
}

export default Sidebar;
