export default function TrainCardSkeleton() {
  return (
    <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-5 w-24 bg-slate-700 rounded" />
        <div className="h-5 w-12 bg-slate-700 rounded" />
      </div>

      <div className="h-4 w-48 bg-slate-700 rounded mt-3" />
      <div className="h-3 w-32 bg-slate-700 rounded mt-3" />
    </div>
  );
}
