import React from 'react';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-black text-stone-400 py-24 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-700 pb-20 mb-12">
          <div className="md:col-span-4">
            <a className="font-display text-4xl text-white block mb-8" href="#">IKKAI</a>
            <p className="font-body text-sm font-light leading-loose max-w-sm mb-8">
              Handcrafted ceramics for the modern home. Created with intention, fired with patience, and delivered with care.
            </p>
            <form className="flex border-b border-stone-600 pb-2 max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="bg-transparent border-none text-white placeholder-stone-500 focus:ring-0 text-sm w-full p-0" 
                placeholder="Join our newsletter" 
                type="email" 
              />
              <button className="text-xs uppercase tracking-widest text-white hover:text-stone-300" type="submit">Subscribe</button>
            </form>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">{FOOTER_LINKS[0].title}</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest uppercase">
              {FOOTER_LINKS[0].links.map((link) => (
                 <li key={link.label}><a className="hover:text-white transition-colors" href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">{FOOTER_LINKS[1].title}</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest uppercase">
              {FOOTER_LINKS[1].links.map((link) => (
                 <li key={link.label}><a className="hover:text-white transition-colors" href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-8">{FOOTER_LINKS[2].title}</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest uppercase">
              {FOOTER_LINKS[2].links.map((link) => (
                 <li key={link.label}><a className="hover:text-white transition-colors" href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase">
          <p>© 2024 IKKAI Ceramics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;