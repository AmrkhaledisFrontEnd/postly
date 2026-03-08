import PageHeader from "@/components/PageHeader/PageHeader";
import Stats from "./_components/Stats";
import ConnectionsTabs from "./_components/ConnectionsTabs";
// ===========================================================================
function Connections() {
  return (
    <main className="min-h-screen bg-indigo-50 p-5 space-y-10">
      <PageHeader
        title="Connections"
        subtitle="Manage your network and discover new connections"
      />
      <div className="space-y-5">
        <Stats />
        <ConnectionsTabs />
      </div>
    </main>
  );
}

export default Connections;
