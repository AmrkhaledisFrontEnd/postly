"use client";
import LoginFormField from "@/components/LoginFormField/LoginFormField";
import Link from "next/link";
import ButtonSignWithGoogle from "../ButtonSignWithGoogle/ButtonSignWithGoogle";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthDivider from "../AuthDivider/AuthDivider";
import AuthFooter from "../AuthFooter/AuthFooter";
import { motion } from "framer-motion";
// ==============================================================================
function LoginForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{once:true}}
    >
      <form className="bg-white rounded-xl shadow-2xl border border-black/15 w-110 overflow-hidden">
        <div className="space-y-7 p-8">
          <div className="space-y-6">
            <AuthHeader
              title="Sign in to postly"
              subtitle="Welcome back! Please sign in to continue"
            />
            <ButtonSignWithGoogle />
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
            <button className="w-full border border-black bg-linear-to-t from-[#33343B] to-[#3E3F46] mt-5 shadow py-2 font-medium text-sm rounded-md text-white cursor-pointer">
              Sign in
            </button>
          </div>
        </div>
        <AuthFooter
          questionText="Don’t have an account?"
          linkText="Sign up"
          href="https://amr-khaled-site.netlify.app/"
        />
      </form>
    </motion.div>
  );
}

export default LoginForm;
