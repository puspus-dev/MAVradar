"use client";
import { motion } from "framer-motion";

export default function RadarLogo() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full rounded-full border border-green-500/30"
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="w-20 h-20 rounded-full border border-green-400 flex items-center justify-center">
        <div className="w-3 h-3 bg-green-400 rounded-full shadow-[0_0_12px_#22c55e]" />
      </div>
    </div>
  );
}
