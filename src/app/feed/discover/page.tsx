import PageHeader from "@/components/PageHeader/PageHeader";
import { LuSearch } from "react-icons/lu";
// ===============================================================================
function Discover() {
  return (
    <main className="min-h-screen bg-indigo-50 p-5 space-y-10 flex-1">
      <PageHeader
        title="Discover People"
        subtitle="Connect with amazing people and grow your network"
      />
      <div className="w-full p-5 bg-white shadow rounded-md">
        <div className="h-10 flex items-center border border-dashed focus-within:shadow hover:shadow border-gray-300 rounded-md overflow-hidden w-full pl-3 text-gray-500 focus-within:border-gray-700 transition-css">
          <LuSearch className="text-gray-400" />
          <input
          placeholder="Search people by name, username, bio, or location..."
            className="h-full flex-1 py-2 px-4 outline-none cursor-pointer"
            type="text"
          />
        </div>
      </div>
    </main>
  );
}

export default Discover;
