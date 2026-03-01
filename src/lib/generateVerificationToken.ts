import { createHash, randomUUID } from "node:crypto";
import { prisma } from "@/lib/prisma";
// ==========================================================================
export const generateVerificationToken = async (email: string) => {
  try {
    if (!email) return { error: "Email is required" };
    const token = randomUUID();
    const hashedToken = createHash("sha256").update(token).digest("hex");
    await prisma.$transaction([
      prisma.verificationToken.deleteMany({
        where: {
          identifier: email,
        },
      }),
      prisma.verificationToken.create({
        data: {
          identifier: email,
          token: hashedToken,
          expires: new Date(Date.now() + 10 * 60 * 1000),
        },
      }),
    ]);
    return { token };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong. Please try again." };
  }
};
