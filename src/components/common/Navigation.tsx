import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '🏠 Home', emoji: '🏠' },
    { path: '/about', label: '📖 About', emoji: '📖' },
    { path: '/products', label: '🎆 Products', emoji: '🎆' },
    { path: '/ai-recommender', label: '🤖 AI Helper', emoji: '🤖' },
    { path: '/safety', label: '🛡️ Safety', emoji: '🛡️' },
    { path: '/contact', label: '📞 Contact', emoji: '📞' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-b from-black/90 via-purple-900/20 to-transparent fixed w-full top-0 z-50 backdrop-blur-sm fun-border">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 text-2xl md:text-3xl font-bold rainbow-text hover:scale-110 transition-transform wiggle"
          >
            <span className="text-4xl animate-bounce">🎆</span>
            <span className="festive-text">🎉 TK Fireworks 🎊</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`fun-card px-3 py-2 rounded-xl transition-all font-bold text-sm hover:scale-110 wiggle ${
                  isActiveLink(item.path)
                    ? 'bg-yellow-400/30 text-yellow-400 rainbow-border'
                    : 'text-gray-300 hover:bg-purple-600/30 hover:text-yellow-400'
                }`}
              >
                <span className="mr-2">{item.emoji}</span>
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Cart Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/cart"
              className="btn btn-fun flex items-center space-x-2 px-4 py-2"
            >
              <span className="text-xl wiggle">🛒</span>
              <span className="font-bold">Cart</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-yellow-400 hover:scale-110 transition-transform wiggle p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '❌' : '🍔'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-purple-500/30 bg-black/80 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`fun-card px-4 py-3 rounded-xl transition-all font-bold text-lg hover:scale-105 ${
                    isActiveLink(item.path)
                      ? 'bg-yellow-400/30 text-yellow-400 rainbow-border'
                      : 'text-gray-300 hover:bg-purple-600/30 hover:text-yellow-400'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-3 text-2xl wiggle">{item.emoji}</span>
                  {item.label}
                </Link>
              ))}
              <Link
                to="/cart"
                className="btn btn-fun flex items-center justify-center px-4 py-3 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-3 text-2xl wiggle">🛒</span>
                Shopping Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;