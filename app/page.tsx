"use client";

import { useQuery } from "@tanstack/react-query";
import { mapMavResponse } from "@/lib/mav";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StatsPage() {
  const { data } = useQuery({
    queryKey: ["mav"],
    queryFn: async () => {
      const res = await fetch("/api/mav", { method: "POST" });
      return res.json();
    },
    refetchInterval: 30000,
  });

  const trains = data ? mapMavResponse(data) : [];

  const averageDelay =
    trains.length > 0
      ? Math.round(
          trains.reduce((acc, t) => acc + t.delay, 0) / trains.length
        )
      : 0;

  const delayedOver15 = trains.filter(t => t.delay > 15).length;

  // Fake trend adat (később cache-ből lehetne építeni)
  const trendData = [
    { time: "10:00", delay: 4 },
    { time: "11:00", delay: 7 },
    { time: "12:00", delay: 6 },
    { time: "13:00", delay: 9 },
    { time: "14:00", delay: averageDelay },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">

      <h1 className="text-4xl font-bold">
        Országos Vasúti Állapot
      </h1>

      {/* KPI kártyák */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <p className="text-slate-400 text-sm">Átlag késés</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            {averageDelay} perc
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <p className="text-slate-400 text-sm">15+ perces késések</p>
          <h2 className="text-3xl font-bold text-red-500 mt-2">
            {delayedOver15}
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <p className="text-slate-400 text-sm">Vonatok száma</p>
          <h2 className="text-3xl font-bold mt-2">
            {trains.length}
          </h2>
        </div>

      </div>

      {/* Trend grafikon */}
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
        <h3 className="text-xl font-semibold mb-4">
          Késés trend (óra szerint)
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="delay"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </main>
  );
}
