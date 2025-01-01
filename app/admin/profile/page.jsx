'use client'
import { useState } from 'react';
import { FaCamera, FaKey, FaSave } from 'react-icons/fa';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@kambily.com',
    phone: '+224 624 00 00 00',
    role: 'Administrateur',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [activeTab, setActiveTab] = useState('info');
  const [avatar, setAvatar] = useState('/default-avatar.png');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implémenter la sauvegarde du profil
    console.log('Profile updated:', profileData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profil Administrateur</h1>

      {/* Photo de profil */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img 
                src={avatar} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <label className="absolute bottom-0 right-0 bg-[#048B9A] text-white p-2 rounded-full cursor-pointer hover:bg-[#037483] transition-colors">
              <FaCamera className="w-4 h-4" />
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.role}</p>
          </div>
        </div>
      </div>

      {/* Onglets */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'info'
                  ? 'border-b-2 border-[#048B9A] text-[#048B9A]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Informations personnelles
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'security'
                  ? 'border-b-2 border-[#048B9A] text-[#048B9A]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sécurité
            </button>
          </nav>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === 'info' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#048B9A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#048B9A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#048B9A]"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe actuel
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={profileData.currentPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#048B9A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={profileData.newPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#048B9A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={profileData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#048B9A]"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#048B9A] text-white rounded-lg hover:bg-[#037483] transition-colors"
            >
              <FaSave className="w-4 h-4 mr-2" />
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 