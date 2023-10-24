import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dusan Peric",
  description: "Dusan Peric - Visit Card",
};

const Main = ({ children }: { children: React.ReactNode }) => (
  <main className="h-full xl:h-screen w-full flex flex-col items-start justify-between p-8">
    {children}
  </main>
);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <Script
            strategy="afterInteractive"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-RK8EKF3QYT"
          />
          <Script id="google-analytics" async strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RK8EKF3QYT');
        `}
          </Script>
        </head>
        <body
          className={`w-full h-full xl:h-screen flex items-start justify-start bg-[#faf9f7] ${inter.className}`}
        >
          <Main>{children}</Main>
        </body>
      </html>
    </>
  );
}
