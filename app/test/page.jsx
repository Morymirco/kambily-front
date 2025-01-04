'use client'
import ProductCard from '../Components/Common/ProductCard';

const TestPage = () => {
  // Données de test pour les produits
  const testProducts = [
    {
      id: 1,
      image: "/realite.webp",
      gallery: ["/realite.webp", "/realite2.webp", "/realite3.webp"],
      title: "Réalité Virtuelle Casque , Portable 3D Virtuel Réalité Lunettes Pour Films Et Jeux",
      price: "185,000",
      oldPrice: "210,000",
      inStock: true,
      description: "Profitez dès maintenant avant la fin de l'offre"
    },
    {
      id: 2,
      image: "/pochette.webp",
      gallery: ["/pochette.webp", "/pochette2.webp"],
      title: "Coque De Téléphone Portable Figure",
      price: "45,000",
      inStock: true
    },
    {
      id: 3,
      image: "/lumiere.webp",
      gallery: ["/lumiere.webp", "/lumiere2.webp"],
      title: "1 pièce Lumière d'ambiance pour téléphone clip rond avec miroir",
      price: "40,000",
      inStock: true
    },
    {
      id: 4,
      image: "/lunettes.webp",
      gallery: ["/lunettes.webp", "/lunettes2.webp"],
      title: "3 Pièces Lunettes De Soleil De Mode",
      price: "85,000",
      oldPrice: "100,000",
      inStock: true,
      description: "Ne manquez pas cette opportunité tant qu'elle dure"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-8">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Test du Composant ProductCard</h1>
        <p className="text-gray-600">
          Cette page démontre les différentes utilisations du composant ProductCard avec différentes configurations.
        </p>
      </div>

      {/* Section 1: Affichage en grille */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Affichage en Grille</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {testProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              gallery={product.gallery}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              inStock={product.inStock}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Section 2: Affichage individuel avec toutes les options */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Produit avec Toutes les Options</h2>
        <div className="max-w-sm">
          <ProductCard
            image="/realite.webp"
            gallery={["/realite.webp", "/realite2.webp", "/realite3.webp"]}
            title="Réalité Virtuelle Casque , Portable 3D Virtuel Réalité Lunettes Pour Films Et Jeux"
            price="185,000"
            oldPrice="210,000"
            inStock={true}
            description="Profitez dès maintenant avant la fin de l'offre"
          />
        </div>
      </section>

      {/* Section 3: Variations */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variations du Composant</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Produit sans réduction */}
          <div>
            <h3 className="text-sm font-medium mb-2">Sans Réduction</h3>
            <ProductCard
              image="/pochette.webp"
              title="Coque De Téléphone Portable Figure"
              price="45,000"
              inStock={true}
            />
          </div>

          {/* Produit hors stock */}
          <div>
            <h3 className="text-sm font-medium mb-2">Hors Stock</h3>
            <ProductCard
              image="/lumiere.webp"
              title="1 pièce Lumière d'ambiance pour téléphone"
              price="40,000"
              inStock={false}
            />
          </div>

          {/* Produit avec galerie étendue */}
          <div>
            <h3 className="text-sm font-medium mb-2">Avec Galerie Étendue</h3>
            <ProductCard
              image="/lunettes.webp"
              gallery={["/lunettes.webp", "/lunettes2.webp", "/realite.webp", "/realite2.webp"]}
              title="3 Pièces Lunettes De Soleil De Mode"
              price="85,000"
              oldPrice="100,000"
              inStock={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPage; 