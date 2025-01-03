'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaGlobe, FaMoon, FaPhone, FaSun, FaTrash } from 'react-icons/fa';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  const languages = [
    { code: 'fr', name: 'Français', flag: '/flags/fr.png' },
    { code: 'en', name: 'English', flag: '/flags/en.png' },
    { code: 'ar', name: 'العربية', flag: '/flags/arabe.png' }
  ];

  const [currentLang, setCurrentLang] = useState(languages[0]);

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

  const pathname = usePathname();

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

              {/* Sélecteur de langue */}
              <div className="relative ml-6">
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="flex items-center gap-2  hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={currentLang.flag}
                    alt={currentLang.name}
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <FaGlobe className="w-4 h-4" />
                </button>

                {/* Dropdown des langues */}
                {showLanguages && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50 py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang);
                          setShowLanguages(false);
                        }}
                        className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          width={20}
                          height={20}
                          className="rounded-sm"
                        />
                        <span className="text-gray-700">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Switch Mode Sombre/Clair */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="ml-4 text-white hover:opacity-80 transition-opacity"
                aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
              >
                {isDarkMode ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>
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
                    <div className="flex items-center gap-2">
                      Nos catégories
                      <svg 
                        className="w-4 h-4 transition-transform duration-200" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
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
                  <Link href="/boutique" className="hover:text-cyan-600 flex items-center">
                  <div className="flex items-center gap-2">
  Nos catégories
  <svg 
    className="w-4 h-4 transition-transform duration-200" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 9l-7 7-7-7" />
  </svg>
</div>
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
                            <svg 
    className="w-4 h-4 transition-transform duration-200" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 9l-7 7-7-7" />
  </svg>
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
              {/* Icône Recherche */}
              <Link 
                href="/boutique"
                className="hover:text-cyan-600 transition-colors"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Icône Profil */}
              <div className="relative group">
                <Link 
                  href="/profile" 
                  className={`hover:text-cyan-600 flex flex-col items-center ${
                    pathname === '/profile' ? 'text-[#048B9A]' : ''
                  }`}
                >
                  {pathname === '/profile' && isLoggedIn ? (
                    <>
                      <span className="absolute -top-5 whitespace-nowrap text-xs font-medium">
                        Hello, Kambily
                      </span>
                      <div className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center overflow-hidden">
                        <Image
                          src="/team/mory.jpg"
                          alt="Profile"
                          width={28}
                          height={28}
                          className="object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center">
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  )}
                </Link>
              </div>

              {/* Icône Panier */}
              <div 
                className="relative"
                onMouseEnter={() => setShowCartModal(true)}
                onMouseLeave={() => setShowCartModal(false)}
              >
                <Link href="/panier" className="relative hover:text-cyan-600">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path 
                      d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-cyan-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                </Link>

                {/* Modal du panier */}
                {showCartModal && (
                  <div 
                    className="absolute right-0 top-full mt-2 w-[400px] bg-white rounded-lg shadow-xl z-50 border border-gray-100"
                    onMouseEnter={() => setShowCartModal(true)}
                    onMouseLeave={() => setShowCartModal(false)}
                  >
                    {/* En-tête */}
                    <div className="p-4 border-b">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Mon Panier</h3>
                        <span className="text-sm text-gray-500">({cartItems.length} articles)</span>
                      </div>
                    </div>

                    {/* Liste des produits */}
                    <div className="max-h-[300px] overflow-y-auto p-4 space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 items-start group">
                          {/* Image */}
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>

                          {/* Détails */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium truncate group-hover:text-[#048B9A] transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                            <p className="text-sm font-medium text-[#048B9A]">
                              {item.price.toLocaleString()} GNF
                            </p>
                          </div>

                          {/* Bouton supprimer */}
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Barre de progression pour la livraison gratuite */}
                    <div className="mt-4 px-2">
                      {(() => {
                        const minForFreeShipping = 100000; // Montant minimum pour la livraison gratuite
                        const currentTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                        const remaining = Math.max(0, minForFreeShipping - currentTotal);
                        const progress = Math.min(100, (currentTotal / minForFreeShipping) * 100);

                        return (
                          <div className="space-y-2">
                            {remaining > 0 ? (
                              <p className="text-xs text-gray-600 text-center">
                                Ajoutez <span className="text-[#048B9A] font-medium">
                                  {remaining.toLocaleString()} GNF
                                </span> pour bénéficier de la livraison gratuite !
                              </p>
                            ) : (
                              <p className="text-xs text-green-600 font-medium text-center">
                                🎉 Félicitations ! Vous bénéficiez de la livraison gratuite
                              </p>
                            )}

                            {/* Barre de progression */}
                            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="absolute left-0 top-0 h-full bg-[#048B9A] transition-all duration-500 ease-out"
                                style={{ 
                                  width: `${progress}%`,
                                  background: progress === 100 
                                    ? 'linear-gradient(90deg, #048B9A, #04B9A0)' 
                                    : '#048B9A' 
                                }}
                              />
                            </div>

                            {/* Marqueurs */}
                            <div className="flex justify-between text-[10px] text-gray-400">
                              <span>0 GNF</span>
                              <span>{minForFreeShipping.toLocaleString()} GNF</span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Boutons d'action */}
                    <div className="space-y-2">
                      <Link 
                        href="/panier"
                        className="block w-full bg-[#048B9A] text-white text-center py-2.5 rounded-lg hover:bg-[#037483] transition-colors"
                      >
                        Voir le panier
                      </Link>
                      <Link 
                        href="/paiement"
                        className="block w-full bg-gray-100 text-gray-700 text-center py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Commander
                      </Link>
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
