'use client'
import { useState } from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaPinterestP, 
  FaLinkedinIn,
  FaPhone,  // Ajout de l'icône téléphone
  FaEnvelope // Ajout de l'icône email
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Colonne de gauche */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Comment pouvons-nous vous aider ?</h1>
          <p className="text-gray-600 mb-8">
            Bienvenue chez Kambily, votre partenaire dédié à votre satisfaction. Notre équipe est là pour répondre à toutes vos questions et vous offrir un service exceptionnel. Contactez-nous pour toute assistance, nous sommes là pour vous aider.
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h2 className="text-gray-500 mb-1">Horaires:</h2>
              <p>Monday - Friday : 9h - 17h</p>
              <p>Weekend : 10h-15h</p>
            </div>

            <div>
              <h2 className="text-gray-500 mb-1">Bureau ouvert</h2>
              <p>Yattaya, C/Ratoma</p>
            </div>

            {/* Numéro avec icône */}
            <div>
              <h2 className="text-gray-500 mb-1">Numero de telephone</h2>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaPhone className="w-4 h-4 text-gray-600" />
                </div>
                <p>+224000000</p>
              </div>
            </div>

            {/* Email avec icône */}
            <div>
              <h2 className="text-gray-500 mb-1">Adresse E-mail</h2>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4 text-gray-600" />
                </div>
                <p>contact@kambily.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-gray-500 mb-4">Suivez-nous sur les réseaux sociaux</h2>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#3b5998] text-white rounded-full flex items-center justify-center hover:opacity-90">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:opacity-90">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:opacity-90">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-[#E60023] text-white rounded-full flex items-center justify-center hover:opacity-90">
                <FaPinterestP />
              </a>
              <a href="#" className="w-10 h-10 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:opacity-90">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Colonne de droite */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
          <p className="text-gray-600 mb-8">
            Chez Kambily, nous sommes là pour vous aider. Contactez-nous pour toute assistance et soyez guidé dans votre démarche de communication avec notre équipe dédiée.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre adresse mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A]"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
                Sujet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#048B9A] text-white px-8 py-3 rounded-lg hover:bg-[#037483] transition-colors"
            >
              Soumettre
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 