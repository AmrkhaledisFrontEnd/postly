"use client";
import SearchBar from "./SearchBar";
import DiscoverUserCard from "./DiscoverUserCard";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
// ===============================================================
function DiscoverUsers() {
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const FETCH_USERS = async () => {
      if (!searchText.trim()) return;
      try {
        const res = await axios.get(
          `/api/search?q=${encodeURIComponent(searchText)}`,
        );
        const data: { error: string } | User[] = res.data;
        if ("error" in data)
          return toast.error(data.error, { className: "toast-font" });
        setUsers(data);
      } catch (error) {
        return;
      }
    };
    FETCH_USERS();
  }, [searchText]);
  return (
    <>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {users && users.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {users.map((user) => (
            <DiscoverUserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default DiscoverUsers;
