"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
// ==================================================================
function LandingHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-4 md:items-start flex items-center justify-center flex-col"
    >
      <div className="flex items-center gap-3">
        <Image src={"/group_users.png"} alt="users" width={90} height={90} className="lg:w-[90px] sm:w-[80px] w-[70px]" />
        <div>
          <div className="flex items-center gap-1 text-amber-500">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          <span className="sm:text-[15px] text-sm font-semibold text-slate-800">Used by 12k+ developers</span>
        </div>
      </div>
      <h1 className="font-extrabold lg:text-6xl sm:text-5xl text-4xl md:text-start text-center bg-linear-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent">
        More than just <br /> friends truly connect
      </h1>
    </motion.div>
  );
}

export default LandingHero;
