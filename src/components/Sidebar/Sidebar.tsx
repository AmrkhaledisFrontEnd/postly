"use client";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { FiMessageCircle } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { RiSearchLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiPlusCircle } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
// =======================================================================
function Sidebar() {
  const pathname = usePathname();
  const links = [
    { id: "feed", linkText: "feed", href: "/feed", icon: <GoHome /> },
    {
      id: "messages",
      linkText: "messages",
      href: "/feed/messages",
      icon: <FiMessageCircle />,
    },
    {
      id: "connections",
      linkText: "connections",
      href: "/feed/connections",
      icon: <TbUsers />,
    },
    {
      id: "discover",
      linkText: "discover",
      href: "/feed/discover",
      icon: <RiSearchLine />,
    },
    {
      id: "profile",
      linkText: "profile",
      href: "/feed/profile",
      icon: <FiUser />,
    },
  ];
  return (
    <aside className="bg-white border-r border-r-gray-100 w-70 min-h-screen flex flex-col justify-between ">
      <div className="space-y-3">
        <Link
          href={"/feed"}
          className="px-5 border-b border-b-gray-100 py-3 block"
        >
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            className="w-40 h-8"
            alt="logo"
          />
        </Link>
        <nav className="px-6 py-2">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 hover:text-indigo-700 capitalize font-medium hover:shadow text-[17px] tracking-[0.3px] transition-css hover:bg-gray-50 py-1.5 px-3 rounded-xl 
                ${pathname.startsWith(link.href) && "text-indigo-700 bg-gray-50 shadow"}`}
                >
                  <i className="text-xl">{link.icon}</i>
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={"/feed/post/create"}
            className="flex items-center hover:scale-101 transition-css hover:-translate-y-0.5 justify-center gap-2 w-full shadow font-semibold mt-5 bg-linear-to-r from-indigo-700 to-purple-800 text-white py-2 px-3 rounded-md"
          >
            <i className="text-xl">
              <BiPlusCircle />
            </i>
            Create Post
          </Link>
        </nav>
      </div>
      <div className="px-3 py-3 flex items-center justify-between gap-2 border-t border-t-gray-100 w-full">
        <div className="flex items-center gap-2">
          <Image
            src={"/sample_profile.jpg"}
            alt="your image"
            width={100}
            height={100}
            className="size-11 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-[17px] text-slate-800 line-clamp-1">
              Amr Khaled
            </h2>
            <h3 className="text-gray-500 text-sm font-normal line-clamp-1">
              maro.vip53@gmail.com
            </h3>
          </div>
        </div>
        <button className="text-red-400 text-xl cursor-pointer hover:text-red-500 transition-css">
          <FaSignOutAlt />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
