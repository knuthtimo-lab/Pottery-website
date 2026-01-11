import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-800/50 transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center md:hidden">
            <button 
              className="text-text-main dark:text-white p-2" 
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          
          <div className="flex-shrink-0">
            <a className="font-display text-4xl md:text-5xl font-light tracking-widest uppercase text-text-main dark:text-white" href="#">
              IKKAI
            </a>
          </div>

          <nav className="hidden md:flex space-x-16">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                className="text-xs uppercase tracking-[0.15em] text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300" 
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-6 text-text-main dark:text-white">
            <button className="hover:text-text-muted transition-colors hidden sm:block">
              <span className="material-symbols-outlined text-xl font-light">search</span>
            </button>
            <a className="hover:text-text-muted transition-colors relative group" href="#">
              <span className="material-symbols-outlined text-xl font-light">shopping_bag</span>
              <span className="absolute -top-1 -right-2 bg-text-main dark:bg-white text-white dark:text-black text-[9px] w-4 h-4 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity">2</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-background-light dark:bg-background-dark border-b border-stone-200 dark:border-stone-800 p-6 flex flex-col space-y-4 shadow-lg">
           {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                className="text-sm uppercase tracking-[0.15em] text-text-main dark:text-gray-200 hover:text-primary" 
                href={item.href}
              >
                {item.label}
              </a>
            ))}
        </div>
      )}
    </header>
  );
};

export default Header;