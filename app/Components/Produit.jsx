import Image from 'next/image';
import { FaBox, FaShoppingCart } from 'react-icons/fa';

const Produit = ({ image, title, price, inStock }) => {
  return (
    <div className="border rounded-xl overflow-hidden bg-white group">
      {/* Image du produit */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Informations du produit */}
      <div className="p-4">
        {/* Titre */}
        <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Prix */}
        <p className="text-lg font-bold text-gray-900 mb-2">
          {price}GNF
        </p>

        {/* Indicateur de stock */}
        {inStock && (
          <div className="flex items-center text-[#048B9A] mb-3">
            <FaBox className="w-4 h-4 mr-1" />
            <span className="text-sm">In Stock</span>
          </div>
        )}

        {/* Bouton Ajouter au panier */}
        <button className="w-full bg-[#048B9A] text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaShoppingCart className="text-sm" />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

// Exemple d'utilisation avec les données des produits
const ProductList = () => {
  const products = [
    {
      id: 1,
      image: "/pyjama.png",
      title: "Ensemble De Pyjama Short & Top À Fines Brides Imprimé Cœur",
      price: "65,000",
      inStock: true
    },
    {
      id: 2,
      image: "/tshirt.png",
      title: "T-shirt graphique Floral et Slogan pour hommes",
      price: "100,000",
      inStock: true
    },
    {
      id: 3,
      image: "/tshirt2.webp",
      title: "Manfinity Sporsity Homme T-shirt graphique rayé et lettre",
      price: "100,000",
      inStock: true
    },
    {
      id: 4,
      image: "/couple_denim.webp",
      title: "Solid V Bra Bodysuit",
      price: "85,000",
      inStock: true
    },
    {
      id: 5,
      image: "/robe_velours.png",
      title: "Robe moulante à fines brides en velours",
      price: "75,000",
      inStock: true
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-16 my-8 ">
      {/* En-tête avec compte à rebours */}
      <div className="flex items-center justify-between border rounded-lg p-4 mb-8">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold">Livraison Gratuite</h2>
          <div className="bg-[#048B9A] text-white px-4 py-2 rounded">
            00 : 00 : 00 : 00
          </div>
          <p className="text-gray-500">Achetez maintenant et profitez de l'offre !</p>
        </div>
        <button className="flex items-center text-[#048B9A]">
          Voir Plus
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <Produit
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
