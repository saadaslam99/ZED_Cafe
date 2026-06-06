"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Calendar,
  ShoppingBag,
  Star,
  Coffee,
  Briefcase,
  Users,
  Heart,
  Plus,
  ChevronRight,
  Phone,
  Clock
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  CAFE_METADATA,
  MOOD_CARDS,
  MENU_ITEMS,
  BRANCHES,
  REVIEWS
} from "@/config/cafe";

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
];

export default function Home() {
  const { addToCart } = useCart();
  
  // Exactly 5 featured popular items as shown in the design mockup
  const featuredIds = [
    "iced-spanish-latte",
    "popcorn-chicken",
    "pepperoni-pizza",
    "french-toast",
    "iced-matcha-latte"
  ];
  const featuredItems = MENU_ITEMS.filter((item) => featuredIds.includes(item.id));

  // Sort them to match the order
  const sortedFeaturedItems = [
    featuredItems.find(i => i.id === "iced-spanish-latte"),
    featuredItems.find(i => i.id === "popcorn-chicken"),
    featuredItems.find(i => i.id === "pepperoni-pizza"),
    featuredItems.find(i => i.id === "french-toast"),
    featuredItems.find(i => i.id === "iced-matcha-latte")
  ].filter(Boolean) as typeof MENU_ITEMS;

  const getMoodIcon = (id: string) => {
    switch (id) {
      case "quick-coffee":
        return <Coffee className="w-5 h-5 text-[#C89245]" />;
      case "work-session":
        return <Briefcase className="w-5 h-5 text-[#C89245]" />;
      case "friends-hangout":
        return <Users className="w-5 h-5 text-[#C89245]" />;
      case "meeting-table":
        return <Briefcase className="w-5 h-5 text-[#C89245]" />;
      case "date-evening":
        return <Heart className="w-5 h-5 text-[#C89245]" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-[#C89245]" />;
    }
  };

  return (
    <div className="animate-fade-in font-sans bg-cream text-charcoal">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Z House Cafe Ambiance"
            className="w-full h-full object-cover"
          />
          {/* Linear gradient overlay from left to right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(43, 30, 22, 0.85) 0%, rgba(43, 30, 22, 0.45) 45%, rgba(43, 30, 22, 0.15) 100%)"
            }}
          />
        </div>

        {/* Hero Content Left-aligned */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <div className="max-w-xl text-left space-y-6 pt-6">
            <h1 className="font-serif text-5xl md:text-[68px] font-bold tracking-tight text-white leading-[1.08] whitespace-pre-line">
              {"Good Coffee.\nGreat Food.\nBetter Moments."}
            </h1>
            <p className="text-xs md:text-[15px] text-white/80 max-w-md font-light leading-relaxed">
              A cozy space to work, meet, relax and enjoy your favorite flavors.
            </p>
            <div className="flex flex-row items-center justify-start gap-4 pt-2">
              <a
                href="https://order.zedskitchen.com/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-[#C89245] hover:bg-[#C89245]/90 text-white uppercase font-bold text-xs tracking-wider rounded-[10px] transition-all shadow-md flex items-center justify-center gap-2"
              >
                Order Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/reservations"
                className="px-6 py-3.5 bg-transparent border border-white/60 hover:border-white hover:bg-white/5 text-white uppercase font-bold text-xs tracking-wider rounded-[10px] transition-all"
              >
                Explore the Café
              </Link>
            </div>
          </div>
        </div>

        {/* Social Proof overlapping avatars bottom-right */}
        <div className="absolute bottom-16 right-8 z-30 hidden md:flex items-center gap-3 bg-[#2B1E16]/85 backdrop-blur-md py-2.5 px-4.5 rounded-full border border-white/10 shadow-lg">
          <div className="flex -space-x-2.5">
            {AVATARS.map((src, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[#2B1E16] bg-off-white overflow-hidden shrink-0 shadow-sm"
              >
                <img
                  src={src}
                  alt={`Customer ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-[10.5px] text-white leading-tight font-light">
            <span className="font-bold text-[#C89245]">Loved by 2,500+</span>
            <br />
            coffee & food lovers
          </div>
        </div>
      </section>

      {/* 2. QUICK ACTION CARDS */}
      <section className="relative z-20 -mt-10 max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href="https://order.zedskitchen.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-6 bg-[#FFFDF8] border border-[#2B1E16]/10 shadow-sm hover:shadow-md rounded-[18px] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#C89245]/5 rounded-full text-[#2B1E16]">
                <ShoppingBag className="w-5 h-5 text-[#C89245]" />
              </div>
              <div>
                <h3 className="font-bold text-[#2B1E16] text-[13px] uppercase tracking-wider">
                  Order Food
                </h3>
                <p className="text-[11px] text-[#2B1E16]/50 mt-0.5 font-light">
                  Quick, easy & hot delivered to you
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#2B1E16]/30 group-hover:text-[#C89245] group-hover:translate-x-1 transition-all" />
          </a>

          <Link
            href="/reservations"
            className="flex items-center justify-between p-6 bg-[#FFFDF8] border border-[#2B1E16]/10 shadow-sm hover:shadow-md rounded-[18px] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#C89245]/5 rounded-full text-[#2B1E16]">
                <Calendar className="w-5 h-5 text-[#C89245]" />
              </div>
              <div>
                <h3 className="font-bold text-[#2B1E16] text-[13px] uppercase tracking-wider">
                  Reserve a Table
                </h3>
                <p className="text-[11px] text-[#2B1E16]/50 mt-0.5 font-light">
                  Book your table in advance
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#2B1E16]/30 group-hover:text-[#C89245] group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/branches"
            className="flex items-center justify-between p-6 bg-[#FFFDF8] border border-[#2B1E16]/10 shadow-sm hover:shadow-md rounded-[18px] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#C89245]/5 rounded-full text-[#2B1E16]">
                <MapPin className="w-5 h-5 text-[#C89245]" />
              </div>
              <div>
                <h3 className="font-bold text-[#2B1E16] text-[13px] uppercase tracking-wider">
                  Find a Branch
                </h3>
                <p className="text-[11px] text-[#2B1E16]/50 mt-0.5 font-light">
                  Visit us at your nearest location
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#2B1E16]/30 group-hover:text-[#C89245] group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </section>

      {/* 3. "WHAT BRINGS YOU IN TODAY?" INTENT SECTION */}
      <section className="py-20 max-w-[1180px] mx-auto px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl font-bold text-[#2B1E16]">
            What brings you in today?
          </h2>
          <div className="w-8 h-0.5 bg-[#C89245] mx-auto" />
        </div>

        {/* Responsive grid with larger cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {MOOD_CARDS.map((mood) => (
            <a
              key={mood.id}
              href={
                mood.action === "order"
                  ? "https://order.zedskitchen.com/"
                  : mood.action === "book"
                  ? "/reservations"
                  : "/about"
              }
              target={mood.action === "order" ? "_blank" : undefined}
              rel={mood.action === "order" ? "noreferrer" : undefined}
              className="relative overflow-hidden rounded-[24px] shadow-xs hover:shadow-lg transition-all duration-300 group h-64 flex flex-col justify-end text-left border border-[#2B1E16]/5 cursor-pointer"
            >
              {/* Card Background Image */}
              <img
                src={mood.image}
                alt={mood.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
              />
              
              {/* Espresso Brand Gradient Overlay */}
              <div
                className="absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(43, 30, 22, 0.15) 0%, rgba(43, 30, 22, 0.65) 55%, rgba(43, 30, 22, 0.95) 100%)"
                }}
              />

              {/* Glassmorphic & Text Content */}
              <div className="relative z-20 p-6 flex flex-col justify-between h-full w-full">
                {/* Top Row: Glass Icon & Arrow */}
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 shrink-0">
                    {getMoodIcon(mood.id)}
                  </div>
                  
                  {/* Subtle chevron circle indicator */}
                  <div className="w-8 h-8 bg-white/10 hover:bg-[#C89245] backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:bg-[#C89245]">
                    <ChevronRight className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Bottom Row: Text Details */}
                <div className="space-y-1">
                  <h3 className="font-serif text-[18px] font-bold text-white leading-tight">
                    {mood.title}
                  </h3>
                  <p className="text-[11.5px] text-white/80 font-light leading-relaxed">
                    {mood.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. CUSTOMER FAVORITES (FEATURED MENU) */}
      <section className="py-20 max-w-[1180px] mx-auto px-6 space-y-10">
        <div className="flex items-end justify-between border-b border-[#2B1E16]/10 pb-4">
          <h2 className="font-serif text-3xl font-bold text-[#2B1E16]">
            Customer Favorites
          </h2>
          <a
            href="https://order.zedskitchen.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-bold uppercase tracking-wider border border-[#2B1E16]/20 px-4 py-2 rounded-md text-[#2B1E16] hover:bg-[#2B1E16]/5 transition-colors"
          >
            View Full Menu
          </a>
        </div>

        {/* 5 columns Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sortedFeaturedItems.map((item) => {
            const cardTag = item.tags?.[0] || "Best Seller";
            return (
              <div
                key={item.id}
                className="bg-[#FFFDF8] rounded-[18px] overflow-hidden border border-[#2B1E16]/5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with ratio 4:3 */}
                  <div className="relative h-36 overflow-hidden bg-[#2B1E16]/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#2B1E16]/90 text-[#C89245] text-[7.5px] font-bold uppercase tracking-wider py-0.5 px-2.5 rounded-full border border-[#C89245]/20 shadow-xs">
                      {cardTag}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-4 space-y-1.5">
                    <h3 className="font-serif font-bold text-[#2B1E16] text-[15px] truncate">
                      {item.name}
                    </h3>
                    <p className="text-[10.5px] text-[#2B1E16]/60 leading-normal font-light line-clamp-2 h-8">
                      {item.description}
                    </p>
                    <p className="text-[11px] font-bold text-[#C89245] uppercase tracking-wider">
                      PKR {item.price}
                    </p>
                  </div>
                </div>

                {/* External Order Button */}
                <div className="p-4 pt-0 flex justify-end">
                  <a
                    href="https://order.zedskitchen.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-[#C89245] hover:bg-[#C89245]/90 text-white rounded-full transition-colors duration-300 cursor-pointer shadow-xs flex items-center justify-center"
                    aria-label="Order online"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. AMBIANCE / STORY SPLIT SECTION */}
      <section className="py-20 bg-[#EFE2D0]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left side Story Card */}
            <div className="lg:col-span-4 bg-[#2B1E16] text-[#FFFDF8] p-8 md:p-10 rounded-[18px] flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-4">
                <span className="text-[25px] uppercase tracking-widest text-[#C89245] font-bold block">
                  Our Story
                </span>
                <p className="text-xs md:text-[15px] text-[#FFFDF8]/75 leading-relaxed font-light">
                  Z House Café is more than just a café. It&apos;s a place where great food, cozy ambiance and real conversations come together. Whether you&apos;re here for a quick coffee, a long work session, or a memorable evening — you&apos;re home.
                </p>
              </div>
              <Link
                href="/about"
                className="w-fit px-6 py-2.5 bg-[#C89245] hover:bg-[#C89245]/90 text-xs font-bold uppercase tracking-wider text-white rounded-[10px] transition-all shadow-xs"
              >
                Know More About Us
              </Link>
            </div>

            {/* Right side Visual Grid of 4 images */}
            <div className="lg:col-span-8 grid grid-cols-12 gap-3 h-[380px] lg:h-auto">
              <div className="col-span-5 h-full rounded-[18px] overflow-hidden border border-[#2B1E16]/10 bg-white">
                <img
                  src="/images/hero_bg.png"
                  alt="Cafe interior seating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-3 grid grid-rows-2 gap-3 h-full">
                <div className="rounded-[18px] overflow-hidden border border-[#2B1E16]/10 bg-white">
                  <img
                    src="/images/menu_signature_latte.png"
                    alt="Espresso cup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[18px] overflow-hidden border border-[#2B1E16]/10 bg-white">
                  <img
                    src="/images/menu_chocolate_cake.png"
                    alt="Sliced chocolate cake"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-4 h-full rounded-[18px] overflow-hidden border border-[#2B1E16]/10 bg-white">
                <img
                  src="/images/ambiance_cozy_corner.png"
                  alt="Cozy corner table"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT PEOPLE SAY & OUR BRANCHES SPLIT SECTION */}
      <section className="py-20 max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: What People Say */}
        <div className="space-y-6 lg:border-r lg:border-[#2B1E16]/10 lg:pr-10">
          <h2 className="font-serif text-3xl font-bold text-[#2B1E16]">What People Say</h2>
          
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-[#2B1E16]/60">
              <span className="font-serif text-4xl font-extrabold text-[#2B1E16] tracking-tight">G</span>
              <div className="space-y-0.5">
                <div className="font-bold text-base text-[#2B1E16] leading-none">4.6</div>
                <div className="flex text-[#C89245] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C89245] text-[#C89245]" />
                  ))}
                </div>
                <div className="text-[11px] font-light">Based on 1,200+ reviews on Google</div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {REVIEWS.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-[#FFFDF8] p-6 rounded-[20px] border border-[#2B1E16]/5 shadow-xs space-y-3.5 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[13px] text-[#2B1E16]">{review.name}</span>
                    <div className="flex text-[#C89245] gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#C89245] text-[#C89245]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[13px] text-[#2B1E16]/80 italic leading-relaxed font-light">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Our Location */}
        <div className="space-y-6 lg:pl-2">
          <h2 className="font-serif text-3xl font-bold text-[#2B1E16]">Our Location</h2>
          
          <div className="w-full">
            {BRANCHES.map((b) => (
              <div
                key={b.id}
                className="bg-[#FFFDF8] p-7 rounded-[24px] border border-[#2B1E16]/5 shadow-xs flex flex-col justify-between min-h-[290px] hover:shadow-md transition-shadow w-full"
              >
                <div className="space-y-4.5">
                  <div>
                    <h3 className="font-serif text-[20px] font-bold text-[#2B1E16] leading-tight">
                      {b.name}
                    </h3>
                    <p className="text-[12.5px] text-[#2B1E16]/55 mt-1.5 font-light leading-relaxed">
                      {b.address}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-[11.5px] text-[#2B1E16]/70 font-light">
                    <p className="flex items-center gap-2">
                      <Clock className="w-4.5 h-4.5 text-[#C89245] shrink-0" />
                      <span>{b.hours}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4.5 h-4.5 text-[#C89245] shrink-0" />
                      <a href={`tel:${b.phone.replace(/\s+/g, "")}`} className="hover:underline">
                        {b.phone}
                      </a>
                    </p>
                  </div>

                  {(b.instagram || b.coworkingMaps) && (
                    <div className="flex gap-3 text-[10px] pt-1 font-bold uppercase tracking-wider">
                      {b.instagram && (
                        <a
                          href={b.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#C89245] hover:text-[#2B1E16] transition-colors"
                        >
                          Instagram
                        </a>
                      )}
                      {b.instagram && b.coworkingMaps && (
                        <span className="text-[#2B1E16]/20 font-light">•</span>
                      )}
                      {b.coworkingMaps && (
                        <a
                          href={b.coworkingMaps}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#C89245] hover:text-[#2B1E16] transition-colors"
                        >
                          Coworking Space
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6">
                  <a
                    href={b.googleMaps}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center py-3 border border-[#2B1E16]/15 text-[#2B1E16] hover:bg-[#2B1E16]/5 text-[11px] font-bold uppercase tracking-wider rounded-[10px] transition-colors"
                  >
                    Directions
                  </a>
                  <a
                    href="https://order.zedskitchen.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center py-3 bg-[#C89245] hover:bg-[#C89245]/90 text-white text-[11px] font-bold uppercase tracking-wider rounded-[10px] transition-colors shadow-xs"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HUNGRY ALREADY? BANNER */}
      <section className="py-16 bg-[#2B1E16] text-[#FFFDF8] relative overflow-hidden max-w-[1180px] mx-auto rounded-[24px] mb-20 shadow-md">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#C89245]/5 blur-[80px]" />
        
        <div className="relative z-10 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2.5 max-w-lg text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold leading-tight">Hungry already?</h2>
            <p className="text-xs text-[#FFFDF8]/70 font-light">
              Order your favorites or reserve your table now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://order.zedskitchen.com/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C89245] hover:bg-[#C89245]/90 text-white uppercase font-bold text-xs tracking-wider rounded-[10px] transition-colors text-center shadow-md"
            >
              Order Now
            </a>
            <Link
              href="/reservations"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/50 hover:border-white text-white uppercase font-bold text-xs tracking-wider rounded-[10px] transition-colors text-center"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Coffee cup overlay absolute right position */}
          <div className="hidden lg:block relative w-32 h-32 scale-110 mr-4 overflow-hidden rounded-full border-4 border-white/10 shadow-lg">
            <img
              src="/images/menu_signature_latte.png"
              alt="Signature Latte Coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
