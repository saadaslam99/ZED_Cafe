"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem, BRANCHES, Branch } from "@/config/cafe";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export type OrderType = "delivery" | "takeaway" | "dine-in";

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  selectedBranch: Branch;
  setSelectedBranchById: (id: string) => void;
  orderType: OrderType;
  setOrderType: (type: OrderType) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<Branch>(BRANCHES[0]);
  const [orderType, setOrderType] = useState<OrderType>("takeaway");

  // Load cart and settings from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("zh_cart");
    const savedBranch = localStorage.getItem("zh_branch");
    const savedOrderType = localStorage.getItem("zh_ordertype");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse saved cart", e);
      }
    }
    if (savedBranch) {
      const branch = BRANCHES.find((b) => b.id === savedBranch);
      if (branch) setSelectedBranch(branch);
    }
    if (savedOrderType) {
      setOrderType(savedOrderType as OrderType);
    }
  }, []);

  // Save changes to local storage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("zh_cart", JSON.stringify(newCart));
  };

  const addToCart = (item: MenuItem) => {
    const existing = cart.find((i) => i.item.id === item.id);
    if (existing) {
      const updated = cart.map((i) =>
        i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      saveCart(updated);
    } else {
      saveCart([...cart, { item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: string) => {
    const updated = cart.filter((i) => i.item.id !== itemId);
    saveCart(updated);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    const updated = cart.map((i) =>
      i.item.id === itemId ? { ...i, quantity } : i
    );
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const setSelectedBranchById = (id: string) => {
    const branch = BRANCHES.find((b) => b.id === id);
    if (branch) {
      setSelectedBranch(branch);
      localStorage.setItem("zh_branch", id);
    }
  };

  const setOrderTypeState = (type: OrderType) => {
    setOrderType(type);
    localStorage.setItem("zh_ordertype", type);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        selectedBranch,
        setSelectedBranchById,
        orderType,
        setOrderType: setOrderTypeState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
