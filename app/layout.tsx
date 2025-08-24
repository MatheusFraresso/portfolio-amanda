import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
      <body className=" lg:w-full">
        <Header />
        <section className="pt-20 px-4 lg:px-0">{children}</section>
      </body>
    </html>
  );
}
