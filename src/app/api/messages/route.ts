// app/api/messages/route.ts
import Pusher from "pusher";
import { prisma } from "@/lib/prisma";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export async function POST(req: Request) {
  const { content, senderId, receiverId } = await req.json();
  const room = [senderId, receiverId].sort().join("_");

  // 1. حفظ في قاعدة البيانات
  const newMessage = await prisma.message.create({
    data: { content, senderId, receiverId },
  });

  // 2. إرسال "تنبيه" لريل تايم عبر Pusher
  await pusher.trigger(room, "new-message", newMessage);

  return Response.json(newMessage);
}