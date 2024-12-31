import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBox } from 'react-icons/fa';

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
        <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">{title}</h3>
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

const Tendance = () => {
  const trendingProducts = [
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
    <div className="max-w-[1400px] mx-auto px-16 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Tendance */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gray-100">
          {/* Badge Vêtements */}
          <div className="absolute top-8 left-8 z-10">
            <span className="bg-[#048B9A] text-white px-4 py-1 rounded-full text-sm uppercase">
              Vêtements
            </span>
          </div>

          {/* Texte */}
          <div className="absolute top-24 left-8 z-10 max-w-md">
            <h2 className="text-4xl font-bold text-white mb-4">
              Des Tendances qui Captivent
            </h2>
            <p className="text-gray-200 mb-6">
              Explorez notre gamme de vêtements inspirés des dernières tendances de la mode mondiale.
            </p>
            <Link 
              href="/explorer" 
              className="text-[#048B9A] flex items-center gap-2 hover:gap-3 transition-all duration-300"
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

          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src="/couple_denim.webp"
              alt="Couple en denim"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        </div>

        {/* Grille de produits modifiée */}
        <div className="grid grid-rows-2 gap-4">
          {/* Première ligne : 3 produits */}
          <div className="grid grid-cols-3 gap-4">
            {trendingProducts.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                inStock={product.inStock}
              />
            ))}
          </div>
          
          {/* Deuxième ligne : 2 produits centrés */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-start-1 col-end-3 grid grid-cols-2 gap-4">
              {trendingProducts.slice(3, 5).map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  inStock={product.inStock}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tendance;
