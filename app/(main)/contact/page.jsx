'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhone,
    FaPinterestP,
    FaTwitter
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  return (
    <motion.div 
      className="max-w-[1400px] mx-auto px-4 md:px-16 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Colonne de gauche */}
        <motion.div variants={containerVariants}>
          <motion.h1 
            className="text-3xl font-bold mb-6"
            variants={itemVariants}
          >
            Comment pouvons-nous vous aider ?
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 mb-8"
            variants={itemVariants}
          >
            Bienvenue chez Kambily, votre partenaire dédié à votre satisfaction. Notre équipe est là pour répondre à toutes vos questions et vous offrir un service exceptionnel. Contactez-nous pour toute assistance, nous sommes là pour vous aider.
          </motion.p>

          <motion.div 
            className="space-y-6 mb-8"
            variants={containerVariants}
          >
            {/* Horaires */}
            <motion.div variants={itemVariants}>
              <h2 className="text-gray-500 mb-1">Horaires:</h2>
              <p>Monday - Friday : 9h - 17h</p>
              <p>Weekend : 10h-15h</p>
            </motion.div>

            {/* Bureau */}
            <motion.div variants={itemVariants}>
              <h2 className="text-gray-500 mb-1">Bureau ouvert</h2>
              <p>Yattaya, C/Ratoma</p>
            </motion.div>

            {/* Téléphone */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-gray-500 mb-1">Numero de telephone</h2>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 15 }}
                >
                  <FaPhone className="w-4 h-4 text-gray-600" />
                </motion.div>
                <p>+224000000</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-gray-500 mb-1">Adresse E-mail</h2>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 15 }}
                >
                  <FaEnvelope className="w-4 h-4 text-gray-600" />
                </motion.div>
                <p>contact@kambily.com</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div variants={containerVariants}>
            <motion.h2 
              className="text-gray-500 mb-4"
              variants={itemVariants}
            >
              Suivez-nous sur les réseaux sociaux
            </motion.h2>
            <motion.div 
              className="flex gap-4"
              variants={containerVariants}
            >
              {[
                { Icon: FaFacebookF, bg: '#3b5998' },
                { Icon: FaInstagram, bg: 'gray-900' },
                { Icon: FaTwitter, bg: '#1DA1F2' },
                { Icon: FaPinterestP, bg: '#E60023' },
                { Icon: FaLinkedinIn, bg: '#0077B5' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 bg-${social.bg} text-white rounded-full flex items-center justify-center hover:opacity-90`}
                  variants={socialVariants}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Colonne de droite - Formulaire */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-3xl font-bold mb-6"
            variants={itemVariants}
          >
            Contactez-nous
          </motion.h2>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
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
            </motion.div>

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

            <motion.button
              type="submit"
              className="bg-[#048B9A] text-white px-8 py-3 rounded-lg hover:bg-[#037483] transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Soumettre
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 