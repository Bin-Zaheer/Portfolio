import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIN ZAHEER — Digital Creative Agency",
  description:
    "BIN ZAHEER creates modern WordPress experiences, high-performance websites and cinematic video content.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}