import type { Metadata } from "next";
import { Krub } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./Components/Footer";

const krub = Krub({
  variable: "--font-krub",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mon Site E-commerce",
  description: "Description de mon site e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${krub.variable} font-krub antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
