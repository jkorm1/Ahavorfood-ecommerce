"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useState, useRef } from "react";
import { toast } from "sonner";

export function CartSummary() {
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const getTotal = useCart((state) => state.getTotal);
  const clearCart = useCart((state) => state.clearCart);
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    toast.success("Order submitted! We will contact you shortly.");
    clearCart();
    setIsOpen(false);
  };

  const openCart = () => {
    setIsOpen(true);
    setTimeout(() => {
      cartRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <>
      {/* Floating Cart Button - Primary Orange */}
      <motion.button
        data-cart-button
        onClick={() => (isOpen ? setIsOpen(false) : openCart())}
        className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-primary text-primary-foreground shadow-glow-primary hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ShoppingCart className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
            {items.length}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Drawer */}
            <motion.div
              ref={cartRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-secondary/5">
                <h2
                  className="text-2xl font-bold text-secondary"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Your Order
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <ShoppingCart className="w-12 h-12 mb-4 opacity-50" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="p-4 rounded-2xl bg-background border border-border shadow-sm"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-semibold text-secondary">
                              {item.categoryName}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-destructive hover:bg-destructive hover:text-white transition-all shadow-sm hover:shadow-md"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1),
                                )
                              }
                              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs hover:bg-secondary hover:text-white transition-colors"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs hover:bg-secondary hover:text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-bold text-primary">
                            {(item.price * item.quantity).toFixed(2)} GHS
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Footer with Total */}
              {items.length > 0 && (
                <div className="border-t border-border p-6 space-y-4 bg-secondary/5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>{getTotal().toFixed(2)} GHS</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-secondary">
                      <span>Total</span>
                      <span className="text-primary">
                        {getTotal().toFixed(2)} GHS
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={handleCheckout}
                    className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 rounded-full shadow-glow-primary transition-all"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    Complete Order
                  </Button>

                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="w-full rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
                  >
                    Clear Cart
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
