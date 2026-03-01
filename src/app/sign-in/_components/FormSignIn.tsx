"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import ButtonSignWithGoogle from "@/components/ButtonSignWithGoogle/ButtonSignWithGoogle";
import AuthDivider from "@/components/AuthDivider/AuthDivider";
import AuthFooter from "@/components/AuthFooter/AuthFooter";
import AuthFormField from "@/components/AuthFormField/AuthFormField";
// ==============================================================================
function FormSignIn() {
  const [loading, setLoading] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="sm:w-fit w-[90%]"
    >
      <form className="bg-white rounded-xl shadow-2xl border border-black/15 sm:w-100 w-full overflow-hidden">
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
            <AuthFormField
              id="email"
              placeholder="Enter your email address"
              label="Email address"
              type="email"
            />
            <AuthFormField
              id="password"
              placeholder="Enter your password"
              label="Password"
              type="password"
            />
            <button className="w-full hover:scale-101 transition-css bg-[#7755FF] mt-5 shadow py-1.5 font-medium text-sm rounded-md text-white cursor-pointer">
              Sign in
            </button>
          </div>
        </div>
        <AuthFooter
          questionText="Don’t have an account?"
          linkText="Sign up"
          href="/register"
        />
      </form>
    </motion.div>
  );
}

export default FormSignIn;
