'use client'
import { motion } from 'framer-motion';
import Collection from './Components/Collection';
import Features from './Components/NavBar/Features';
import Hero from './Components/NavBar/Hero';
import Produits from './Components/Produit';
import Promo from './Components/Promo';
import Tendance from './Components/Tendance';
import PromoPopup from './components/Popup/PromoPopup';

export default function Home() {
  // Variants pour les animations de sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <main>
      {/* Hero avec animation de fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Features avec animation au scroll */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Features />
      </motion.div>

      {/* Produits avec animation au scroll */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Produits />
      </motion.div>

      {/* Promo avec animation de slide */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Promo />
      </motion.div>

      {/* Tendance avec animation de fade up */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Tendance />
      </motion.div>

      {/* Collection avec animation de scale */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Collection />
      </motion.div>
      <PromoPopup />
    </main>
  );
} 