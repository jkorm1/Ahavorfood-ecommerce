"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";

export function Navigation() {
  const items = useCart((state) => state.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    handleScroll("checkout");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary/90 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Ahavor Logo Placeholder */}
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white/50">
            <img
              src="/logo.png"
              alt="Ahavor Foods Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="text-2xl font-bold text-secondary-foreground tracking-tighter"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Ahavor Foods
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleScroll("products")}
            className="text-sm font-medium text-white/90 hover:text-secondary-foreground hover:bg-secondary/20 px-3 py-2 rounded-full transition-all"
          >
            Products
          </button>
          <button
            onClick={() => handleScroll("story")}
            className="text-sm font-medium text-white/90 hover:text-secondary-foreground hover:bg-secondary/20 px-3 py-2 rounded-full transition-all"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("showcase")}
            className="text-sm font-medium text-white/90 hover:text-secondary-foreground hover:bg-secondary/20 px-3 py-2 rounded-full transition-all"
          >
            Showcase
          </button>
          <button
            onClick={() => handleScroll("updates")}
            className="text-sm font-medium text-white/90 hover:text-secondary-foreground hover:bg-secondary/20 px-3 py-2 rounded-full transition-all"
          >
            Updates
          </button>
          <button
            onClick={() => handleScroll("team")}
            className="text-sm font-medium text-white/90 hover:text-secondary-foreground hover:bg-secondary/20 px-3 py-2 rounded-full transition-all"
          >
            Team
          </button>
          <Button
            onClick={() => handleScroll("products")}
            className="bg-secondary hover:bg-secondary/90 text-sm px-4 py-2 rounded-full glow-secondary"
          >
            Order Now
          </Button>
          <button
            onClick={handleCartClick}
            className="relative p-2 rounded-full hover:text-secondary-foreground hover:bg-secondary/20 text-white transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                {items.length}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleCartClick}
            className="relative p-2 rounded-full hover-bg-nature text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover-bg-nature text-white transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary border-b border-white/10 shadow-xl"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            <button
              onClick={() => handleScroll("products")}
              className="text-left text-sm font-medium text-white/90 hover-text-nature hover-bg-nature px-3 py-2 rounded-full transition-all"
            >
              Products
            </button>
            <button
              onClick={() => handleScroll("story")}
              className="text-left text-sm font-medium text-white/90 hover-text-nature hover-bg-nature px-3 py-2 rounded-full transition-all"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("showcase")}
              className="text-left text-sm font-medium text-white/90 hover-text-nature hover-bg-nature px-3 py-2 rounded-full transition-all"
            >
              Showcase
            </button>
            <button
              onClick={() => handleScroll("updates")}
              className="text-left text-sm font-medium text-white/90 hover-text-nature hover-bg-nature px-3 py-2 rounded-full transition-all"
            >
              Updates
            </button>
            <button
              onClick={() => handleScroll("team")}
              className="text-left text-sm font-medium text-white/90 hover-text-nature hover-bg-nature px-3 py-2 rounded-full transition-all"
            >
              Team
            </button>
            <Button
              onClick={() => handleScroll("products")}
              className="bg-secondary hover:bg-secondary/90 text-sm w-full rounded-full glow-secondary"
            >
              Order Now
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
