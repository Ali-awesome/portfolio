import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/app/components/CursorFollower";
import Sidebar from "@/app/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SANAULLAH",
  description: "A Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorFollower />
        <div className="flex min-h-screen">
          <aside className="w-full max-w-[280px] bg-white flex flex-col justify-between">
            <Sidebar />
          </aside>
          <main className="flex-1 bg-white">{children}</main>
        </div>
      </body>
    </html>
  );
}
