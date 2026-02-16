export interface Train {
  id: string;
  name: string;
  from: string;
  to: string;
  arrival: string;
  delay: number;
}

export function mapMavResponse(raw: any): Train[] {
  if (!raw?.Vonatok) return [];

  return raw.Vonatok.map((v: any) => ({
    id: v.VonatSzam,
    name: v.VonatNev || v.VonatSzam,
    from: v.InduloAllomas,
    to: v.ErkezoAllomas,
    arrival: v.VarhatoErkezes,
    delay: Number(v.KesesPerc || 0),
  }));
}
