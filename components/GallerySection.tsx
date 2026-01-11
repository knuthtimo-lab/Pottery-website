import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const GallerySection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="flex justify-between items-center mb-8 px-2">
          <h4 className="font-display text-2xl text-text-main dark:text-white">@ikkai_ceramics</h4>
          <a className="text-xs uppercase tracking-widest text-text-muted hover:text-primary transition-colors" href="#">Follow</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-stone-100 dark:bg-stone-800 border border-stone-100 dark:border-stone-800">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="aspect-square relative group overflow-hidden">
              <img 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" 
                src={img} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;