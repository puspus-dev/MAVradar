import { NextResponse } from "next/server";

const MAV_API_URL = "https://..."; // ide jön a valódi endpoint

let cache: any = null;
let lastFetch = 0;

export async function POST(req: Request) {
  const now = Date.now();

  // 30 mp cache
  if (cache && now - lastFetch < 30000) {
    return NextResponse.json(cache);
  }

  try {
    const response = await fetch(MAV_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        Nyelv: "HU",
        UAID: "valami-uaid",
      }),
    });

    const data = await response.json();

    cache = data;
    lastFetch = now;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "MÁV API hiba" },
      { status: 500 }
    );
  }
}
