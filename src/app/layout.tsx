import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dusan Peric",
  description: "Dusan Peric - Visit Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen flex items-start justify-start ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
