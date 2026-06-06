"use client";

import React, { useState } from "react";
import { GALLERY_ITEMS } from "@/config/cafe";
import { X, ChevronLeft, ChevronRight, Maximize2, Info } from "lucide-react";

const CATEGORIES = ["All", "Interior", "Food", "Coffee", "Workspace"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const openLightbox = (imageIndex: number) => {
    // Find the item index in the filtered items array
    setLightboxIndex(imageIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-gold font-bold">Ambiance</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-espresso">Visual Experience</h1>
        <div className="w-12 h-0.5 bg-gold mx-auto" />
        <p className="text-xs md:text-sm text-espresso/60 font-light leading-relaxed">
          Step inside ZED's Kitchen Café before you visit. Browse through real photography of our spaces, freshly brewed beverages, and kitchen highlights.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-espresso text-cream shadow-xs"
                : "bg-espresso/5 text-espresso/80 hover:bg-espresso/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative h-64 overflow-hidden rounded-lg border border-gold-light/10 bg-espresso/5 cursor-pointer shadow-xs"
          >
            {/* Gallery Image */}
            <img
              src={item.image}
              alt={`${item.category} ${item.id}`}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-espresso/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-2.5 bg-cream/90 rounded-full border border-gold-light/25 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform text-espresso">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
            {/* Label */}
            <span className="absolute bottom-3 left-3 bg-espresso/90 text-gold text-[8px] font-bold uppercase tracking-wider py-0.5 px-2 rounded-full border border-gold/10 z-10">
              {item.category}
            </span>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-espresso/95 flex items-center justify-center p-4 md:p-8 animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-cream hover:text-gold transition-colors focus:outline-none z-55"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-cream transition-colors z-55"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-cream transition-colors z-55"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center gap-4 animate-fade-in"
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt="Lightbox View"
              className="max-w-full max-h-[72vh] object-contain rounded-md shadow-2xl border border-white/5"
            />
            <div className="text-center">
              <span className="inline-block bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full border border-gold/20">
                Category: {filteredItems[lightboxIndex].category}
              </span>
              <p className="text-cream/50 text-[10px] uppercase tracking-wider mt-1.5">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
