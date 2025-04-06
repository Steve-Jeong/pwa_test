import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App1",
  description: "App1 Progressive Web App",
  // manifest: "/app1/manifest.json",
  // themeColor: "#3b82f6",
  // appleWebApp: {
  //   capable: true,
  //   statusBarStyle: "default",
  //   title: "App1",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="apple-touch-icon" href={`${basePath}/icons/icon-192x192.png`} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Link href='/privacy'>Privacy</Link>
      </body>
    </html>
  );
}
