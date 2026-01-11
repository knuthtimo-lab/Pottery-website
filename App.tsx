import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Collections from './components/Collections';
import QuoteSection from './components/QuoteSection';
import JournalSection from './components/JournalSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-primary dark:bg-black text-white text-[10px] tracking-[0.2em] text-center py-3 uppercase font-light">
        Complimentary shipping on orders over €200
      </div>
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <Collections />
        <QuoteSection />
        <JournalSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}

export default App;