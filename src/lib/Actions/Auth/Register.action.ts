"use server";
import { RegisterSchema } from "@/lib/Schemas/Auth/Register.schema";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { generateVerificationToken } from "@/lib/generateVerificationToken";
import { sendVerificationToken } from "@/lib/email/sendVerificationToken";
import bcrypt from "bcryptjs";
// =============================================================================================
export const RegisterAction = async (
  data: z.infer<typeof RegisterSchema>,
): Promise<{ success: boolean; message: string }> => {
  const validation = RegisterSchema.safeParse(data);
  if (!validation.success)
    return { success: false, message: validation.error.issues[0].message };
  try {
    const isExistingUser = await prisma.user.findUnique({
      where: {
        email: validation.data.email,
      },
    });
    if (isExistingUser && !isExistingUser.password)
      return {
        success: false,
        message: "This account is registered with Google",
      };
    if (isExistingUser)
      return { success: false, message: "This user already exists, sign in" };
    const verificationToken: { error: string } | { token: string } =
      await generateVerificationToken(validation.data.email);

    if ("error" in verificationToken)
      return { success: false, message: verificationToken.error };
    const hashedPassword = await bcrypt.hash(validation.data.password, 12);
    const newUser = await prisma.user.create({
      data: {
        name: validation.data.name,
        email: validation.data.email,
        password: hashedPassword,
      },
    });
    if (!newUser)
      return {
        success: false,
        message: "An error occurred. Please recreate your account",
      };
    const result = await sendVerificationToken(
      validation.data.email,
      verificationToken.token,
    );
    if (!result.success) return { success: false, message: result.message };
    return { success: true, message: result.message };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Account creation failed. Please try again later",
    };
  }
};
