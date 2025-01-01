'use client'
import { motion } from 'framer-motion';
import { FaCheckCircle, FaBox, FaTruck, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Confirmation = () => {
  const steps = [
    {
      icon: FaEnvelope,
      title: "Confirmation envoyée",
      description: "Un email de confirmation a été envoyé à votre adresse"
    },
    {
      icon: FaBox,
      title: "Préparation de commande",
      description: "Votre commande est en cours de préparation"
    },
    {
      icon: FaTruck,
      title: "Livraison",
      description: "Livraison prévue sous 3-5 jours ouvrés"
    }
  ];

  return (
    <motion.div 
      className="max-w-[1400px] mx-auto px-4 md:px-16 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
          <FaCheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Commande confirmée !</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Merci pour votre commande. Votre numéro de commande est #123456
        </p>
      </motion.div>

      {/* Étapes de suivi */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <div className="inline-block p-3 bg-[#048B9A]/10 rounded-full mb-4">
                <step.icon className="w-6 h-6 text-[#048B9A]" />
              </div>
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Résumé de la commande */}
      <motion.div 
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-xl font-semibold mb-4">Détails de la commande</h2>
        <div className="space-y-4">
          <div className="flex justify-between pb-4 border-b">
            <span className="text-gray-600">Total</span>
            <span className="font-medium">80,000 GNF</span>
          </div>
          <div className="flex justify-between pb-4 border-b">
            <span className="text-gray-600">Mode de livraison</span>
            <span className="font-medium">Standard</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Adresse de livraison</span>
            <span className="font-medium text-right">123 Rue Principale<br />Conakry, Guinée</span>
          </div>
        </div>
      </motion.div>

      {/* Boutons d'action */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link href="/boutique">
          <motion.button
            className="px-6 py-3 bg-[#048B9A] text-white rounded-lg hover:bg-[#037483] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continuer les achats
          </motion.button>
        </Link>
        <Link href="/profile">
          <motion.button
            className="px-6 py-3 border-2 border-[#048B9A] text-[#048B9A] rounded-lg hover:bg-[#048B9A] hover:text-white transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Voir mes commandes
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Confirmation; 