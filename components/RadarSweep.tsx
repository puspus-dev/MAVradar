"use client";

import { motion } from "framer-motion";

export default function RadarSweep() {
  return (
    <div className="absolute w-32 h-32 flex items-center justify-center">
      <motion.div
        className="w-32 h-32 rounded-full border-t-2 border-green-400 border-opacity-70"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />
    </div>
  );
}
