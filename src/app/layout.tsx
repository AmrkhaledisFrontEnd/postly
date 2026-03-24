import type { Metadata } from "next";
import { Outfit, Figtree } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});


// ===================================================================================================
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Postly | Signin or Signup",
  description:
    "Join Postly to sign in or create a new account and connect with friends, share ideas, and stay updated with the latest news easily and securely.",
  icons: "/icon.png",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <body
        className={`${outfit.className} antialiased [word-break:break-word] overflow-x-hidden`}
      >
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
