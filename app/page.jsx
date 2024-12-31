import Features from './Components/NavBar/Features';
import Hero from './Components/NavBar/Hero';
import Produits from './Components/Produit';
import Promo from './Components/Promo';
import Tendance from './Components/Tendance';
import Collection from './Components/Collection';


export default function Home() {
  return (
    <main>
      <Hero />

      {/* Autres composants de votre page */}
      <Features />
      <Produits/>
      <Promo/>
      <Tendance/>
      <Collection/>
     

      
    </main>
  )
} 