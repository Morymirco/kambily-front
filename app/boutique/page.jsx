'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBox, FaFilter, FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

// Composant ProductCard amélioré
const ProductCard = ({ image, title, price, oldPrice, inStock, rating, discount }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            -{discount}%
          </div>
        )}
        <div className={`absolute inset-x-0 bottom-0 p-4 flex justify-center gap-2 bg-black/40 backdrop-blur-sm transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button className="bg-white p-2 rounded-full hover:bg-[#048B9A] hover:text-white transition-colors">
            <FaHeart className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-[#048B9A] hover:text-white transition-colors">
            <FaShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
          ))}
          <span className="text-sm text-gray-500 ml-2">({rating}.0)</span>
        </div>

        <Link href={`/produit/${title.toLowerCase().replace(/ /g, '-')}`}>
          <h3 className="text-sm font-medium text-gray-800 mb-2 hover:text-[#048B9A] transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-[#048B9A]">{price.toLocaleString()} GNF</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">{oldPrice.toLocaleString()} GNF</span>
          )}
        </div>

        {inStock ? (
          <div className="flex items-center text-green-600">
            <FaBox className="w-4 h-4 mr-1" />
            <span className="text-sm">En Stock</span>
          </div>
        ) : (
          <div className="flex items-center text-red-500">
            <FaBox className="w-4 h-4 mr-1" />
            <span className="text-sm">Rupture de stock</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Boutique = () => {
  const [sortBy, setSortBy] = useState('popular');
  
  // Données de produits
  const allProducts = [
    {
      id: 1,
      category: 'vetements',
      image: "/pyjama.png",
      title: "Ensemble De Pyjama Short & Top À Fines Brides Imprimé Cœur",
      price: 65000,
      oldPrice: 85000,
      inStock: true,
      rating: 4,
      discount: 23
    },
    // Ajoutez plus de produits ici
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 my-8">
      {/* Fil d'Ariane */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#048B9A]">Accueil</Link>
        <span>›</span>
        <span className="text-gray-900">Boutique</span>
      </div>

      {/* Barre d'outils de la boutique */}
      <div className="bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Nombre de résultats */}
        <div className="text-gray-600 text-sm">
          Affichage de 1–12 sur 24 résultats
        </div>

        {/* Options de tri et affichage */}
        <div className="flex items-center gap-6">
          {/* Tri */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 text-sm focus:ring-[#048B9A] focus:border-[#048B9A] bg-white"
            >
              <option value="popular">Tri par popularité</option>
              <option value="recent">Plus récents</option>
              <option value="prixCroissant">Prix croissant</option>
              <option value="prixDecroissant">Prix décroissant</option>
            </select>
          </div>

          {/* Nombre d'items par page */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select
              className="border border-gray-300 rounded-lg py-2 px-4 text-sm focus:ring-[#048B9A] focus:border-[#048B9A] bg-white"
            >
              <option>12 Items</option>
              <option>24 Items</option>
              <option>36 Items</option>
            </select>
          </div>

          {/* Boutons de vue */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zm-12 6h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm-12 6h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z"/>
              </svg>
            </button>
          </div>

          {/* Bouton Filter */}
          <button className="flex items-center gap-2 bg-[#048B9A] text-white px-4 py-2 rounded-lg hover:bg-[#037483] transition-colors">
            <FaFilter className="w-4 h-4" />
            <span>Filter Products</span>
          </button>
        </div>
      </div>

      {/* Grille de produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProducts.map(product => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default Boutique; 