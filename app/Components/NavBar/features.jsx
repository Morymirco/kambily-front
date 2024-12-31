import React from 'react';
import { FaClock } from 'react-icons/fa';
import { FaTag } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Meilleure Qualité */}
        <div className="flex items-center gap-4">
          <FaClock className="text-[#048B9A] text-5xl flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Meilleure Qualité</h3>
            <p className="text-gray-600">
              Nous offrons des produits de qualité supérieure pour une expérience d'achat en toute confiance.
            </p>
          </div>
        </div>

        {/* Meilleures Offres */}
        <div className="flex items-center gap-4">
          <FaTag className="text-[#048B9A] text-5xl flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Meilleures Offres</h3>
            <p className="text-gray-600">
              Découvrez nos offres imbattables conçues pour offrir le meilleur rapport qualité-prix.
            </p>
          </div>
        </div>

        {/* Paiement Sécurisé */}
        <div className="flex items-center gap-4">
          <FaCreditCard className="text-[#048B9A] text-5xl flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Paiement Sécurisé</h3>
            <p className="text-gray-600">
              Nous nous engageons à vous offrir une expérience d'achat en ligne sûre et fiable.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
