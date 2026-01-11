import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-sage dark:bg-stone-900 overflow-hidden relative transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="relative flex flex-col md:block">
          <div className="hidden md:block absolute -top-24 left-10 z-0 select-none opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <span className="font-display text-[20rem] leading-none text-black dark:text-white">CRAFT</span>
          </div>
          <div 
            className="w-full md:w-3/5 h-[600px] md:h-[800px] ml-auto relative z-10 parallax-bg shadow-2xl bg-fixed bg-center bg-cover bg-no-repeat" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwcT6-AV8qpFzjZnVg9E60XgAEjN8kSfvJhBviAQySkGqDm950ofKMSXpKUvN44YobZIMvBeV-QcLz_xE7hQKdYdSIjoPasavbYAMbtqN4XySDFYqxgVq34e2R0BJJqX0WAzSFTcTd1WbnDjhlb8Vr8NyVtoB-09ArCsO6ZwnpvplPNHWwqzA0pebI6c32n8BPTMwvL5MuqUV8T5-tEw6MiNVyXJKGX-EIAxboK60MBn0tdYRBneueLDgcjvJ-s7R6yVBe1H4j1kc')" }}
          >
          </div>
          <div className="relative z-20 mt-[-100px] md:mt-0 md:absolute md:top-1/2 md:left-20 md:-translate-y-1/2 bg-white dark:bg-stone-900 p-12 md:p-20 shadow-xl max-w-xl mx-auto md:mx-0">
            <span className="block w-12 h-[1px] bg-text-main mb-8"></span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-text-main dark:text-white leading-tight">
              The Art of <br /><i className="font-thin">Slow Living</i>
            </h2>
            <p className="font-body font-light text-text-muted dark:text-gray-400 mb-10 leading-loose text-sm">
              We believe in the beauty of handmade objects. Our collection features a curated selection of ceramics designed to elevate the everyday. From sturdy mugs for your morning coffee to elegant vases that breathe life into a room, each piece is crafted with patience and intention.
            </p>
            <a className="group inline-flex items-center text-xs uppercase tracking-[0.2em] text-text-main dark:text-white font-medium" href="#">
              Read Our Story <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;