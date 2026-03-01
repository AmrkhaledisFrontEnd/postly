"use client";
import LoginFormField from "@/components/AuthFormField/AuthFormField";
import Link from "next/link";
import ButtonSignWithGoogle from "../ButtonSignWithGoogle/ButtonSignWithGoogle";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthDivider from "../AuthDivider/AuthDivider";
import AuthFooter from "../AuthFooter/AuthFooter";
import { motion } from "framer-motion";
import { useState } from "react";
// ==============================================================================
function LoginForm() {
  const [loading, setLoading] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="sm:w-fit w-full"
    >
      <form className="bg-white rounded-xl shadow-2xl border border-black/15 lg:w-110 md:w-100 sm:w-130 w-full overflow-hidden">
        <div className="space-y-7 lg:p-8 p-5">
          <div className="space-y-6">
            <AuthHeader
              title="Sign in to postly"
              subtitle="Welcome back! Please sign in to continue"
            />
            <ButtonSignWithGoogle loading={loading} setLoading={setLoading} />
          </div>
          <AuthDivider />
          <div className="space-y-2">
            <LoginFormField
              id="email"
              placeholder="Enter your email address"
              label="Email address"
              type="email"
            />
            <div className="space-y-0.5">
              <LoginFormField
                id="password"
                placeholder="Enter your password"
                label="Password"
                type="password"
              />
              <Link
                href={"/"}
                className="text-[13px] font-medium text-slate-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button className="w-full hover:scale-101 transition-css border border-black bg-linear-to-t from-[#33343B] to-[#3E3F46] mt-5 shadow py-1.5 font-medium text-sm rounded-md text-white cursor-pointer">
              Sign in
            </button>
          </div>
        </div>
        <AuthFooter questionText="Don’t have an account?" linkText="Sign up" href="/register" />
      </form>
    </motion.div>
  );
}

export default LoginForm;
