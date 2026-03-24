import { UserWithRelations } from "@/lib/types";
// ===================================================================
function Stats({
  userSession,
}: {
  userSession: UserWithRelations;
}) {
  const stats = [
    { count: userSession.followers.length, label: "Followers" },
    { count: userSession.followings.length, label: "Following" },
    { count: userSession.receiverRequests.length, label: "Pending" },
  ];
  return (
    <ul className="flex items-center gap-4">
      {stats.map((state) => (
        <li
          key={state.label}
          className="bg-white shadow p-5 rounded-md flex flex-col items-center w-50 gap-2"
        >
          <p className="font-bold text-white bg-indigo-500 size-7 flex items-center justify-center shadow ring ring-gray-300 rounded-full">
            {state.count}
          </p>
          <h2 className=" text-[17px]">{state.label}</h2>
        </li>
      ))}
    </ul>
  );
}

export default Stats;
