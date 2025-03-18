import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio amanda",
  description:
    "Porftolio designed by Amanda (amanda.bonato@outlook.com.br) and developer by Matheus Fraresso (matheusmfraresso@gmail.com)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bg-gradient-to-br from-[#fff9f9] to-[#246b5d]  w-full h-12 flex items-center space-x-10 px-10 py-2">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#linkedin">Linkedin</a>
        </div>

        {children}
      </body>
    </html>
  );
}
