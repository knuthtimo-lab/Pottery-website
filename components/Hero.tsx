import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 w-full flex flex-col md:flex-row items-center overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="w-full md:w-5/12 h-full flex flex-col justify-center px-6 md:pl-20 md:pr-12 py-20 z-10">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-text-muted mb-8 ml-1 block">
          New Collection 2024
        </span>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-text-main dark:text-white font-thin leading-[0.9] mb-10">
          Form <br /><span className="italic pl-12 md:pl-20 text-text-muted">of</span> Earth
        </h1>
        <p className="font-body text-text-muted dark:text-gray-400 text-sm md:text-base font-light mb-12 max-w-sm leading-loose ml-1">
          Discover the imperfect perfection of hand-thrown stoneware. Pieces that bring silence and intention to your daily rituals.
        </p>
        <div className="ml-1">
          <a className="inline-block border-b border-text-main dark:border-white pb-1 text-text-main dark:text-white font-body text-xs uppercase tracking-[0.2em] hover:text-text-muted transition-colors duration-300" href="#">
            View The Collection
          </a>
        </div>
      </div>
      <div className="w-full md:w-7/12 h-[60vh] md:h-screen relative">
        <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800">
          <img 
            alt="Minimalist ceramic vase with single branch" 
            className="w-full h-full object-cover object-center brightness-95" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvZAnP7XY-eGn5eL8LHgtIhpGoP7m9sPeESpuqYuRRomwq-VbkWnk3og2Zz3Y008nJOg3m1_HX59c-oDrJrtdXltWuBceYV0538LLAwbtslwnO_7BOuBw5y4v-4m9JtFou3lwflr2jbi_6zW8EZaxmGL6_EqVOkYct5HiXbw0JYTYhxPegtBET_-AeTOqJHvuDJGSzRAImHVh74ucDQgnl6QzlQZ17IKZU8o-1SdfLMvL8EvTb-jAeb7wv-wHpLSPbHK4XwYiVszk" 
          />
        </div>
        <div className="absolute bottom-10 left-10 md:left-auto md:right-20 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur p-6 max-w-xs hidden md:block shadow-sm">
          <p className="font-display italic text-xl text-text-main dark:text-gray-200">
            "In emptiness, there is fullness."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;