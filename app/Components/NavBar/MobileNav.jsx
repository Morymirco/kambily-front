'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const MobileNav = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navItems = [
    {
      label: 'Accueil',
      path: '/',
      icon: '/icons/home.svg'
    },
    {
      label: 'Boutique',
      path: '/boutique',
      icon: '/icons/shop.svg'
    },
    {
      label: 'Panier',
      path: '/panier',
      icon: '/icons/cart.svg'
    },
    {
      label: 'Favoris',
      path: '/favoris',
      icon: '/icons/heart.svg'
    },
    {
      label: 'Profil',
      path: '/profile',
      icon: isLoggedIn ? '/profile-pic.jpg' : '/icons/profile.svg'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-[9999]">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className="relative flex flex-col items-center justify-center w-16"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  color: isActive ? '#048B9A' : '#6B7280'
                }}
                className="relative"
              >
                {item.icon}
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute -inset-1 bg-[#048B9A]/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
              <span className={`text-xs mt-1 ${
                isActive ? 'text-[#048B9A]' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav; 