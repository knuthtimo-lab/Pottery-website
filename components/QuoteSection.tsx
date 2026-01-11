import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-32 bg-clay-dark dark:bg-black border-y border-stone-800/50 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="material-symbols-outlined text-4xl mb-8 text-stone-500 font-thin">format_quote</span>
        <h3 className="font-display text-3xl md:text-5xl font-thin leading-snug text-stone-100 dark:text-stone-200 mb-10 italic">
          "My pottery is designed to be both beautiful and practical. From minimalist vases to durable dinner plates, each piece has its own character."
        </h3>
        <p className="font-body text-xs uppercase tracking-[0.2em] text-stone-400">
          Anonymous — Verified Collector
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;