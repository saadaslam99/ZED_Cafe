"use client";

import React, { useEffect } from "react";
import { ShoppingBag } from "lucide-react";

export default function MenuPage() {
  useEffect(() => {
    window.location.replace("https://order.zedskitchen.com/");
  }, []);

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center font-sans py-20 px-6 text-center text-[#2B1E16]">
      <div className="max-w-md space-y-5">
        <div className="w-16 h-16 bg-[#C89245]/10 rounded-full flex items-center justify-center mx-auto text-[#C89245]">
          <ShoppingBag className="w-8 h-8 animate-pulse" />
        </div>
        <h1 className="font-serif text-3xl font-bold">Opening Menu...</h1>
        <p className="text-sm text-[#2B1E16]/60 leading-relaxed">
          We are taking you to our online ordering platform. If the redirect does not happen automatically, please{" "}
          <a href="https://order.zedskitchen.com/" className="text-[#C89245] hover:underline font-bold">
            click here
          </a>.
        </p>
      </div>
    </div>
  );
}
