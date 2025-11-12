import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Safety: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Safety Tips - Important Guidelines | TK Fireworks</title>
        <meta name="description" content="Essential safety tips and guidelines for using TK Fireworks products safely and responsibly during celebrations." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
                {t('safety.title')}
              </h1>
              <p className="text-xl text-gray-300">
                {t('safety.subtitle')}
              </p>
            </div>

            {/* Emergency Number */}
            <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-6 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                Emergency Helpline
              </h2>
              <p className="text-4xl font-bold text-white">
                {t('safety.emergencyNumber')}
              </p>
            </div>

            {/* General Safety Rules */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-orange-400">
                {t('safety.generalRules')}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-orange-900/20 to-purple-900/20 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl text-yellow-400 mr-4">👥</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">
                        {t('safety.adultSupervision')}
                      </h3>
                      <p className="text-gray-300">
                        Children should always be supervised by adults when fireworks are being used.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl text-yellow-400 mr-4">🏞️</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">
                        {t('safety.outdoorOnly')}
                      </h3>
                      <p className="text-gray-300">
                        Only use fireworks in open outdoor areas, away from buildings and trees.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl text-yellow-400 mr-4">💧</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">
                        {t('safety.waterSource')}
                      </h3>
                      <p className="text-gray-300">
                        Keep a bucket of water or hose nearby for emergencies and to soak used fireworks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-yellow-900/20 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl text-yellow-400 mr-4">🚫</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">
                        {t('safety.noAlcohol')}
                      </h3>
                      <p className="text-gray-300">
                        Never consume alcohol when handling or lighting fireworks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-6 md:col-span-2">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl text-yellow-400 mr-4">📖</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">
                        {t('safety.readInstructions')}
                      </h3>
                      <p className="text-gray-300">
                        Always read and follow the instructions on each firework carefully before use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Safety Quiz */}
            <section className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">
                Test Your Safety Knowledge
              </h2>
              <p className="text-gray-300 mb-6">
                Take our interactive safety quiz to make sure you're ready for a safe celebration!
              </p>
              <button className="btn btn-primary text-lg px-8 py-4">
                Start Safety Quiz
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Safety;