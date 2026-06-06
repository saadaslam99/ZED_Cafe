"use client";

import React from "react";
import Link from "next/link";
import { CAFE_METADATA } from "@/config/cafe";
import { ArrowRight, Coffee, Heart, HeartHandshake, ShieldCheck, Smile, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans space-y-16 animate-fade-in">
      {/* 1. Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-gold font-bold">Philosophy</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-espresso">Our Story & Vibe</h1>
        <div className="w-12 h-0.5 bg-gold mx-auto" />
      </div>

      {/* 2. Main Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        <div className="lg:col-span-7 space-y-5">
          <h2 className="font-serif text-2xl font-bold text-espresso leading-snug">
            We built this café as a space where people can slow down, work comfortably, and connect.
          </h2>
          <p className="text-xs md:text-sm text-espresso/70 leading-relaxed font-light">
            {CAFE_METADATA.aboutLong}
          </p>
          <p className="text-xs md:text-sm text-espresso/70 leading-relaxed font-light">
            Every wooden texture, glowing amber light, and comfy corner armchair in our outlets was handpicked. We want ZED's Kitchen to feel familiar and grounding in the middle of Karachi’s fast pace.
          </p>
        </div>
        <div className="lg:col-span-5 relative h-80 rounded-lg overflow-hidden border border-gold-light/25 shadow-md">
          <img
            src="/images/ambiance_cozy_corner.png"
            alt="ZED's Kitchen Cafe Ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/10" />
        </div>
      </div>

      {/* 3. Core Values Grid */}
      <div className="py-12 bg-off-white border-t border-b border-gold-light/10">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <h3 className="font-serif text-2xl font-bold text-espresso text-center">What We Stand For</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="p-3 bg-espresso/5 border border-gold-light/15 rounded-md h-fit w-fit text-espresso">
                <Coffee className="w-5 h-5 text-gold" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-espresso">Craft Coffee</h4>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                We select premium single-origin and blended Arabica beans, roasted fresh and pulled by trained baristas. Quality is never compromised.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-espresso/5 border border-gold-light/15 rounded-md h-fit w-fit text-espresso">
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-espresso">Workspace Culture</h4>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                We embrace freelancers, builders, and artists. You don&apos;t need to feel pressured to order continuously. Work in peace with fast internet.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-espresso/5 border border-gold-light/15 rounded-md h-fit w-fit text-espresso">
                <HeartHandshake className="w-5 h-5 text-gold" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-espresso">Honest Comfort</h4>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                No artificial fillers, frozen patties, or pre-made mixes. Our kitchen crafts every sandwich, burger, and bakery item fresh upon order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Final Conversion Block */}
      <div className="text-center max-w-xl mx-auto space-y-6 pt-4">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-espresso">Experience it Yourself</h3>
        <p className="text-xs text-espresso/60 leading-relaxed font-light">
          Whether you want to order food to your home, reserve a table for a meeting, or check out our locations, we have simplified the flow.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/menu"
            className="px-6 py-3 bg-[#C89245] hover:bg-[#C89245]/90 text-white uppercase font-bold text-xs tracking-wider rounded-[10px] transition-colors"
          >
            Order Now
          </Link>
          <Link
            href="/reservations"
            className="px-6 py-3 border border-[#2B1E16] text-[#2B1E16] hover:bg-[#2B1E16] hover:text-white uppercase font-bold text-xs tracking-wider rounded-[10px] transition-colors"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </div>
  );
}
