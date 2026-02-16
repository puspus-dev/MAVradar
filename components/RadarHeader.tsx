"use client";
import RadarLogo from "./RadarLogo";
import RadarSweep from "./RadarSweep";

export default function RadarHeader({ delayedCount }: { delayedCount: number }) {
  return (
    <div className="relative flex flex-col items-center py-20 overflow-hidden">
      <RadarSweep />
      <RadarLogo />
      <h1 className="text-5xl font-bold mt-6">
        <span className="text-green-400">MÁV</span> Radar
      </h1>
      <p className="text-slate-400 mt-2">Élő vasúti monitor</p>
      <div className="mt-8 text-6xl font-bold text-green-400">{delayedCount}</div>
      <p className="text-slate-500">késő vonat</p>
    </div>
  );
}
