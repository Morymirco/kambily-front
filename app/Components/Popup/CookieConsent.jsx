'use client'
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCookieBite } from 'react-icons/fa';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // const consent = localStorage.getItem('cookieConsent');
    // if (!consent) {
    //   setIsVisible(true);
    // }
    setIsVisible(true);
    
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed bottom-4 right-4 z-50 w-[380px] bg-white rounded-xl shadow-xl overflow-hidden"
        >
          {/* En-tête */}
          <div className="bg-[#048B9A]/5 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#048B9A]/10 rounded-full flex items-center justify-center">
                <FaCookieBite className="w-5 h-5 text-[#048B9A]" />
              </div>
              <h3 className="text-lg font-semibold">
                Cookies 🍪
              </h3>
            </div>
          </div>

          {/* Contenu */}
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4">
              Nous utilisons des cookies pour améliorer votre expérience. 
              <Link href="/privacy" className="text-[#048B9A] hover:underline ml-1">
                En savoir plus
              </Link>
            </p>

            {/* Options de cookies */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="necessary"
                  checked
                  disabled
                  className="rounded text-[#048B9A]"
                />
                <label htmlFor="necessary" className="text-sm">
                  Cookies nécessaires
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="analytics"
                  className="rounded text-[#048B9A]"
                />
                <label htmlFor="analytics" className="text-sm">
                  Cookies analytiques
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="marketing"
                  className="rounded text-[#048B9A]"
                />
                <label htmlFor="marketing" className="text-sm">
                  Cookies marketing
                </label>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-col gap-2">
              <motion.button
                onClick={acceptCookies}
                className="w-full py-2 bg-[#048B9A] text-white rounded-lg hover:bg-[#037483] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Accepter tout
              </motion.button>
              <motion.button
                onClick={declineCookies}
                className="w-full py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Refuser
              </motion.button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors mt-1"
              >
                Personnaliser
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 