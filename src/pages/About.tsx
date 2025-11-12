import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About TK Fireworks - India's Premier Fireworks Brand</title>
        <meta name="description" content="Learn about TK Fireworks - India's first AI-powered fireworks brand with over 30 years of experience in creating spectacular celebrations." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center mb-12 text-5xl md:text-6xl text-yellow-400">
              {t('about.title')}
            </h1>

            {/* Brand Story */}
            <section className="mb-16 p-8 bg-gradient-to-r from-orange-900/20 to-purple-900/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">
                {t('about.brandStoryTitle')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.brandStoryDescription')}
              </p>
            </section>

            {/* Mission */}
            <section className="mb-16 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">
                {t('about.missionTitle')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.missionDescription')}
              </p>
            </section>

            {/* Vision */}
            <section className="mb-16 p-8 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                {t('about.visionTitle')}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.visionDescription')}
              </p>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                Join us in creating unforgettable celebrations with safe, spectacular fireworks!
              </p>
              <button className="btn btn-primary text-lg px-8 py-4">
                {t('common.learnMore')}
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;