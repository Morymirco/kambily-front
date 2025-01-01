'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrash, FaMinus, FaPlus, FaTruck, FaShieldAlt, FaCreditCard } from 'react-icons/fa';

const Cart = () => {
  // État initial du panier (à remplacer par votre gestion d'état réelle)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ensemble De Pyjama",
      price: 65000,
      quantity: 1,
      image: "/pyjama.png",
      size: "M",
      color: "Rose"
    },
    // Ajoutez d'autres produits ici
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15000; // Frais de livraison
  const total = subtotal + shipping;

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Mon Panier</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">Votre panier est vide</h2>
          <p className="text-gray-600 mb-8">Découvrez nos produits et commencez vos achats</p>
          <Link 
            href="/boutique"
            className="bg-[#048B9A] text-white px-6 py-3 rounded-md hover:bg-[#037483] transition-colors"
          >
            Continuer mes achats
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Liste des produits */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b last:border-0">
                    {/* Image du produit */}
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Détails du produit */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-4">
                        <p>Taille: {item.size}</p>
                        <p>Couleur: {item.color}</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <FaMinus />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <p className="font-semibold">{(item.price * item.quantity).toLocaleString()} GNF</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <FaTruck className="text-[#048B9A] text-2xl" />
                <div>
                  <h4 className="font-medium">Livraison Rapide</h4>
                  <p className="text-sm text-gray-600">Sous 24-48h</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <FaShieldAlt className="text-[#048B9A] text-2xl" />
                <div>
                  <h4 className="font-medium">Paiement Sécurisé</h4>
                  <p className="text-sm text-gray-600">100% sécurisé</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <FaCreditCard className="text-[#048B9A] text-2xl" />
                <div>
                  <h4 className="font-medium">Moyens de Paiement</h4>
                  <p className="text-sm text-gray-600">Multiples options</p>
                </div>
              </div>
            </div>
          </div>

          {/* Résumé de la commande */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Résumé de la commande</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{subtotal.toLocaleString()} GNF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frais de livraison</span>
                  <span>{shipping.toLocaleString()} GNF</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{total.toLocaleString()} GNF</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#048B9A] text-white py-3 rounded-md hover:bg-[#037483] transition-colors mb-4">
                Procéder au paiement
              </button>

              <Link 
                href="/boutique"
                className="block text-center text-[#048B9A] hover:underline"
              >
                Continuer mes achats
              </Link>
            </div>

            {/* Code promo */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
              <h3 className="font-medium mb-4">Code promo</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Entrez votre code"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                />
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                  Appliquer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 