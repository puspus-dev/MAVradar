"use client";
import { useState } from "react";
import MapView from "./MapView";

interface Train {
  id: string;
  name: string;
  lat: number;
  lon: number;
  delay: number;
  nextStop?: string;
}

export default function MapWithList({ trains }: { trains: Train[] }) {
  const [selectedTrain, setSelectedTrain] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4 overflow-y-auto max-h-[600px]">
        {trains.map((train) => (
          <div
            key={train.id}
            className={`p-4 rounded-2xl border border-slate-700 cursor-pointer hover:scale-[1.02] transition-all ${
              selectedTrain === train.id ? "bg-slate-700" : "bg-slate-800/60"
            }`}
            onClick={() => setSelectedTrain(train.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{train.name}</h3>
              <span
                className={`font-bold ${
                  train.delay > 15 ? "text-red-500" : train.delay > 5 ? "text-amber-400" : "text-green-400"
                }`}
              >
                +{train.delay}p
              </span>
            </div>
            <p className="text-slate-400 text-sm mt-1">Következő: {train.nextStop || "-"}</p>
          </div>
        ))}
      </div>
      <MapView trains={trains} />
    </div>
  );
}
