import Image from 'next/image';
import Link from 'next/link';
import { FaBox } from 'react-icons/fa';

// Composant pour les cartes de produits
const ProductCard = ({ image, title, price, inStock }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="relative h-[200px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm text-gray-800 mb-2">{title}</h3>
        <p className="text-lg font-bold text-gray-900 mb-2">{price}GNF</p>
        {inStock && (
          <div className="flex items-center text-[#048B9A]">
            <FaBox className="w-4 h-4 mr-1" />
            <span className="text-sm">In Stock</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Collection = () => {
  const jewelryProducts = [
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
  ];

  const electronicProducts = [
    {
      id: 1,
      image: "/realite.webp",
      title: "Réalité Virtuelle Casque , Portable 3D Virtuel Réalité Lunettes Pour Films Et Jeux",
      price: "185,000",
      oldPrice: "210,000",
      inStock: true,
      description: "Profitez dès maintenant avant la fin de l'offre"
    },
    {
      id: 2,
      image: "/pochette.webp",
      title: "Coque De Téléphone Portable Figure",
      price: "45,000",
      inStock: true
    },
    {
      id: 3,
      image: "/lumiere.webp",
      title: "1 pièce Lumière d'ambiance pour téléphone clip rond avec miroir",
      price: "40,000",
      inStock: true
    },
    {
      id: 4,
      image: "/lunettes.webp",
      title: "3 Pièces Lunettes De Soleil De Mode",
      price: "85,000",
      oldPrice: "100,000",
      inStock: true,
      description: "Ne manquez pas cette opportunité tant qu'elle dure"
    },
    {
      id: 5,
      image: "/souris.webp",
      title: "Souris sans fil silencieuse à lumière RVB, souris de jeu",
      price: "52,000",
      inStock: true
    },
    {
      id: 6,
      image: "/cheveux.webp",
      title: "Ensemble De 100 Petits Liens Pour Cheveux Minimalistes",
      price: "15,000",
      inStock: true
    },
    {
      id: 7,
      image: "/porte.webp",
      title: "Portefeuille Slimfold À Capacité Supplémentaire",
      price: "45,000",
      inStock: true
    },
    {
      id: 8,
      image: "/casque.webp",
      title: "1 pièce Chapeau De Camionneur Pays À Lettres",
      price: "25,000",
      oldPrice: "45,000",
      inStock: true
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-16 my-8">
      {/* Section Bijouterie avec hauteur réduite */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Produits bijouterie - 50% */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jewelryProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>

        {/* Banner Bijouterie - 50% avec hauteur réduite */}
        <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/chaine.jpg"
              alt="Collection de bijoux"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Contenu de la bannière avec padding ajusté */}
          <div className="relative h-full p-6 flex flex-col justify-between z-10">
            <span className="bg-[#048B9A] text-white px-4 py-1 rounded-full text-sm uppercase inline-block w-fit">
              Bijouterie
            </span>

            <div className="text-white">
              <h2 className="text-2xl font-bold mb-3">
                Éblouissez-vous avec notre collection de bijoux
              </h2>
              <p className="text-gray-200 mb-4">
                Parcourez notre collection pour trouver des bijoux qui parlent de votre style unique.
              </p>
              <Link 
                href="/explorer"
                className="text-white flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                Explorer
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section Électronique */}
      <div className="mt-12">
        {/* Bannière électronique */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden bg-black mb-8">
          <div className="absolute inset-0">
            <Image
              src="/iphone.jpg"
              alt="Électronique"
              fill
              className="object-cover object-right"
            />
          </div>
          <div className="relative h-full p-8 flex flex-col justify-between z-10 max-w-lg">
            <span className="bg-[#048B9A] text-white px-4 py-1 rounded-full text-sm uppercase inline-block w-fit">
              Électronique
            </span>
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Vivez la Révolution High-Tech
              </h2>
              <p className="text-gray-200 mb-6">
                Découvrez notre sélection d'électronique de pointe !
              </p>
              <Link 
                href="/explorer"
                className="text-white flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                Explorer
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Grille de produits électroniques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {electronicProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-[200px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}GNF
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.oldPrice}GNF
                    </span>
                  )}
                </div>
                {product.description && (
                  <p className="text-sm text-gray-500 mb-2">
                    {product.description}
                  </p>
                )}
                {product.inStock && (
                  <div className="flex items-center text-[#048B9A]">
                    <FaBox className="w-4 h-4 mr-1" />
                    <span className="text-sm">In Stock</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
