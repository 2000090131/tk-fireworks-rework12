import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/common/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import AIRecommender from '@/pages/AIRecommender';
import Safety from '@/pages/Safety';
import Cart from '@/pages/Cart';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <>
      <Helmet>
        <title>TK Fireworks - Best Fireworks in India</title>
        <meta name="theme-color" content="#FF6B35" />
        <link rel="canonical" href="https://tkfireworks.com" />
      </Helmet>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/ai-recommender" element={<AIRecommender />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;