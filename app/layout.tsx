import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MÁV Radar",
  description: "Élő vonatinformációk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="bg-[#0b1220] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
