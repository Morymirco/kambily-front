'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaCreditCard, FaMobileAlt, FaMoneyBill, FaLock } from 'react-icons/fa';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [billingAddress, setBillingAddress] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Guinée'
  });

  // Résumé de la commande (à connecter avec votre panier)
  const orderSummary = {
    subtotal: 65000,
    shipping: 15000,
    total: 80000,
    items: [
      {
        name: "Ensemble De Pyjama",
        quantity: 1,
        price: 65000
      }
    ]
  };

  const handleBillingChange = (e) => {
    setBillingAddress({
      ...billingAddress,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique de traitement du paiement
    console.log('Payment processing...', { paymentMethod, billingAddress });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Paiement</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Formulaire de paiement */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-6">Méthode de paiement</h2>
            
            <div className="space-y-4 mb-6">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-[#048B9A] transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#048B9A]"
                />
                <div className="ml-4 flex items-center gap-3">
                  <FaCreditCard className="text-[#048B9A] text-xl" />
                  <span>Carte bancaire</span>
                </div>
              </label>

              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-[#048B9A] transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mobile"
                  checked={paymentMethod === 'mobile'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#048B9A]"
                />
                <div className="ml-4 flex items-center gap-3">
                  <FaMobileAlt className="text-[#048B9A] text-xl" />
                  <span>Mobile Money</span>
                </div>
              </label>

              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-[#048B9A] transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#048B9A]"
                />
                <div className="ml-4 flex items-center gap-3">
                  <FaMoneyBill className="text-[#048B9A] text-xl" />
                  <span>Paiement à la livraison</span>
                </div>
              </label>
            </div>

            {/* Formulaire spécifique selon la méthode de paiement */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de carte
                  </label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date d'expiration
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'mobile' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="+224 6XX XX XX XX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Adresse de facturation */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Adresse de facturation</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={billingAddress.fullName}
                    onChange={handleBillingChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={billingAddress.email}
                    onChange={handleBillingChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={billingAddress.phone}
                    onChange={handleBillingChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={billingAddress.city}
                    onChange={handleBillingChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse complète
                </label>
                <textarea
                  name="address"
                  value={billingAddress.address}
                  onChange={handleBillingChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                  required
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Résumé de la commande */}
        <div className="w-full lg:w-96">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-6">Résumé de la commande</h2>
            
            <div className="space-y-4 mb-6">
              {orderSummary.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>{item.price.toLocaleString()} GNF</span>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{orderSummary.subtotal.toLocaleString()} GNF</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Frais de livraison</span>
                  <span>{orderSummary.shipping.toLocaleString()} GNF</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>{orderSummary.total.toLocaleString()} GNF</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#048B9A] text-white py-3 rounded-md hover:bg-[#037483] transition-colors flex items-center justify-center gap-2"
            >
              <FaLock />
              <span>Payer {orderSummary.total.toLocaleString()} GNF</span>
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Vos informations de paiement sont sécurisées
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment; 