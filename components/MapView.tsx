"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export function createMarkerIcon(delay: number) {
  let color = "#22c55e";
  if (delay > 15) color = "#ef4444";
  else if (delay > 5) color = "#f59e0b";
  return L.divIcon({
    html: `<div style="
      width:16px; height:16px; border-radius:50%;
      background:${color};
      box-shadow:0 0 12px ${color};
      border:2px solid #0b1220"></div>`,
    className: "",
  });
}

interface Train {
  id: string;
  name: string;
  lat: number;
  lon: number;
  delay: number;
  nextStop?: string;
}

export default function MapView({ trains }: { trains: Train[] }) {
  return (
    <MapContainer center={[47.1625, 19.5033]} zoom={7} style={{ height: "600px", width: "100%" }}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      {trains.map((train) => (
        <Marker key={train.id} position={[train.lat, train.lon]} icon={createMarkerIcon(train.delay)}>
          <Popup>
            <div>
              <strong>{train.name}</strong>
              <br />Késés: {train.delay} perc
              <br />Következő: {train.nextStop || "-"}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
