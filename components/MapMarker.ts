import L from "leaflet";

export function createMarkerIcon(delay: number) {
  let color = "#22c55e";

  if (delay > 15) color = "#ef4444";
  else if (delay > 5) color = "#f59e0b";

  return L.divIcon({
    html: `
      <div style="
        width:18px;
        height:18px;
        border-radius:50%;
        background:${color};
        box-shadow:0 0 12px ${color};
        border:2px solid #0b1220;
      "></div>
    `,
    className: "",
  });
}
