"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const router = useRouter();

  const categories = [
    {
      name: "Vêtements",
      subcategories: ["Hommes", "Femmes", "Enfants"]
    },
    {
      name: "Électronique",
      subcategories: ["Téléphones", "Ordinateurs", "Accessoires"]
    },
    {
      name: "Accessoires",
      subcategories: ["Sacs", "Bijoux", "Montres"]
    }
  ];

  const cartItems = [
    {
      id: 1,
      name: "Ensemble De Pyjama",
      price: 65000,
      quantity: 1,
      image: "/pyjama.png"
    }
  ];

  useEffect(() => {
    // Définition des couleurs
    const colors = [
      '#ed1c66', '#6a23d5', '#23a6d5', '#23d5ab', 
      '#f03e3e', '#e8890c', '#e73c7e'
    ];
    
    // Fonction pour obtenir des couleurs aléatoires
    const getRandomColors = () => {
      const shuffled = [...colors].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4); // Prend 4 couleurs aléatoires
    };

    // Fonction pour mettre à jour le gradient
    const updateGradient = () => {
      const selectedColors = getRandomColors();
      const gradient = `linear-gradient(-45deg, ${selectedColors.join(', ')})`;
      const banner = document.getElementById('dynamic-banner');
      if (banner) {
        banner.style.backgroundImage = gradient;
      }
    };

    // Animation du gradient
    const startGradientAnimation = () => {
      updateGradient();
      setTimeout(startGradientAnimation, 3000); // Change toutes les 3 secondes
    };

    startGradientAnimation();
  }, []);

  // Ajoutez cette fonction pour gérer la suppression
  const removeFromCart = (itemId) => {
    // Remplacez ceci par votre logique de gestion d'état réelle
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    // Mettez à jour votre état ici
    console.log('Item removed:', itemId);
  };

  return (
    <nav className="w-full bg-white shadow-sm font-krub">
      {/* Barre supérieure avec promotion et timer */}
      <div 
        id="dynamic-banner"
        className="w-full text-white py-2.5 transition-all duration-1000 ease-in-out bg-gradient-to-r"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-16">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <p>Toutes les livraisons sont gratuites pendant 2 semaines. Profitez en !</p>
              <p className="text-gray-200">|</p>
              <p>Peh tu n'as pas aimé?</p>
            </div>
            <div className="flex items-center gap-1">
              <span>Fin du temps:</span>
              <span className="bg-white/10 px-2 py-1 rounded">00</span>
              <span>:</span>
              <span className="bg-white/10 px-2 py-1 rounded">00</span>
              <span>:</span>
              <span className="bg-white/10 px-2 py-1 rounded">00</span>
              <span>:</span>
              <span className="bg-white/10 px-2 py-1 rounded">00</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Barre de contact */}
      <div className="w-full bg-gray-100 py-3 text-sm text-gray-600">
        <div className="max-w-[1400px] mx-auto px-16">
          <p className="text-right">
            Besoin d'aide? Appelez nous:{" "}
            <a href="tel:+224624228855" className="font-medium">(+224) 624 228 855</a>
            {" "}ou{" "}
            <a href="mailto:contact@kambily.com" className="hover:text-cyan-600 font-medium">
              contact@kambily.com
            </a>
          </p>
        </div>
      </div>

      {/* Drawer Mobile */}
      <div className={`fixed inset-y-0 left-0 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50`}>
        <div className="h-full flex flex-col">
          {/* Header avec logo et bouton fermer */}
          <div className="p-4 flex justify-between items-center border-b">
            <Image
              src="/logo.webp"
              alt="Kambily"
              width={120}
              height={40}
              priority
            />
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contenu du drawer */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Menu principal */}
            <div className="mb-8">
              <h3 className="text-gray-400 text-sm font-medium mb-4">MAIN MENU</h3>
              <nav className="space-y-4">
                <Link href="/" className="block text-gray-800 hover:text-[#048B9A]">
                  Accueil
                </Link>
                <div>
                  <button 
                    className="flex items-center justify-between w-full text-gray-800 hover:text-[#048B9A]"
                    onClick={() => setIsDrawerOpen(true)} // Ajoutez un state pour gérer l'ouverture/fermeture
                  >
                    <span>Nos catégories</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <Link href="/boutique" className="block text-gray-800 hover:text-[#048B9A]">
                  Boutique
                </Link>
                <Link href="/contact" className="block text-gray-800 hover:text-[#048B9A]">
                  Contact
                </Link>
                <Link href="/a-propos" className="block text-gray-800 hover:text-[#048B9A]">
                  À propos de nous
                </Link>
              </nav>
            </div>

            {/* Menu catégories */}
            <div className="mb-8">
              <h3 className="text-gray-400 text-sm font-medium mb-4">CATEGORY MENU</h3>
              {/* Ajoutez ici vos catégories */}
            </div>

            {/* Coordonnées */}
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-4">COORDONNÉES</h3>
              <div className="space-y-4">
                <div>
                  <a href="tel:624-22-85-55" className="flex items-center text-gray-800 hover:text-[#048B9A] gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <FaPhone className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="block">624-22-85-55</span>
                  </a>
                  <p className="text-sm text-gray-500 mt-1 ml-[52px]">
                    Vous pouvez appeler à tout moment de 8 h à 20 h.
                  </p>
                </div>
                <div>
                  <a href="mailto:contact@kambily.com" className="flex items-center text-gray-800 hover:text-[#048B9A] gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <FaEnvelope className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="block">contact@kambily.com</span>
                  </a>
                  <p className="text-sm text-gray-500 mt-1 ml-[52px]">
                    L'e-mail que vous enverrez sera répondu dans les plus brefs délais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay pour le drawer */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Navigation principale */}
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto px-16 py-4">
          <div className="flex items-center justify-between">
            {/* Bouton du drawer */}
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="hover:text-cyan-600"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="w-[200px] ml-8">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.webp"
                  alt="Kambily Logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Liens de navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center space-x-12">
                <Link href="/" className="hover:text-cyan-600">Accueil</Link>
                <div className="relative group">
                  <Link href="/categories" className="hover:text-cyan-600 flex items-center">
                    Nos catégories
                    <span className="ml-1">▼</span>
                  </Link>
                  
                  {/* Dropdown menu */}
                  <div className="absolute left-0 mt-2 w-60 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {categories.map((category, index) => (
                      <div key={index} className="relative group/sub">
                        <Link 
                          href={`/categories/${category.name.toLowerCase()}`}
                          className="block px-4 py-2 hover:bg-gray-50 hover:text-cyan-600"
                        >
                          <div className="flex items-center justify-between">
                            <span>{category.name}</span>
                            <span className="text-xs">▶</span>
                          </div>
                        </Link>
                        
                        {/* Sous-catégories */}
                        <div className="absolute left-full top-0 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                          {category.subcategories.map((sub, subIndex) => (
                            <Link 
                              key={subIndex}
                              href={`/categories/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                              className="block px-4 py-2 hover:bg-gray-50 hover:text-cyan-600"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="/boutique" className="hover:text-cyan-600">Boutique</Link>
                <Link href="/contact" className="hover:text-cyan-600">Contact</Link>
                <Link href="/about" className="hover:text-cyan-600">À propos de nous</Link>
              </div>
            </div>

            {/* Icônes droites */}
            <div className="w-[200px] flex items-center justify-end space-x-6">
              <Link 
                href="/boutique"
                className="hover:text-cyan-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
              <Link href="/profile" className="hover:text-cyan-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <div 
                className="relative"
                onMouseEnter={() => setShowCartModal(true)}
                onMouseLeave={() => setShowCartModal(false)}
              >
                <Link href="/panier" className="relative hover:text-cyan-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-cyan-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                </Link>

                {/* Modal du panier */}
                {showCartModal && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border">
                    <div className="p-4">
                      <h3 className="font-semibold mb-4">Mon Panier ({cartItems.length})</h3>
                      
                      {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">Votre panier est vide</p>
                      ) : (
                        <>
                          {/* Liste des produits */}
                          <div className="space-y-3 mb-4">
                            {cartItems.map((item) => (
                              <div key={item.id} className="flex gap-3 items-start">
                                <div className="relative w-16 h-16">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover rounded"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-medium">{item.name}</h4>
                                    <button 
                                      onClick={() => removeFromCart(item.id)}
                                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                      title="Retirer du panier"
                                    >
                                      <FaTrash size={14} />
                                    </button>
                                  </div>
                                  <p className="text-sm text-gray-500">
                                    Quantité: {item.quantity}
                                  </p>
                                  <p className="text-sm font-medium text-[#048B9A]">
                                    {item.price.toLocaleString()} GNF
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Total et boutons */}
                          <div className="border-t pt-3">
                            <div className="flex justify-between mb-4">
                              <span className="font-medium">Total:</span>
                              <span className="font-medium">
                                {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()} GNF
                              </span>
                            </div>
                            <div className="space-y-2">
                              <Link 
                                href="/panier"
                                className="block w-full bg-[#048B9A] text-white text-center py-2 rounded-md hover:bg-[#037483] transition-colors"
                              >
                                Voir le panier
                              </Link>
                              <Link 
                                href="/paiement"
                                className="block w-full bg-gray-100 text-gray-700 text-center py-2 rounded-md hover:bg-gray-200 transition-colors"
                              >
                                Commander
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
