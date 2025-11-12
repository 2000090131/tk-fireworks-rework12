import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { path: '/', label: t('navigation.home') },
    { path: '/about', label: t('navigation.about') },
    { path: '/products', label: t('navigation.products') },
    { path: '/ai-recommender', label: t('navigation.aiRecommender') },
  ];

  const customerService = [
    { path: '/safety', label: t('navigation.safety') },
    { path: '/contact', label: t('navigation.contact') },
    { path: '/cart', label: t('navigation.cart') },
    { path: '/privacy', label: t('footer.privacyPolicy') },
    { path: '/terms', label: t('footer.termsOfService') },
  ];

  const categories = [
    { name: 'Fountains', path: '/products?category=fountains' },
    { name: 'Rockets', path: '/products?category=rockets' },
    { name: 'Sparklers', path: '/products?category=sparklers' },
    { name: 'Chakras', path: '/products?category=chakras' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'f', url: '#' },
    { name: 'Instagram', icon: 'i', url: '#' },
    { name: 'YouTube', icon: '▶', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black border-t border-gray-800">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🎆</span>
              <span className="text-xl font-bold text-yellow-400 festive-text">
                {t('common.brandName')}
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('common.tagline')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-600/40 transition-colors"
                  aria-label={social.name}
                >
                  <span className="font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">
              {t('footer.categories')}
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">
              {t('footer.customerService')}
            </h3>
            <ul className="space-y-2">
              {customerService.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-bold mb-4 text-yellow-400">
              {t('footer.newsletter')}
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe for exclusive offers and new product announcements!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="flex-1 px-4 py-2 bg-black/50 border border-orange-500/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button className="btn btn-primary rounded-l-none">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;