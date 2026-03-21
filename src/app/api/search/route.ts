import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// ==============================================================
export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get("q")?.trim();
    if (q) {
      const users = await prisma.user.findMany({
        where: {
          OR: [
            { username: { equals: q, mode: "insensitive" } },

            { username: { startsWith: q, mode: "insensitive" } },

            { name: { startsWith: q, mode: "insensitive" } },

            { location: { startsWith: q, mode: "insensitive" } },

            { name: { contains: q, mode: "insensitive" } },
          ],
        },
        take: 20,
        orderBy: {
          createdAt: "desc",
        },
      });
      return NextResponse.json(users, { status: 200 });
    }
    return NextResponse.json(
      { error: "Please enter the name or username or location for the search" },
      { status: 400 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred during the search" },
      { status: 500 },
    );
  }
}
