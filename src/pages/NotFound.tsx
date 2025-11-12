import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | TK Fireworks</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to TK Fireworks homepage to explore our premium fireworks." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-yellow-400 animate-pulse">404</div>
            <div className="text-2xl font-bold text-orange-400 mt-4">Oops! Page Not Found</div>
          </div>

          {/* Message */}
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have exploded like one of our amazing fireworks!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Go Back Home
            </Link>
            <Link
              to="/products"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              Explore Products
            </Link>
          </div>

          {/* Fun Animation */}
          <div className="mt-12 text-gray-400">
            <p>🎆 While you're here, imagine this spectacular firework 🎆</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;