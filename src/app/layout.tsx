import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <footer className="w-full absolute bottom-0 left-0 p-8">
          <div className="w-full flex items-end justify-between">
            <span className="text-xs tracking-wide">
              copyright&#169;DusanPeric{new Date().getFullYear()}
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}