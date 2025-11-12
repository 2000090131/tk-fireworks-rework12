import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Cart: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Shopping Cart - TK Fireworks</title>
        <meta name="description" content="View and manage your TK Fireworks shopping cart. Premium quality fireworks for your celebrations." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-yellow-400 text-center">
              {t('cart.title')}
            </h1>

            {/* Empty Cart */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-12 text-center">
              <div className="text-6xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold mb-4 text-orange-400">
                {t('cart.empty')}
              </h2>
              <p className="text-gray-300 mb-8">
                Your cart is empty! Explore our amazing products and add some fireworks to your celebration.
              </p>
              <button className="btn btn-primary text-lg px-8 py-4">
                {t('cart.continueShopping')}
              </button>
            </div>

            {/* Cart Summary (Future Implementation) */}
            <div className="mt-12 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Future Features Coming Soon!</h3>
              <p className="text-gray-300">
                We're working on a complete e-commerce experience including:
              </p>
              <ul className="text-gray-300 mt-4 space-y-2">
                <li>• Secure online payment integration</li>
                <li>• Order tracking system</li>
                <li>• Special festival discounts</li>
                <li>• Delivery across India</li>
              </ul>
              <p className="text-gray-300 mt-4">
                In the meantime, please use our enquiry form to place orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;