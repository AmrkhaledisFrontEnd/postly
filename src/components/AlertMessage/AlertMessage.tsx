import { MdError } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
// =======================================================
function AlertMessage({
  message,
  type,
}: {
  message: string;
  type: "ERROR" | "SUCCESS";
}) {
  return (
    <p
      className={`flex items-center gap-1 text-sm
      ${type === "ERROR" && " text-red-500 "}
      ${type === "SUCCESS" && " text-green-500 "}`}
    >
      <i className="text-[18px] pb-[0.3px]">
        {type === "ERROR" && <MdError />}
        {type === "SUCCESS" && <IoIosCheckmarkCircle />}
      </i>
      {message}
    </p>
  );
}

export default AlertMessage;
