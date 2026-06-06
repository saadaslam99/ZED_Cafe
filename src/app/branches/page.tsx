"use client";

import React from "react";
import Link from "next/link";
import { BRANCHES } from "@/config/cafe";
import { MapPin, Phone, Clock, Compass, Coffee, ShieldAlert, Sparkles, Wifi } from "lucide-react";

export default function BranchesPage() {
  const getBranchImage = (id: string) => {
    if (id === "dha-phase-6") {
      return "/images/hero_bg.png";
    }
    return "/images/ambiance_cozy_corner.png";
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-gold font-bold">Outlets</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-espresso">Our Branches</h1>
        <div className="w-12 h-0.5 bg-gold mx-auto" />
        <p className="text-xs md:text-sm text-espresso/60 font-light leading-relaxed">
          Z House Café has multiple spots in Karachi, each carrying our signature warm vibe, comfy workspaces, and freshly ground craft espresso. Find the nearest branch.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {BRANCHES.map((b) => (
          <div
            key={b.id}
            className="bg-off-white rounded-lg overflow-hidden border border-gold-light/15 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow"
          >
            <div>
              {/* Branch photo */}
              <div className="h-60 overflow-hidden relative">
                <img
                  src={getBranchImage(b.id)}
                  alt={b.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-espresso/90 text-gold text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-gold/20">
                  {b.id === "dha-phase-6" ? "Main Outlet" : "Boutique Space"}
                </span>
              </div>

              {/* Branch Info */}
              <div className="p-6 space-y-4">
                <h2 className="font-serif text-2xl font-bold text-espresso">{b.name}</h2>
                <div className="space-y-2.5 text-xs md:text-sm text-espresso/75 font-light">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-gold shrink-0" />
                    <span>{b.hours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    <a
                      href={`tel:${b.phone.replace(/\s+/g, "")}`}
                      className="hover:underline font-semibold text-espresso"
                    >
                      {b.phone}
                    </a>
                  </div>
                </div>

                {/* Services list */}
                <div className="space-y-1.5 pt-3 border-t border-espresso/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-espresso/45 block">
                    Available Services
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {b.services.map((service) => (
                      <span
                        key={service}
                        className="bg-espresso/5 text-espresso/85 text-[10px] py-1 px-2.5 rounded-md font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {(b.instagram || b.coworkingMaps) && (
                  <div className="space-y-1.5 pt-3 border-t border-espresso/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-espresso/45 block">
                      Connect & Space
                    </span>
                    <div className="flex gap-4 pt-0.5 text-xs font-semibold uppercase tracking-wider">
                      {b.instagram && (
                        <a
                          href={b.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gold hover:text-espresso transition-colors"
                        >
                          Instagram
                        </a>
                      )}
                      {b.instagram && b.coworkingMaps && (
                        <span className="text-espresso/20 font-light">•</span>
                      )}
                      {b.coworkingMaps && (
                        <a
                          href={b.coworkingMaps}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gold hover:text-espresso transition-colors"
                        >
                          Coworking Space
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 grid grid-cols-3 gap-2">
              <a
                href={b.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="text-center py-2.5 border border-[#2B1E16]/20 text-[#2B1E16] hover:bg-[#2B1E16]/5 text-xs font-semibold uppercase tracking-wider rounded-[10px] transition-colors"
              >
                Directions
              </a>
              {b.orderOnline ? (
                <a
                  href={b.orderOnline}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center py-2.5 bg-[#C89245] hover:bg-[#C89245]/90 text-white text-xs font-semibold uppercase tracking-wider rounded-[10px] transition-colors"
                >
                  Order Online
                </a>
              ) : (
                <Link
                  href={`/menu?branch=${b.id}`}
                  className="text-center py-2.5 bg-[#C89245] hover:bg-[#C89245]/90 text-white text-xs font-semibold uppercase tracking-wider rounded-[10px] transition-colors"
                >
                  Order Online
                </Link>
              )}
              <Link
                href={`/reservations?branch=${b.id}`}
                className="text-center py-2.5 border border-[#C89245] text-[#C89245] hover:bg-[#C89245] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-[10px] transition-colors animate-fade-in"
              >
                Book Table
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Safety / Working Hours Disclaimer */}
      <div className="max-w-2xl mx-auto p-5 bg-espresso/5 border border-espresso/10 rounded-lg flex gap-3 text-xs text-espresso/70 leading-relaxed items-start">
        <Wifi className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-semibold text-espresso">Co-Working Protocol</h4>
          <p className="font-light">
            All tables are equipped with high-speed Wi-Fi (50Mbps fiber link) and dedicated 3-pin power outlets. We support students, freelancers, and remote teams. No hourly charges or seat limits apply, but purchasing beverages or meals periodically is kindly encouraged.
          </p>
        </div>
      </div>
    </div>
  );
}
