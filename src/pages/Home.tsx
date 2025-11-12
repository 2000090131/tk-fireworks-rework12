import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>TK Fireworks - Best Fireworks in India | Premium Quality</title>
        <meta name="description" content="TK Fireworks - India's first AI-powered fireworks brand. Premium quality fireworks for Diwali, weddings, and all celebrations." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black text-white">
          <div className="container text-center fade-in">
            <h1 className="mb-4">{t('home.heroTitle')}</h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-orange-400">
              {t('home.heroSubtitle')}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              {t('home.heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary text-lg px-8 py-4">
                {t('common.watchVideos')}
              </button>
              <button className="btn btn-secondary text-lg px-8 py-4">
                {t('common.learnMore')}
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
          <div className="container">
            <h2 className="text-center mb-16 text-4xl md:text-5xl">
              {t('home.whyChooseUs')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-b from-orange-900/20 to-transparent rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  {t('home.qualityTitle')}
                </h3>
                <p className="text-gray-300">
                  {t('home.qualityDescription')}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-purple-900/20 to-transparent rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  {t('home.aiTitle')}
                </h3>
                <p className="text-gray-300">
                  {t('home.aiDescription')}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-yellow-900/20 to-transparent rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  {t('home.safetyTitle')}
                </h3>
                <p className="text-gray-300">
                  {t('home.safetyDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Products Preview */}
        <section className="py-20 bg-gradient-to-b from-transparent to-black">
          <div className="container">
            <h2 className="text-center mb-16 text-4xl md:text-5xl text-yellow-400">
              {t('home.trendingProducts')}
            </h2>
            <div className="text-center text-gray-300 text-lg">
              <p>Amazing products coming soon! We're working hard to bring you the best fireworks collection.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;