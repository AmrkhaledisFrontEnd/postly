"use client";
import { Message } from "@prisma/client";
import CreateMessage from "./CreateMessage";
import MessageDesign from "./MessageDesign";
import { useEffect, useState } from "react";
import Pusher from "pusher-js"; // استيراد بوشر

interface MessagesProps {
  messages: Message[];
  userSessionId: string;
  receiverId: string;
}

function Messages({
  messages: initialMessages, // نغير الاسم هنا لنستخدمه كقيمة أولية
  userSessionId,
  receiverId,
}: MessagesProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [dropDown, setDropDown] = useState("");
  const room = [userSessionId, receiverId].sort().join("_");

  useEffect(() => {
    // 1. إعداد Pusher (استخدم مفتاحك الخاص من لوحة تحكم Pusher لاحقاً)
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    });

    // 2. الاشتراك في القناة (الغرفة)
    const channel = pusher.subscribe(room);

    // 3. الاستماع لحدث وصول رسالة جديدة
    channel.bind("new-message", (newMessage: Message) => {
      setMessages((prev) => {
        // تأكد أن الرسالة ليست موجودة بالفعل (لتجنب التكرار)
        if (prev.find((m) => m.id === newMessage.id)) return prev;
        return [...prev, newMessage];
      });
    });

    // 4. تنظيف الاتصال عند مغادرة الصفحة
    return () => {
      pusher.unsubscribe(room);
      pusher.disconnect();
    };
  }, [room]);

  // منطق إغلاق القائمة المنسدلة (الذي كتبته أنت)
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!e.target.closest(".messageContent")) setDropDown("");
      }
    };
    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle); // تصحيح بسيط هنا بإضافة document
    };
  }, []);

  return (
    <>
      <div className="lg:h-152 h-130 overflow-y-auto overflow-x-hidden space-y-2 no-scrollbar">
        {messages.length > 0 &&
          messages.map((message) => (
            <MessageDesign
              dropDown={dropDown}
              setDropDown={setDropDown}
              key={message.id}
              message={message}
              userSessionId={userSessionId}
            />
          ))}
      </div>
      <CreateMessage userSessionId={userSessionId} receiverId={receiverId} />
    </>
  );
}

export default Messages;