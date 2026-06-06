"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Phone, MapPin, Calendar, Compass } from "lucide-react";
import { useCart } from "@/context/CartContext";
// import { CartDrawer } from "./CartDrawer";
import { CAFE_METADATA } from "@/config/cafe";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { cartCount, selectedBranch } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll listener for glass blur transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", path: "https://order.zedskitchen.com/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reservations", path: "/reservations" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => pathname === path;
  const isHomePage = pathname === "/";

  // Compute header style classes based on state
  const headerClasses = isHomePage
    ? hasScrolled
      ? "fixed top-0 w-full z-40 transition-all duration-500 bg-[#2B1E16]/90 backdrop-blur-lg border-b border-[#C89245]/20 text-[#FFFDF8]"
      : "fixed top-0 w-full z-40 transition-all duration-500 bg-transparent text-[#FFFDF8] border-b border-transparent"
    : "sticky top-0 w-full z-40 bg-[#2B1E16] text-[#FFFDF8] border-b border-[#C89245]/20";

  return (
    <>
      <header className={`${headerClasses} h-20 flex items-center justify-between font-sans`}>
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
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
                <span className="font-serif text-xl font-bold tracking-widest uppercase leading-none">
                  {CAFE_METADATA.name}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#C89245] font-semibold mt-1 pl-0.5">
                  Coffee & Comfort
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isExternal = link.path.startsWith("http");
              const classes = `text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#C89245] ${
                isActive(link.path) ? "text-[#C89245] font-semibold" : "text-[#FFFDF8]/80"
              }`;
              return isExternal ? (
                <a key={link.name} href={link.path} target="_blank" rel="noreferrer" className={classes}>
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} href={link.path} className={classes}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions (CTA) - Cart Removed as requested */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Order Now CTA */}
            <a
              href="https://order.zedskitchen.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C89245] text-white rounded-md hover:bg-[#C89245]/90 transition-all duration-300"
            >
              Order Now
            </a>
          </div>

          {/* Mobile buttons - Cart Removed as requested */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#FFFDF8] hover:text-[#C89245] focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#2B1E16] border-b border-[#C89245]/20 px-4 pt-2 pb-6 space-y-3 shadow-md animate-fade-in md:hidden">
            {navLinks.map((link) => {
              const isExternal = link.path.startsWith("http");
              const classes = `block px-3 py-2.5 text-base font-medium uppercase tracking-wide rounded-md ${
                isActive(link.path)
                  ? "bg-[#C89245]/15 text-[#C89245] font-semibold"
                  : "text-[#FFFDF8]/80 hover:bg-[#FFFDF8]/5 hover:text-[#C89245]"
              }`;
              return isExternal ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={classes}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={classes}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#FFFDF8]/10">
              <a
                href="https://order.zedskitchen.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-3 bg-[#C89245] text-white uppercase font-semibold text-sm rounded-md tracking-wider"
              >
                Order Online
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Mobile Bottom Navigation Bar (High Conversion: Order | Call | Directions) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#2B1E16] text-[#FFFDF8] border-t border-[#C89245]/25 grid grid-cols-3 md:hidden text-center select-none shadow-lg py-2 px-1 font-sans">
        <a
          href="https://order.zedskitchen.com/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#C89245] hover:text-[#C89245]/90 transition-colors"
        >
          <ShoppingBag className="w-4.5 h-4.5 text-[#C89245]" />
          <span className="text-[10px] mt-1 font-semibold">Order Online</span>
        </a>
        <a
          href={`tel:${selectedBranch.phone.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center py-1 text-[#FFFDF8]/70 hover:text-[#C89245] transition-colors"
        >
          <Phone className="w-4.5 h-4.5" />
          <span className="text-[10px] mt-1 font-medium">Call</span>
        </a>
        <a
          href={selectedBranch.googleMaps}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#FFFDF8]/70 hover:text-[#C89245] transition-colors"
        >
          <Compass className="w-4.5 h-4.5" />
          <span className="text-[10px] mt-1 font-medium">Directions</span>
        </a>
      </div>

      {/* Cart Drawer - commented out as requested */}
      {/* <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} /> */}
    </>
  );
};
