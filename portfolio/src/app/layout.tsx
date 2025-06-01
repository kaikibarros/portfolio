import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
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
  title: "Kaiki Barros",
  description: "Minhas experiências e contatos",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} flex flex-col min-h-screen ${geistMono.variable} antialiased`}
      >
         <Navbar /> {/* 2. Adicione a Navbar aqui */}
           <main className="flex-grow">{/* Adicionado flex-grow para empurrar o footer para baixo */}
          {children}
        </main>
         <Footer/>
      </body>
    </html>
  );
}
