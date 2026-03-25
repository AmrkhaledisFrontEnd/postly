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
    <ul className="flex items-center gap-4 flex-wrap sm:justify-start justify-center">
      {stats.map((state) => (
        <li
          key={state.label}
          className="bg-white shadow sm:p-5 p-3 rounded-md flex flex-col items-center w-50 sm:gap-2 gap-1"
        >
          <p className="font-bold text-white bg-indigo-500 sm:size-7 sm:text-[15px] text-sm size-5 flex items-center justify-center shadow ring ring-gray-300 rounded-full">
            {state.count}
          </p>
          <h2 className="sm:text-[17px]">{state.label}</h2>
        </li>
      ))}
    </ul>
  );
}

export default Stats;
