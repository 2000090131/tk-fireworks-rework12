import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/about', label: t('navigation.about') },
    { path: '/products', label: t('navigation.products') },
    { path: '/ai-recommender', label: t('navigation.aiRecommender') },
    { path: '/safety', label: t('navigation.safety') },
    { path: '/contact', label: t('navigation.contact') },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-b from-black/90 to-transparent fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold text-yellow-400 hover:text-orange-400 transition-colors"
          >
            <span className="text-3xl">🎆</span>
            <span className="festive-text">{t('common.brandName')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors font-medium ${
                  isActiveLink(item.path)
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/cart"
              className="btn btn-secondary flex items-center space-x-2"
            >
              <span>🛒</span>
              <span>{t('navigation.cart')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                    isActiveLink(item.path)
                      ? 'bg-yellow-400/20 text-yellow-400'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-yellow-400'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/cart"
                className="px-4 py-2 btn btn-secondary flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-2">🛒</span>
                {t('navigation.cart')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;