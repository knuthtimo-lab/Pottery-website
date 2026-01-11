import React from 'react';
import { JOURNAL_ENTRIES } from '../constants';

const JournalSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-terracotta-soft dark:bg-black overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 z-0 mix-blend-multiply opacity-30">
        <img 
          alt="Atmospheric studio background" 
          className="w-full h-full object-cover blur-3xl scale-110 grayscale" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAipMlYLTcRT_hdc3VePfFIlrA56VzZ5G2y3gcRfmIZMERwGFKq2N19Gqo6mw7uZowXmjl2eJ89TI3Mcud2OyOfadO3mPVF_v0sI0OHupqM49WEFcWzH-Wbu3DL6bQ46F2Y8SIAk-NUQy8psjcIdBKRrM8fqdn4eOPANYTXpVxkLMAm4R0Axy4aEKNdmj917ZKKTxvXB-J8nGlITJkJ-ua7XcZOwGnfK5ttzyWW35A0oOSffCf972gmpV27wrVQgYJNLS7UyDdyQIQ" 
        />
      </div>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-between items-baseline mb-20 border-b border-text-main/20 dark:border-gray-800 pb-6">
          <h2 className="font-display text-6xl font-thin text-text-main dark:text-white">The <span className="italic">Journal</span></h2>
          <a className="text-xs uppercase tracking-[0.2em] text-text-main dark:text-white hover:text-text-muted transition-colors" href="#">View Archive</a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {JOURNAL_ENTRIES.map((entry) => (
            <article key={entry.id} className={`group cursor-pointer ${entry.marginTop ? 'lg:mt-20' : ''}`}>
              <div className="relative h-[500px] overflow-hidden mb-8 shadow-md">
                <img 
                  alt={entry.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                  src={entry.image} 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted border border-text-muted/30 px-2 py-1 rounded-full">{entry.category}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">{entry.date}</span>
                </div>
                <h3 className="font-display text-3xl text-text-main dark:text-white mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">
                  {entry.title}
                </h3>
                <p className="text-sm font-light text-text-muted dark:text-gray-400 leading-loose max-w-sm">
                  {entry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;