import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import CookieConsent from './components/Popup/CookieConsent';
import ScrollToTop from './Components/ScrollToTop';

import './globals.css';


const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
 

  return (
    <html lang="fr">
      {/* <PromoPopup /> */}
      <body className={inter.className}>
      {/* <Navbar /> */}
      {children}
      
      
      {/* <Footer /> */}
      <CookieConsent />
      <ScrollToTop/>
      </body>
    </html>
  );
}
