"use client";

import React from "react";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRANCHES } from "@/config/cafe";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartCount,
    selectedBranch,
    setSelectedBranchById,
    orderType,
    setOrderType,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        {/* Drawer Panel */}
        <div className="w-screen max-w-md bg-off-white shadow-xl flex flex-col border-l border-gold-light/20">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gold-light/10 flex items-center justify-between bg-espresso text-cream">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <h2 className="text-lg font-semibold tracking-wide">Your Order ({cartCount})</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-full transition-colors text-cream"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Settings Section (Branch & Service Type) */}
          <div className="px-6 py-4 bg-cream/60 border-b border-gold-light/10 space-y-3">
            <div>
              <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-1.5">
                Select Branch
              </label>
              <select
                value={selectedBranch.id}
                onChange={(e) => setSelectedBranchById(e.target.value)}
                className="w-full text-sm py-2 px-3 bg-off-white border border-gold-light/30 rounded-md focus:outline-none focus:border-gold text-espresso font-medium"
              >
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-1.5">
                Order Type
              </label>
              <div className="grid grid-cols-3 gap-1 p-0.5 bg-espresso/5 rounded-md">
                {(["takeaway", "delivery", "dine-in"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`text-xs py-1.5 rounded-md capitalize font-medium transition-all ${
                      orderType === type
                        ? "bg-espresso text-cream shadow-xs"
                        : "text-espresso/70 hover:text-espresso"
                    }`}
                  >
                    {type === "dine-in" ? "Dine-In" : type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-gold-light/50 stroke-1" />
                <p className="text-espresso/60 font-medium">Your cart is empty.</p>
                <Link
                  href="/menu"
                  onClick={onClose}
                  className="inline-block text-xs font-semibold tracking-wider uppercase bg-[#2B1E16] text-[#FFFDF8] px-4 py-2.5 rounded-[10px] hover:bg-[#2B1E16]/90 transition-colors"
                >
                  Browse Menu
                </Link>
              </div>
            ) : (
              cart.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-3 border-b border-espresso/5 last:border-none"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border border-gold-light/10"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-espresso truncate">{item.name}</h4>
                    <p className="text-xs text-espresso/60 mt-0.5">Rs. {item.price}</p>
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2.5 mt-2">
                      <div className="flex items-center border border-gold-light/30 rounded bg-off-white">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="p-1 hover:bg-espresso/5 transition-colors text-espresso/70"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-espresso">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="p-1 hover:bg-espresso/5 transition-colors text-espresso/70"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-espresso/40 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-espresso">
                      Rs. {item.price * quantity}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-gold-light/20 px-6 py-6 bg-cream/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-espresso/80">Subtotal</span>
                <span className="text-lg font-bold text-espresso">Rs. {cartTotal}</span>
              </div>
              <p className="text-xs text-espresso/50 leading-normal">
                Tax and delivery calculated at checkout.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={onClose}
                  className="w-full text-center border border-[#2B1E16]/20 text-[#2B1E16] hover:bg-[#2B1E16]/5 text-sm font-semibold py-3 rounded-[10px] transition-colors cursor-pointer"
                >
                  Continue Browsing
                </button>
                <Link
                  href="/order"
                  onClick={onClose}
                  className="w-full text-center bg-[#C89245] hover:bg-[#C89245]/90 text-white text-sm font-semibold py-3 rounded-[10px] transition-all shadow-xs flex items-center justify-center gap-1.5"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
