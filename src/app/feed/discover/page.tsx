import PageHeader from "@/components/PageHeader/PageHeader";
import DiscoverUsers from "./_components/DiscoverUsers";
// ===============================================================================
function Discover() {

  return (
    <main className="min-h-screen bg-indigo-50 p-5 space-y-10 flex-1">
      <PageHeader
        title="Discover People"
        subtitle="Connect with amazing people and grow your network"
      />
      <DiscoverUsers />
    </main>
  );
}

export default Discover;
