import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-[1400px] mx-auto px-16 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Trouvez-Cliquez-Achetez</h3>
            <p className="text-gray-400 mb-4">
              Nous sommes bien plus qu'une simple plateforme e-commerce. Nous sommes une équipe passionnée, dédiée à offrir la meilleure expérience d'achat possible à nos clients.
            </p>
            <Link href="/about" className="text-[#048B9A] hover:text-[#048B9A]/80">
              À propos – Kambily
            </Link>
          </div>

          {/* Colonne 2 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Besoin d'aide?</h3>
            <div className="text-gray-400">
              <p className="text-xl font-bold text-white mb-4">(+224) 624 00 00 00</p>
              <p className="mb-2">Lundi – Vendredi: 9:00-20:00</p>
              <p className="mb-4">Samedi: 10:00 – 15:00</p>
              <a href="mailto:contact@kambily.com" className="text-[#048B9A] hover:text-[#048B9A]/80">
                contact@kambily.com
              </a>
            </div>
          </div>

          {/* Colonne 3 - Service client */}
          <div>
            <h3 className="text-xl font-bold mb-6">Service client</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/aide" className="hover:text-white">Aide</Link>
              </li>
              <li>
                <Link href="/compte" className="hover:text-white">Mon compte</Link>
              </li>
              <li>
                <Link href="/commandes" className="hover:text-white">Suivre ma commande</Link>
              </li>
              <li>
                <Link href="/favoris" className="hover:text-white">Mes favoris</Link>
              </li>
              <li>
                <Link href="/retour" className="hover:text-white">Politique de retour</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Slogan */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Votre boutique en ligne préférée.
            </h3>
          </div>
        </div>

        {/* Bannière promotionnelle */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-gray-700 text-center">
          <div className="py-4 px-6 border-r border-gray-700">
            Profitez de tous nos produits en promo maintenant
          </div>
          <div className="py-4 px-6">
            Livraison gratuite pour toute commande de plus de 350.000GNF
          </div>
        </div>

        {/* Pied de page */}
        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Liens légaux */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
              <Link href="/conditions" className="hover:text-white">
                Termes et conditions de vente
              </Link>
              <Link href="/retour" className="hover:text-white">
                Politique de retour
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Politique de cookies (Guinée)
              </Link>
            </div>

            {/* Méthodes de paiement */}
            <div className="flex gap-3">
              <Image src="/images/payments/om.webp" alt="Orange Money" width={40} height={24} />
              <Image src="/images/payments/momo.webp" alt="MTN" width={40} height={24} />
              <Image src="/images/payments/paycard.webp" alt="Apple Pay" width={40} height={24} />
              <Image src="/images/payments/paypal.webp" alt="PayPal" width={40} height={24} />
              <Image src="/images/payments/visa.webp" alt="Visa" width={40} height={24} />
              <Image src="/images/payments/master.webp" alt="Mastercard" width={40} height={24} />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm mt-8">
            Copyright 2024 © Kambily Sarl. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
