import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
// ====================================
export async function GET() {
  const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
  try {
    await prisma.story.deleteMany({
      where: {
        createdAt: {
          lt: last24Hours,
        },
      },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
