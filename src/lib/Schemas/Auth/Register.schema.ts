import { z } from "zod";
// ====================================================================
export const RegisterSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(30, { message: "Name must not exceed 30 characters" })
    .trim(),

  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email must not exceed 100 characters" })
    .trim(),

  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(64, { message: "Password must not exceed 64 characters" }),
});
