import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const AIRecommender: React.FC = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const questions = [
    { key: 'occasion', text: t('aiRecommender.question1') },
    { key: 'attendees', text: t('aiRecommender.question2') },
    { key: 'budget', text: t('aiRecommender.question3') },
    { key: 'ageRestrictions', text: t('aiRecommender.question4') },
  ];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
  };

  return (
    <>
      <Helmet>
        <title>AI Fireworks Helper - Smart Recommendations | TK Fireworks</title>
        <meta name="description" content="Get personalized fireworks recommendations from our AI assistant for your perfect celebration." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              {t('aiRecommender.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              {t('aiRecommender.subtitle')}
            </p>

            {/* Welcome Message */}
            {currentStep === 0 && (
              <div className="mb-12 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg">
                <p className="text-lg text-gray-300 mb-8">
                  {t('aiRecommender.welcome')}
                </p>
                <button
                  className="btn btn-primary text-lg px-8 py-4"
                  onClick={handleNext}
                >
                  Get Started
                </button>
              </div>
            )}

            {/* Questions */}
            {currentStep > 0 && currentStep <= questions.length && (
              <div className="mb-12 p-8 bg-gradient-to-r from-orange-900/20 to-purple-900/20 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-orange-400">
                  {questions[currentStep - 1].text}
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <button className="btn btn-secondary">Option 1</button>
                  <button className="btn btn-secondary">Option 2</button>
                  <button className="btn btn-secondary">Option 3</button>
                  <button className="btn btn-secondary">Option 4</button>
                </div>

                <div className="flex gap-4 justify-center">
                  {currentStep > 1 && (
                    <button
                      className="btn btn-secondary"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Previous
                    </button>
                  )}
                  <button
                    className="btn btn-primary"
                    onClick={handleNext}
                  >
                    {currentStep === questions.length ? t('aiRecommender.getRecommendations') : 'Next'}
                  </button>
                </div>
              </div>
            )}

            {/* Progress Indicator */}
            <div className="flex justify-center mb-8">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 mx-1 rounded-full transition-colors ${
                    index < currentStep ? 'bg-yellow-400' :
                    index === currentStep ? 'bg-orange-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Results Placeholder */}
            {currentStep > questions.length && (
              <div className="mb-12 p-8 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                  Recommended Products
                </h2>
                <p className="text-gray-300 mb-8">
                  Based on your answers, here are our perfect recommendations for your celebration!
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-black/30 rounded-lg p-6 border border-yellow-500/20">
                      <h3 className="text-lg font-bold text-yellow-400 mb-2">Recommended Firework {item}</h3>
                      <p className="text-gray-300 mb-4">Perfect match for your celebration needs</p>
                      <button className="btn btn-primary w-full">View Details</button>
                    </div>
                  ))}
                </div>

                <button
                  className="btn btn-secondary"
                  onClick={handleRestart}
                >
                  {t('aiRecommender.restart')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AIRecommender;