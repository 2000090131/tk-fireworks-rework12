import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Contact TK Fireworks - Get in Touch</title>
        <meta name="description" content="Contact TK Fireworks for enquiries, orders, and customer support. India's premier fireworks brand." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-gray-300">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-r from-orange-900/20 to-purple-900/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-orange-400">Send us a Message</h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t('contact.formName')} *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t('contact.formEmail')} *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t('contact.formPhone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t('contact.formMessage')} *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full text-lg">
                    {t('contact.submit')}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-purple-400">
                    {t('contact.address')}
                  </h2>
                  <p className="text-gray-300">
                    TK Fireworks<br />
                    Industrial Area, Sivakasi<br />
                    Tamil Nadu 626123<br />
                    India
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">
                    {t('contact.phone')}
                  </h2>
                  <p className="text-gray-300 text-lg">
                    +91 98765 43210<br />
                    +91 97654 32109
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-yellow-900/20 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-green-400">
                    {t('contact.email')}
                  </h2>
                  <p className="text-gray-300 text-lg">
                    info@tkfireworks.com<br />
                    support@tkfireworks.com
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-yellow-400">
                    {t('contact.businessHours')}
                  </h2>
                  <p className="text-gray-300">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM<br />
                    Festival Days: Special Hours
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">
                    {t('common.followUs')}
                  </h3>
                  <div className="flex justify-center space-x-6">
                    <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <span className="text-white font-bold">f</span>
                    </button>
                    <button className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                      <span className="text-white font-bold">i</span>
                    </button>
                    <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <span className="text-white font-bold">▶</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;