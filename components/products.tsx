"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import Image from "next/image";

const products = [
  {
    id: "tombrown",
    name: "Ahavor Tombrown",
    price: 25,
    image: "/tombuy.png",
    description:
      "Made with Soya Beans, Wheat, and Rice. A nutritious blend for a healthy start to your day.",
    // flavors array is no longer needed
  },
];

export function Products() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    tombrown: 1,
  });

  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (product: (typeof products)[0]) => {
    const item = {
      id: `${product.id}-${Date.now()}`,
      category: product.id as "tombrown" | "oat",
      categoryName: product.name,
      price: product.price,
      // Removed flavor property
      quantity: quantities[product.id],
    };

    addItem(item);
    toast.success(`Added ${quantities[product.id]}x ${product.name} to cart!`);
    setQuantities({ ...quantities, [product.id]: 1 });
  };

  return (
    <section id="products" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 text-secondary"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Our <span className="text-primary">Products</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Nourishing Lives. Empowering Futures.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Card - Always Visible */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <motion.div
            className="relative h-80 cursor-pointer overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 rounded-3xl group shadow-sm"
            onClick={() => {
              const orderForm = document.getElementById("order-form");
              if (orderForm) {
                orderForm.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }}
          >
            <Image
              src={products[0].image}
              alt={products[0].name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-secondary/10 to-transparent flex flex-col justify-end p-6">
              <h3
                className="text-3xl font-bold text-secondary mb-2"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {products[0].name}
              </h3>
              <p className="text-primary text-2xl font-bold mb-2">
                GHS {products[0].price.toFixed(2)}
              </p>

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-3 flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <span className="text-white font-bold text-sm">
                  Click to Order
                </span>
                <svg
                  className="w-4 h-4 text-white animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Product Description */}
          <div className="mt-4 p-4 bg-card rounded-2xl border border-border shadow-sm">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              {products[0].description}
            </p>
          </div>
        </motion.div>

        {/* Order Form - Always Visible */}
        <motion.div className="flex flex-col">
          <Card
            id="order-form"
            className="p-6 bg-card border-2 border-primary/40 space-y-5 rounded-3xl shadow-md h-full"
          >
            {/* Product Info */}
            <div className="text-center mb-4">
              <h3
                className="text-2xl font-bold text-secondary mb-2"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {products[0].name}
              </h3>
              <p className="text-accent text-xl font-bold">
                GHS {products[0].price.toFixed(2)}
              </p>
            </div>

            {/* Flavor Selection Removed */}

            {/* Quantity Selection */}
            <div>
              <label className="text-sm font-bold text-secondary block mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setQuantities({
                      ...quantities,
                      [products[0].id]: Math.max(
                        1,
                        quantities[products[0].id] - 1,
                      ),
                    })
                  }
                  className="w-10 h-10 rounded-full bg-muted border border-border hover:bg-secondary hover:text-white font-bold transition-colors"
                >
                  -
                </button>
                <Input
                  type="number"
                  value={quantities[products[0].id]}
                  onChange={(e) =>
                    setQuantities({
                      ...quantities,
                      [products[0].id]: Math.max(
                        1,
                        parseInt(e.target.value) || 1,
                      ),
                    })
                  }
                  className="text-center flex-1 font-semibold rounded-full border-border focus:border-primary"
                  min="1"
                />
                <button
                  onClick={() =>
                    setQuantities({
                      ...quantities,
                      [products[0].id]: quantities[products[0].id] + 1,
                    })
                  }
                  className="w-10 h-10 rounded-full bg-muted border border-border hover:bg-secondary hover:text-white font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Item Total */}
            <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">
                Item Total
              </p>
              <p className="text-2xl font-bold text-primary">
                GHS{" "}
                {(products[0].price * quantities[products[0].id]).toFixed(2)}
              </p>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={() => handleAddToCart(products[0])}
              className="w-full bg-primary hover:bg-primary/90 font-bold py-6 rounded-full shadow-glow-primary transition-all"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Add to Cart
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
