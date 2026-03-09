import PageHeader from "@/components/PageHeader/PageHeader";
import { randomUUID } from "node:crypto";
import SearchBar from "./_components/SearchBar";
import DiscoverUserCard from "./_components/DiscoverUserCard";
// ===============================================================================
function Discover() {
  const users = [
    {
      id: randomUUID(),
      name: "Mohammed Khaled",
      username: "@mohammed_khaled",
      location: "egypt",
      image:
        "https://i.pinimg.com/1200x/65/de/d0/65ded07a4195769b10bb90567fd9c455.jpg",
      followers: 3,
      bio: "University Lecturer & Full-Stack Developer | Angular & React | Building Scalable and Accessible Web Applications",
    },
    {
      id: randomUUID(),
      name: "Naser Gamal",
      username: "@naser_gamal",
      location: "ksa",
      image:
        "https://i.pinimg.com/736x/bc/48/46/bc4846a7f51d1100393359a0cb7ba81f.jpg",
      followers: 2,
      bio: "IT Student | AI & Web Dev Enthusiast | Turning Ideas into Solutions",
    },
    {
      id: randomUUID(),
      name: "Mohamoud Gamal",
      username: "@mahmoud_gamal",
      location: "egypt",
      followers: 0,
      bio: "IT Student | AI & Web Dev Enthusiast | Turning Ideas into Solutions",
    },
  ];
  return (
    <main className="min-h-screen bg-indigo-50 p-5 space-y-10 flex-1">
      <PageHeader
        title="Discover People"
        subtitle="Connect with amazing people and grow your network"
      />
      <SearchBar />
      <div className="grid grid-cols-4 gap-3">
        {users.map((user) => (
          <DiscoverUserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}

export default Discover;
