import Navbar from '@/Components/NavBar/Navbar';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
} 