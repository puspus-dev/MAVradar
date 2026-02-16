export default function DelayBadge({ delay }: { delay: number }) {
  let color = "text-green-400";

  if (delay > 15) color = "text-red-500";
  else if (delay > 5) color = "text-amber-400";

  return (
    <span className={`font-bold ${color}`}>
      +{delay}p
    </span>
  );
}
