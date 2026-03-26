import { prisma } from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher"; // استيراد النسخة الجاهزة

export async function POST(req: Request) {
  const { content, senderId, receiverId } = await req.json();
  const room = [senderId, receiverId].sort().join("_");

  // 1. حفظ في قاعدة البيانات
  const newMessage = await prisma.message.create({
    data: { content, senderId, receiverId },
  });

  // 2. استخدام النسخة الموحدة لإرسال التنبيه
  await pusherServer.trigger(room, "new-message", newMessage);

  return Response.json(newMessage);
}