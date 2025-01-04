import { Inter } from 'next/font/google';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar/Navbar';
import CookieConsent from './Components/Popup/CookieConsent';
import ScrollToTop from './Components/ScrollToTop';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
        <ScrollToTop/>
      </body>
    </html>
  );
}
