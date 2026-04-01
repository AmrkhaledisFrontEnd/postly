"use client";
import { Prisma } from "@prisma/client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DropDown from "./DropDown";
import EditMessage from "./EditMessage";
import Image from "next/image";
// ===================================================================
type Message = Prisma.MessageGetPayload<{
  include: {
    sender: true;
  };
}>;
function MessageDesign({
  message,
  userSessionId,
  dropDown,
  setDropDown,
  receiverId,
}: {
  message: Message;
  userSessionId: string;
  dropDown: string;
  setDropDown: Dispatch<SetStateAction<string>>;
  receiverId: string;
}) {
  const [editMessage, setEditMessage] = useState(false);
  return (
    <>
      <div
        key={message.id}
        className={`space-y-2 w-full ${message.senderId === userSessionId && "flex items-end flex-col lg:pr-2"}`}
      >
        {dropDown === message.id && message.senderId === userSessionId && (
          <DropDown
            setEditMessage={setEditMessage}
            message={message}
            senderId={userSessionId}
            receiverId={receiverId}
          />
        )}
        <div
          className={`flex items-center lg:max-w-1/2 sm:max-w-[80%] max-w-[95%] gap-1 ${message.senderId === userSessionId ? "" : "flex-row-reverse  justify-end "}`}
        >
          <p
            dir="auto"
            onClick={() =>
              setDropDown((prev) => (prev === message.id ? "" : message.id))
            }
            className={`p-2 messageContent ${message.senderId === userSessionId && "cursor-pointer"} ${message.senderId === userSessionId ? "bg-indigo-500 rounded-br-none text-white" : "bg-white rounded-bl-none"} shadow  rounded-md font-semibold w-fit`}
          >
            {message.content}
          </p>
          <Image
            src={
              message.sender && message.sender.image
                ? message.sender.image
                : "/user.jpg"
            }
            alt="user image"
            width={30}
            height={30}
            className="size-8 rounded-full object-cover shrink-0"
          />
        </div>
      </div>
      {editMessage && (
        <EditMessage
          senderId={userSessionId}
          receiverId={receiverId}
          message={message}
          editMessage={editMessage}
          setEditMessage={setEditMessage}
        />
      )}
    </>
  );
}

export default MessageDesign;
