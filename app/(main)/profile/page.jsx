'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaShoppingBag, FaHeart, FaAddressCard, FaCog, FaSignOutAlt, FaCamera } from 'react-icons/fa';

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
    
    {/* Photo de profil */}
    <div className="mb-8 flex items-center gap-6">
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
          <Image
            src="/team/mory.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <button className="absolute bottom-0 right-0 bg-[#048B9A] text-white p-2 rounded-full hover:bg-[#037483] transition-colors">
          <FaCamera size={14} />
        </button>
      </div>
      <div>
        <h3 className="font-medium text-lg">Mory koulibaly</h3>
        <p className="text-gray-500">Membre depuis Mars 2024</p>
      </div>
    </div>

    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prénom
          </label>
          <input
            type="text"
            defaultValue="Mory"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A] bg-gray-50"
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

      <div className="border-t pt-6">
        <button
          type="submit"
          className="bg-[#048B9A] text-white px-8 py-3 rounded-lg hover:bg-[#037483] transition-colors"
        >
          Sauvegarder les modifications
        </button>
      </div>
    </form>
  </div>
);

const OrdersContent = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Mes Commandes</h2>
    <div className="space-y-4">
      {[1, 2, 3].map((order) => (
        <div key={order} className="border rounded-lg p-6 hover:border-[#048B9A] transition-colors">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-medium text-lg">Commande #{order}0234</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Livrée
                </span>
              </div>
              <p className="text-gray-500">Passée le 12 Mars 2024</p>
            </div>
            <button className="text-[#048B9A] hover:underline">
              Voir les détails
            </button>
          </div>

          <div className="flex gap-4 mb-4">
            {[1, 2].map((item) => (
              <div key={item} className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src={`/product-${item}.jpg`}
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
              +1
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Total:</span>
              <span className="font-medium text-lg">150,000 GNF</span>
            </div>
            <button className="px-4 py-2 border border-[#048B9A] text-[#048B9A] rounded-lg hover:bg-[#048B9A] hover:text-white transition-colors">
              Suivre la livraison
            </button>
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
  <div className="space-y-8">
    {/* Sécurité */}
    <div className="p-6 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-6">Sécurité</h3>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mot de passe actuel
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A] bg-white"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A] bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A] bg-white"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#048B9A] text-white px-6 py-2.5 rounded-lg hover:bg-[#037483] transition-colors"
        >
          Mettre à jour le mot de passe
        </button>
      </form>
    </div>

    {/* Notifications */}
    <div className="p-6 border rounded-lg">
      <h3 className="text-lg font-semibold mb-6">Préférences de notification</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium mb-1">Notifications par email</h4>
            <p className="text-sm text-gray-500">Recevoir des mises à jour sur vos commandes</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#048B9A]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium mb-1">Notifications SMS</h4>
            <p className="text-sm text-gray-500">Recevoir des alertes de livraison par SMS</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#048B9A]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="font-medium mb-1">Offres promotionnelles</h4>
            <p className="text-sm text-gray-500">Recevoir des offres spéciales et réductions</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#048B9A]"></div>
          </label>
        </div>
      </div>
    </div>

    {/* Méthodes de paiement */}
    <div className="p-6 border rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Méthodes de paiement</h3>
        <button className="text-[#048B9A] hover:underline">+ Ajouter</button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <Image
              src="/images/payments/master.webp"
              alt="Mastercard"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <h4 className="font-medium">Mastercard terminant par 4242</h4>
              <p className="text-sm text-gray-500">Expire le 12/25</p>
            </div>
          </div>
          <button className="text-red-500 hover:underline">Supprimer</button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <Image
              src="/images/payments/om.webp"
              alt="Orange Money"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <h4 className="font-medium">Orange Money</h4>
              <p className="text-sm text-gray-500">+224 621 XX XX XX</p>
            </div>
          </div>
          <button className="text-red-500 hover:underline">Supprimer</button>
        </div>
      </div>
    </div>

    {/* Suppression du compte */}
    <div className="p-6 border border-red-200 rounded-lg bg-red-50">
      <h3 className="text-lg font-semibold text-red-600 mb-2">Supprimer le compte</h3>
      <p className="text-sm text-red-600 mb-4">
        Attention : La suppression de votre compte est irréversible. Toutes vos données seront définitivement effacées.
      </p>
      <button className="px-6 py-2.5 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
        Supprimer mon compte
      </button>
    </div>
  </div>
);

export default Profile; 