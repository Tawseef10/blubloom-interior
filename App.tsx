import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import TransformationSlider from './components/TransformationSlider';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans antialiased text-blubloom-text bg-blubloom-linen min-h-screen selection:bg-blubloom-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <TransformationSlider />
        <Features />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;