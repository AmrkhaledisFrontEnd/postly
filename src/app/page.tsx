import LandingHero from "@/components/LandingHero/LandingHero";
import LoginForm from "@/components/LoginForm/LoginForm";
import Image from "next/image";
// =======================================================================
export default function Home() {
  return (
    <main className="min-h-screen py-10">
      <Image src={"/login-bg.png"} className="-z-1" alt="login bg" fill />
      <div className="container-css flex flex-col gap-10">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={220}
          height={220}
          className="w-55 h-12"
        />
        <div className="flex items-center justify-between ">
          <LandingHero />
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
