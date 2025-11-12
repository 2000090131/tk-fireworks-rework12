import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title>Product Details - TK Fireworks</title>
        <meta name="description" content="Detailed information about TK Fireworks premium quality fireworks." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400">
              Product #{id} Details
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="aspect-video bg-gradient-to-br from-orange-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">Video Player</span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-orange-400">Spectacular Firework</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Premium quality firework perfect for making your celebrations unforgettable.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Specifications</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Duration: 60 seconds</li>
                      <li>• Height: 100 feet</li>
                      <li>• Recommended Age: 18+</li>
                      <li>• Safety Rating: Premium</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Safety Information</h3>
                    <p className="text-gray-300">
                      Always use under adult supervision. Keep water source nearby.
                      Read all instructions before use.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button className="btn btn-primary flex-1">
                      Enquire Now
                    </button>
                    <button className="btn btn-secondary flex-1">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Products */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-orange-400">Similar Products</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gradient-to-b from-purple-900/20 to-transparent rounded-lg p-6">
                    <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-4"></div>
                    <h3 className="text-lg font-bold text-yellow-400">Similar Product {item}</h3>
                    <button className="btn btn-secondary mt-4">View Details</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;