'use client'
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Contactez-nous</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#048B9A] text-xl" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-gray-600">+224 621 XX XX XX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#048B9A] text-xl" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@votresite.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#048B9A] text-xl" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-gray-600">Conakry, Guinée</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-6">Heures d'ouverture</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Lundi - Vendredi: 9h - 18h</p>
              <p className="text-gray-600">Samedi: 9h - 15h</p>
              <p className="text-gray-600">Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                required
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#048B9A] focus:border-[#048B9A]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#048B9A] text-white py-2 px-4 rounded-md hover:bg-[#037483] transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 