'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBox, FaFilter, FaHeart, FaShoppingCart, FaStar, FaTimes } from 'react-icons/fa';

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

        <Link href={`/boutique/${title.toLowerCase().replace(/ /g, '-')}`}>
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
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 185000]);

  // Données de produits étendues
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
    {
      id: 2,
      category: 'accessoires',
      image: "/casque.webp",
      title: "Casquette Los Angeles California",
      price: 45000,
      oldPrice: 55000,
      inStock: true,
      rating: 5,
      discount: 18
    },
    {
      id: 3,
      category: 'vetements',
      image: "/tshirt.png",
      title: "Ensemble Blanc Motif Cœur",
      price: 75000,
      oldPrice: 95000,
      inStock: true,
      rating: 4,
      discount: 21
    },
    {
      id: 4,
      category: 'vetements',
      image: "/souris.webp",
      title: "Body Sculptant Sans Couture",
      price: 55000,
      oldPrice: 70000,
      inStock: false,
      rating: 5,
      discount: 15
    },
    {
      id: 5,
      category: 'vetements',
      image: "/tshirt.png",
      title: "Robe d'Été Légère Fleurie",
      price: 85000,
      oldPrice: 100000,
      inStock: true,
      rating: 4,
      discount: 15
    },
    {
      id: 6,
      category: 'accessoires',
      image: "/tshirt.png",
      title: "Sac à Main Élégant",
      price: 120000,
      oldPrice: 150000,
      inStock: true,
      rating: 5,
      discount: 20
    },
    {
      id: 7,
      category: 'vetements',
      image: "/tshirt.png",
      title: "Jean Slim Taille Haute",
      price: 95000,
      oldPrice: 115000,
      inStock: true,
      rating: 4,
      discount: 17
    },
    {
      id: 8,
      category: 'accessoires',
      image: "/tshirt.png",
      title: "Montre Analogique Classique",
      price: 180000,
      oldPrice: 220000,
      inStock: true,
      rating: 5,
      discount: 18
    }
  ];

  // Catégories avec leur nombre de produits
  const categories = [
    { name: 'Accessoires', count: 4 },
    { name: 'Accessoires de tête', count: 1 },
    { name: 'Chapeau', count: 1 },
    { name: 'Lunettes', count: 1 },
    { name: 'Bijouterie', count: 6 },
    { name: 'Bijoux de corps', count: 1 },
    { name: 'Bracelets', count: 2 },
    { name: 'Colliers', count: 3 },
    { name: 'Colliers femmes', count: 2 },
    { name: 'Electronique', count: 6 },
    { name: 'Coques & accessoires de téléphone', count: 2 },
    { name: 'Non classé', count: 2 },
    { name: 'Sous-vêtements', count: 1 },
    { name: 'Vêtements', count: 5 },
    { name: 'Vêtements pour femmes', count: 3 },
    { name: 'Hauts', count: 1 },
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
          <button 
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 bg-[#048B9A] text-white px-4 py-2 rounded-lg hover:bg-[#037483] transition-colors"
          >
            <FaFilter className="w-4 h-4" />
            <span>Filter Products</span>
          </button>
        </div>
      </div>

      {/* Snackbar de filtres */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-y-auto py-8">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">FILTRER</h2>
              <button 
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaTimes className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-8">
              {/* Prix */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Prix</h3>
                <div className="px-4">
                  <div className="flex justify-between mb-4 text-gray-600">
                    <span>{priceRange[0].toLocaleString()}GNF</span>
                    <span>{priceRange[1].toLocaleString()}GNF</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="185000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#048B9A]"
                  />
                </div>
              </div>

              {/* Barre de recherche */}
              <div className="mb-10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher une catégorie..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#048B9A] focus:border-[#048B9A] outline-none"
                  />
                  <svg className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Catégories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Catégories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-h-[400px] overflow-y-auto pr-4">
                  {categories.map((category, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-gray-300 text-[#048B9A] focus:ring-[#048B9A]"
                        />
                        <span className="text-gray-700 group-hover:text-[#048B9A] transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer avec boutons */}
            <div className="border-t p-6 flex justify-between items-center bg-gray-50 rounded-b-xl">
              <button 
                onClick={() => {
                  setPriceRange([0, 185000]);
                  // Réinitialiser autres filtres
                }}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                Réinitialiser les filtres
              </button>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowFilters(false)}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
                >
                  Annuler
                </button>
                <button 
                  onClick={() => {
                    // Appliquer les filtres
                    setShowFilters(false);
                  }}
                  className="px-6 py-2.5 bg-[#048B9A] hover:bg-[#037483] text-white rounded-lg font-medium transition-colors"
                >
                  Appliquer les filtres
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grille de produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProducts.map(product => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50">
            ‹
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#048B9A] text-white">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50">
            ›
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Boutique; 