import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import FireworksBackground from '@/components/animations/FireworksBackground';
import ConfettiBurst from '@/components/animations/ConfettiBurst';
import SoundToggle from '@/components/common/SoundToggle';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>🎆 TK Fireworks - Fun Fireworks for Kids! 🎇</title>
        <meta name="description" content="🎉 TK Fireworks - India's most fun fireworks brand for kids! Amazing colors, safe fireworks, and AI helper. Click here for fun! 🎆" />
      </Helmet>

      <div className="min-h-screen relative">
        <FireworksBackground />
        <SoundToggle />

        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-purple-900/30 to-black text-white relative">
          <div className="container text-center fade-in relative z-10">
            {/* Fun Emoji Header */}
            <div className="mb-8 text-6xl md:text-8xl animate-bounce">
              🎆🎇✨🌟💫
            </div>

            <ConfettiBurst>
              <h1 className="mb-6 rainbow-text text-5xl md:text-7xl festive-text wiggle">
                🎉 {t('home.heroTitle')} 🎊
              </h1>
            </ConfettiBurst>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400 animate-pulse">
              🤖 {t('home.heroSubtitle')} 🎆
            </h2>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              ✨ {t('home.heroDescription')} 🌈
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ConfettiBurst>
                <button className="btn btn-primary text-lg px-8 py-6">
                  🎬 {t('common.watchVideos')} 🎥
                </button>
              </ConfettiBurst>

              <ConfettiBurst>
                <button className="btn btn-fun text-lg px-8 py-6">
                  🎯 {t('common.learnMore')} 📚
                </button>
              </ConfettiBurst>
            </div>

            {/* Fun Interactive Section */}
            <div className="fun-card p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">🎈 Hey Kids! Click the Buttons! 🎈</h3>
              <p className="text-lg text-gray-300 mb-4">
                Every button creates magic! Click anywhere to see confetti! 🎊
              </p>
              <div className="flex justify-center space-x-4 text-4xl">
                <span className="wiggle">🎆</span>
                <span className="wiggle">🎇</span>
                <span className="wiggle">✨</span>
                <span className="wiggle">🌟</span>
                <span className="wiggle">💫</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
          <div className="container">
            <ConfettiBurst>
              <h2 className="text-center mb-16 text-5xl md:text-6xl rainbow-text">
                🌟 {t('home.whyChooseUs')} 🌟
              </h2>
            </ConfettiBurst>

            <div className="grid md:grid-cols-3 gap-8">
              <ConfettiBurst>
                <div className="fun-card text-center p-8 fun-border">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400 wiggle">
                    {t('home.qualityTitle')}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {t('home.qualityDescription')}
                  </p>
                </div>
              </ConfettiBurst>

              <ConfettiBurst>
                <div className="fun-card text-center p-8 fun-border">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-400 wiggle">
                    {t('home.aiTitle')}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {t('home.aiDescription')}
                  </p>
                </div>
              </ConfettiBurst>

              <ConfettiBurst>
                <div className="fun-card text-center p-8 fun-border">
                  <div className="text-6xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400 wiggle">
                    {t('home.safetyTitle')}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {t('home.safetyDescription')}
                  </p>
                </div>
              </ConfettiBurst>
            </div>
          </div>
        </section>

        {/* Trending Products Preview */}
        <section className="py-20 bg-gradient-to-b from-black via-pink-900/20 to-black">
          <div className="container">
            <ConfettiBurst>
              <h2 className="text-center mb-16 text-5xl md:text-6xl rainbow-text">
                🚀 {t('home.trendingProducts')} 🎆
              </h2>
            </ConfettiBurst>

            {/* Product Previews with Emojis */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { emoji: '🎆', name: 'Super Rocket', color: 'red' },
                { emoji: '🎇', name: 'Magic Fountain', color: 'blue' },
                { emoji: '✨', name: 'Sparkle Star', color: 'yellow' },
              ].map((product, index) => (
                <ConfettiBurst key={index}>
                  <div className="fun-card text-center p-6 hover:scale-110 transition-transform">
                    <div className="text-7xl mb-4 wiggle">{product.emoji}</div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">{product.name}</h3>
                    <p className="text-gray-300">Amazing colors and sounds! 🌈</p>
                    <button className="btn btn-secondary mt-4">
                      View Details 👀
                    </button>
                  </div>
                </ConfettiBurst>
              ))}
            </div>

            <div className="text-center text-gray-300 text-lg">
              <p className="mb-6">
                🎊 Amazing products coming soon! 🎊<br />
                We're working hard to bring you the best fireworks collection! 🌟
              </p>
              <ConfettiBurst>
                <button className="btn btn-fun text-xl px-8 py-6">
                  🎮 Try AI Helper 🤖
                </button>
              </ConfettiBurst>
            </div>
          </div>
        </section>

        {/* Kids Fun Section */}
        <section className="py-20 bg-gradient-to-b from-black via-green-900/20 to-black">
          <div className="container">
            <div className="fun-card p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 rainbow-text">
                🎉 Hey Super Kids! 🎉
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Welcome to the most fun fireworks website in India! 🇮🇳<br />
                Ask your parents to help you explore our amazing fireworks! 🎆
              </p>

              <div className="flex justify-center space-x-8 text-6xl mb-8">
                <span className="wiggle">🎈</span>
                <span className="wiggle">🎁</span>
                <span className="wiggle">🎪</span>
                <span className="wiggle">🎯</span>
                <span className="wiggle">🎨</span>
              </div>

              <ConfettiBurst>
                <button className="btn btn-primary text-xl px-8 py-6">
                  🚀 Start Exploring! 🚀
                </button>
              </ConfettiBurst>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;