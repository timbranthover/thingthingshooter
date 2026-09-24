import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villa Raid",
  description: "A mobile-first Source-era inspired browser FPS level.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
