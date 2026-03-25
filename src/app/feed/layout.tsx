import Sidebar from "@/components/Sidebar/Sidebar";
import { GetSession } from "@/lib/GetSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
// ==================================================================
export const metadata: Metadata = {
  title: "Postly | Feed",
  description:
    "Stay updated on Postly Feed—see posts from friends, explore trending ideas, and discover the latest news all in one place.",
};
async function layout({ children }: { children: React.ReactNode }) {
  const userSession = await GetSession();
  if (!userSession) return redirect("/login");
  return (
    <div className=" bg-indigo-50 min-h-screen">
      <div className="max-w-425 flex lg:gap-5 mx-auto">
        <Sidebar userSession={userSession} />
        {children}
      </div>
    </div>
  );
}

export default layout;
