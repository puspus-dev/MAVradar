óimport DelayBadge from "./DelayBadge";

interface Train {
  id: string;
  name: string;
  from: string;
  to: string;
  arrival: string;
  delay: number;
}

export default function TrainCard({ train }: { train: Train }) {
  return (
    <div className="bg-slate-800/70 backdrop-blur p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-200 border border-slate-700">
      
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{train.name}</h3>
        <DelayBadge delay={train.delay} />
      </div>

      <p className="text-slate-400 text-sm mt-1">
        {train.from} → {train.to}
      </p>

      <p className="text-slate-500 text-xs mt-2">
        Érkezik: {train.arrival}
      </p>

    </div>
  );
}
