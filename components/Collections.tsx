import React from 'react';
import { COLLECTIONS } from '../constants';
import { CollectionItem } from '../types';

const Collections: React.FC = () => {
  // We need to split the collections into columns to match the masonry-like grid in the design
  // Column 1: Items 0, 1 (Tableware, Lighting)
  // Column 2: Items 2, 3 (Vases, Serving)
  // Column 3: Items 4, 5 (Kitchenware, Textiles)
  
  const col1 = [COLLECTIONS[0], COLLECTIONS[1]];
  const col2 = [COLLECTIONS[2], COLLECTIONS[3]];
  const col3 = [COLLECTIONS[4], COLLECTIONS[5]];

  const renderCard = (item: CollectionItem) => (
    <a key={item.id} className="group block cursor-pointer" href="#">
      <div className={`relative overflow-hidden ${item.aspectRatio} mb-6`}>
        <img 
          alt={`${item.title} collection`} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
          src={item.image} 
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
      <div className="flex justify-between items-center border-t border-gray-400/50 dark:border-gray-800 pt-4">
        <h3 className="font-display text-3xl font-light text-text-main dark:text-white group-hover:italic transition-all">
          {item.title}
        </h3>
        <span className="text-xs uppercase tracking-widest text-text-muted">{item.number}</span>
      </div>
    </a>
  );

  return (
    <section className="py-32 bg-warm-grey dark:bg-[#141210] transition-colors duration-500">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 px-4">
          <h2 className="font-display text-5xl md:text-7xl font-thin text-text-main dark:text-white">
            Curated <span className="italic text-text-muted">Editions</span>
          </h2>
          <p className="hidden md:block font-body text-sm text-text-muted max-w-xs leading-relaxed text-right">
            Explore our seasonal collections, fired in small batches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="flex flex-col space-y-16 md:space-y-32">
            {col1.map(renderCard)}
          </div>
          <div className="flex flex-col space-y-16 md:space-y-32 md:pt-32">
            {col2.map(renderCard)}
          </div>
          <div className="flex flex-col space-y-16 md:space-y-32 md:pt-16 lg:pt-0">
             {col3.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;