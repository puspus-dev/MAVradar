import { NextResponse } from "next/server";

const MAV_API_URL = process.env.MAV_API_URL!;

let cache: any = null;
let lastFetch = 0;

export async function POST(req: Request) {
  const now = Date.now();

  if (cache && now - lastFetch < 30000) return NextResponse.json(cache);

  try {
    const body = await req.json();

    const response = await fetch(MAV_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    cache = data;
    lastFetch = now;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "MÁV API hiba" }, { status: 500 });
  }
}
