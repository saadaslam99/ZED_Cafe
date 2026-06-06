"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { CAFE_METADATA } from "@/config/cafe";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2B1E16] text-[#FFFDF8]/90 pt-16 pb-24 md:pb-12 border-t border-[#C89245]/20 font-sans">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1: Logo & tag */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-md shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="ZK Logo"
                  className="w-full h-full object-cover"
                  style={{
                    filter: "invert(1) brightness(1.2)",
                    mixBlendMode: "screen"
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-widest text-[#FFFDF8] uppercase leading-none">
                  {CAFE_METADATA.name}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#C89245] font-semibold mt-1 pl-0.5">
                  Coffee & Comfort
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#FFFDF8]/50 leading-relaxed font-light">
              Good Coffee. Great Food. Better Moments.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#C89245]">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-[#FFFDF8]/70 font-light">
              <li>
                <Link href="/" className="hover:text-[#C89245] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="https://order.zedskitchen.com/" target="_blank" rel="noreferrer" className="hover:text-[#C89245] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C89245] transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#C89245]">Information</h4>
            <ul className="space-y-2.5 text-xs text-[#FFFDF8]/70 font-light">
              <li>
                <Link href="/reservations" className="hover:text-[#C89245] transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C89245] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@zhousecafe.pk" className="hover:text-[#C89245] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="#" className="hover:text-[#C89245] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#C89245]">Follow Us</h4>
            <div className="flex space-x-3 pt-1">
              {/* Instagram */}
              <a
                href={CAFE_METADATA.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-[#C89245] text-[#FFFDF8]/80 hover:text-[#C89245] rounded-full transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href={CAFE_METADATA.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-[#C89245] text-[#FFFDF8]/80 hover:text-[#C89245] rounded-full transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CAFE_METADATA.socials.whatsappDefault.replace(/\+/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-[#C89245] text-[#FFFDF8]/80 hover:text-[#C89245] rounded-full transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 5: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#C89245]">Contact Us</h4>
            <div className="space-y-3.5 text-xs text-[#FFFDF8]/70 font-light">
              <a
                href="tel:03262220888"
                className="flex items-center gap-2 hover:text-[#C89245] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89245]" />
                <span>0326-2220888</span>
              </a>
              <a
                href="mailto:hello@zhousecafe.pk"
                className="flex items-center gap-2 hover:text-[#C89245] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C89245]" />
                <span>hello@zhousecafe.pk</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C89245] shrink-0 mt-0.5" />
                <span>Mansoor Tower, Clifton, Karachi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFFDF8]/40">
          <p>&copy; {new Date().getFullYear()} {CAFE_METADATA.name} Café. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 mt-4 sm:mt-0 text-[#FFFDF8]/50 hover:text-[#C89245] transition-colors font-medium cursor-pointer"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
