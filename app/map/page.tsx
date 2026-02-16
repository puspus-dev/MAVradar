"use client";
import { useQuery } from "@tanstack/react-query";
import MapWithList from "@/components/MapWithList";

export default function MapPage() {
  const { data } = useQuery({
    queryKey: ["mav"],
    queryFn: async () => {
      const res = await fetch("/api/mav", { method: "POST", body: JSON.stringify({ Nyelv: "HU", UAID: "valami" }) });
      return res.json();
    },
    refetchInterval: 30000,
  });

  const trains = data?.Vonatok?.map((v: any) => ({
    id: v.VonatSzam,
    name: v.VonatNev || v.VonatSzam,
    lat: Number(v.Lat || 47.0),
    lon: Number(v.Lon || 19.0),
    delay: Number(v.KesesPerc || 0),
    nextStop: v.KovetkezoAllomas,
  })) || [];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Élő térkép + vonatlista</h1>
      <MapWithList trains={trains} />
    </main>
  );
}
