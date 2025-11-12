import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ConfettiBurst from '@/components/animations/ConfettiBurst';
import LoadingSpinner from '@/components/animations/LoadingSpinner';

const Products: React.FC = () => {
  const { t } = useTranslation();

  const products = [
    { id: 1, emoji: '🎆', name: 'Super Sky Rocket', color: 'Red', price: '₹299', fun: 'Goes super high! 🚀' },
    { id: 2, emoji: '🎇', name: 'Magic Fountain', color: 'Blue', price: '₹199', fun: 'Makes amazing colors! 🌈' },
    { id: 3, emoji: '✨', name: 'Sparkle Stars', color: 'Gold', price: '₹149', fun: 'Super sparkly! ✨' },
    { id: 4, emoji: '🌟', name: 'Rainbow Chakra', color: 'Multi', price: '₹249', fun: 'Spins like crazy! 🎪' },
    { id: 5, emoji: '💥', name: 'Boom Boom', color: 'Orange', price: '₹399', fun: 'Makes big booms! 💣' },
    { id: 6, emoji: '🎆', name: 'Diwali Special', color: 'Green', price: '₹499', fun: 'Best for Diwali! 🪔' },
  ];

  return (
    <>
      <Helmet>
        <title>🎆 Amazing Fireworks for Kids | TK Fireworks 🎇</title>
        <meta name="description" content="🎉 Check out our super fun fireworks! Perfect for kids and celebrations. Ask your parents to help! 🎆" />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container">
          <div className="text-center mb-12">
            <ConfettiBurst>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 rainbow-text">
                🎆 {t('products.title')} 🎇
              </h1>
            </ConfettiBurst>

            <div className="text-3xl mb-4 animate-bounce">
              🎉 🎊 🎈 🎁 🪄 🌟 💫
            </div>

            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              {t('products.description')}<br />
              <span className="text-yellow-400 font-bold">Ask your parents to help you choose! 🙏</span>
            </p>
          </div>

          {/* Fun Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="fun-card p-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl wiggle">🔍</span>
                <input
                  type="text"
                  placeholder="Search for amazing fireworks! 🎆"
                  className="flex-1 px-4 py-3 bg-black/50 border-2 border-yellow-400/50 rounded-xl text-white placeholder-gray-400 text-lg focus:outline-none focus:border-yellow-400"
                />
                <button className="btn btn-fun px-6 py-3">
                  🚀 Search
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <ConfettiBurst key={product.id}>
                <div className="fun-card group hover:scale-105 transition-all duration-300 p-6">
                  {/* Product Emoji */}
                  <div className="text-8xl mb-4 text-center wiggle group-hover:animate-bounce">
                    {product.emoji}
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-bold mb-2 text-yellow-400 text-center">
                    {product.name}
                  </h3>

                  <div className="text-lg text-gray-300 text-center mb-2">
                    Color: <span className="text-white font-bold">{product.color}</span>
                  </div>

                  <div className="text-xl text-green-400 font-bold text-center mb-3">
                    {product.price}
                  </div>

                  <div className="text-lg text-purple-400 text-center mb-4 font-fun">
                    {product.fun}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="btn btn-primary w-full text-lg">
                      🎬 Watch Video 📺
                    </button>
                    <button className="btn btn-secondary w-full text-lg">
                      📝 Ask Parents 👨‍👩‍👧‍👦
                    </button>
                  </div>
                </div>
              </ConfettiBurst>
            ))}
          </div>

          {/* Fun Message for Kids */}
          <div className="text-center mb-12">
            <ConfettiBurst>
              <div className="fun-card p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 rainbow-text">
                  🌟 Hey Kids! Remember These Rules! 🌟
                </h2>

                <div className="grid md:grid-cols-2 gap-6 text-left text-lg">
                  <div className="space-y-3">
                    <p>✅ Always ask your parents first 👨‍👩‍👧‍👦</p>
                    <p>✅ Have adult help when using fireworks 🛡️</p>
                    <p>✅ Use fireworks outside only 🏞️</p>
                  </div>
                  <div className="space-y-3">
                    <p>✅ Keep water nearby 💧</p>
                    <p>✅ Stand back after lighting 🏃</p>
                    <p>✅ Have fun and stay safe! 🎉</p>
                  </div>
                </div>
              </div>
            </ConfettiBurst>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <ConfettiBurst>
              <button className="btn btn-fun text-2xl px-12 py-6">
                🤖 Try AI Fireworks Helper! 🎮
              </button>
            </ConfettiBurst>

            <div className="mt-8 text-2xl flex justify-center space-x-4">
              <span className="wiggle">🎆</span>
              <span className="wiggle">🎇</span>
              <span className="wiggle">✨</span>
              <span className="wiggle">🌟</span>
              <span className="wiggle">💫</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;