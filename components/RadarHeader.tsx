"use client";

import { motion } from "framer-motion";

export default function RadarHeader({ delayedCount }: { delayedCount: number }) {
  return (
    <div className="relative flex flex-col items-center py-20 overflow-hidden">

      {/* Radar körök */}
      <motion.div
        className="absolute w-96 h-96 rounded-full border border-green-500/20"
        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <h1 className="text-5xl font-bold tracking-tight">
        <span className="text-green-400">MÁV</span> Radar
      </h1>

      <p className="text-slate-400 mt-2">
        Élő vasúti monitor
      </p>

      <div className="mt-8 text-6xl font-bold text-green-400">
        {delayedCount}
      </div>

      <p className="text-slate-500">késő vonat</p>
    </div>
  );
}
