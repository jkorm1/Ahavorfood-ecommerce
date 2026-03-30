"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navigation() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Added rounded-full, object-cover, and forced square dimensions */}
          <img
            src="/logo.jpg"
            alt="Starpops Logo"
            className="h-10 w-10 rounded-full object-cover border border-yellow-500/50"
          />
          <div className="text-2xl font-bold glow-text-gold tracking-tighter">
            STARPOPS
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleScroll("products")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => handleScroll("story")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Story
          </button>
          <button
            onClick={() => handleScroll("team")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Team
          </button>
          <Button
            onClick={() => handleScroll("order")}
            className="bg-primary hover:bg-primary/90"
          >
            Order Now
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            onClick={() => handleScroll("order")}
            className="bg-primary hover:bg-primary/90 text-sm"
          >
            Order
          </Button>
        </div>
      </div>
    </nav>
  );
}
