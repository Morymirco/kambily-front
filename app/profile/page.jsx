'use client'
import { useState } from 'react';
import { FaUser, FaShoppingBag, FaHeart, FaAddressCard, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Mon Profil', icon: <FaUser /> },
    { id: 'orders', label: 'Mes Commandes', icon: <FaShoppingBag /> },
    { id: 'wishlist', label: 'Liste de Souhaits', icon: <FaHeart /> },
    { id: 'addresses', label: 'Mes Adresses', icon: <FaAddressCard /> },
    { id: 'settings', label: 'Paramètres', icon: <FaCog /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileContent />;
      case 'orders':
        return <OrdersContent />;
      case 'wishlist':
        return <WishlistContent />;
      case 'addresses':
        return <AddressesContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Mon Compte</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#048B9A] text-white'
                    : 'hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50">
              <FaSignOutAlt />
              <span>Déconnexion</span>
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

const ProfileContent = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Informations Personnelles</h2>
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prénom
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#048B9A] text-white px-6 py-2 rounded-md hover:bg-[#037483] transition-colors"
      >
        Sauvegarder les modifications
      </button>
    </form>
  </div>
);

const OrdersContent = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Mes Commandes</h2>
    <div className="space-y-4">
      {[1, 2, 3].map((order) => (
        <div key={order} className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-medium">Commande #{order}0234</p>
              <p className="text-sm text-gray-500">Passée le 12 Mars 2024</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Livrée
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">3 articles</p>
            <p className="font-medium">150,000 GNF</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const WishlistContent = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Ma Liste de Souhaits</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="border rounded-lg p-4">
          <div className="relative h-40 mb-4">
            <img
              src={`/product-${item}.jpg`}
              alt="Product"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <h3 className="font-medium mb-2">Nom du produit</h3>
          <p className="text-[#048B9A] font-medium">75,000 GNF</p>
        </div>
      ))}
    </div>
  </div>
);

const AddressesContent = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Mes Adresses</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {[1, 2].map((address) => (
        <div key={address} className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-medium">Adresse {address}</h3>
            <div className="space-x-2">
              <button className="text-[#048B9A] hover:underline">Modifier</button>
              <button className="text-red-500 hover:underline">Supprimer</button>
            </div>
          </div>
          <p className="text-gray-600">123 Rue Example</p>
          <p className="text-gray-600">Conakry, Guinée</p>
          <p className="text-gray-600">+224 624 XX XX XX</p>
        </div>
      ))}
      <button className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center text-gray-500 hover:border-[#048B9A] hover:text-[#048B9A] transition-colors">
        + Ajouter une nouvelle adresse
      </button>
    </div>
  </div>
);

const SettingsContent = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Paramètres</h2>
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Changer le mot de passe</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe actuel
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmer le nouveau mot de passe
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#048B9A] text-white px-6 py-2 rounded-md hover:bg-[#037483] transition-colors"
          >
            Mettre à jour le mot de passe
          </button>
        </form>
      </div>

      <div>
        <h3 className="font-medium mb-4">Préférences de notification</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-[#048B9A]" />
            <span className="ml-2">Recevoir des notifications par email</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-[#048B9A]" />
            <span className="ml-2">Recevoir des notifications par SMS</span>
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default Profile; 