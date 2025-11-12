import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ConfettiBurst from '@/components/animations/ConfettiBurst';
import LoadingSpinner from '@/components/animations/LoadingSpinner';

const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Our Products - Premium Quality Fireworks | TK Fireworks</title>
        <meta name="description" content="Explore TK Fireworks' complete range of premium quality fireworks including fountains, rockets, sparklers, and more for all celebrations." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              {t('products.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('products.description')}
            </p>
          </div>

          {/* Product Grid Placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gradient-to-b from-orange-900/20 to-purple-900/20 rounded-lg p-6 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Product {item}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Amazing Firework #{item}</h3>
                <p className="text-gray-300 mb-4">Spectacular firework perfect for any celebration. Coming soon!</p>
                <button className="btn btn-primary w-full">
                  {t('products.viewDetails')}
                </button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Let our AI helper assist you!
            </p>
            <button className="btn btn-secondary text-lg px-8 py-4">
              Try AI Fireworks Helper
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;