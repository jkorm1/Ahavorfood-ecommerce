"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    id: "classic",
    name: "Starpops Classic",
    price: 10,
    description: "Golden caramel blend",
  },
  {
    id: "pink",
    name: "Starpops Pink",
    price: 15,
    description: "Strawberry & cream blend",
  },
  {
    id: "elite",
    name: "Starpops Elite",
    price: 20,
    description: "Luxury blend with truffle",
  },
];

type Step = "product" | "quantity" | "contact" | "success";

export function OrderForm() {
  const [step, setStep] = useState<Step>("product");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    setStep("quantity");
  };

  const handleQuantityConfirm = () => {
    if (quantity > 0) {
      setStep("contact");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const product = products.find((p) => p.id === selectedProduct);

      // Prepare data in the format expected by the API: { customer: {...}, items: [...], total: ... }
      const orderData = {
        customer: {
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
        },
        items: [
          {
            id: product?.id,
            name: product?.name,
            price: product?.price,
            quantity: quantity,
          },
        ],
        total: (product?.price || 0) * quantity,
      };

      // Call the API route
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to place order");
      }

      setStep("success");
      toast.success(`Order placed successfully! ID: ${result.orderId}`);
    } catch (error) {
      console.error("Error processing order:", error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const product = products.find((p) => p.id === selectedProduct);
  const total = product ? product.price * quantity : 0;

  return (
    <section id="order" className="relative py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Order Your <span className="glow-text-pink">Magic</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps. Pure popcorn bliss.
          </p>
        </motion.div>

        {/* Step indicator */}
        <div className="flex justify-between mb-8 px-4">
          {(["product", "quantity", "contact"] as const).map((s, idx) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step === s
                    ? "bg-primary text-primary-foreground"
                    : ["product", "quantity", "contact"].indexOf(s) <
                        ["product", "quantity", "contact"].indexOf(step)
                      ? "bg-primary/50 text-foreground"
                      : "bg-card border border-border text-muted-foreground"
                }`}
              >
                {["product", "quantity", "contact"].indexOf(s) <
                ["product", "quantity", "contact"].indexOf(step) ? (
                  <Check size={20} />
                ) : (
                  idx + 1
                )}
              </div>
              {idx < 2 && (
                <div
                  className={`w-12 h-1 mx-2 ${
                    ["product", "quantity", "contact"].indexOf(s) <
                    ["product", "quantity", "contact"].indexOf(step)
                      ? "bg-primary"
                      : "bg-border"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Form container */}
        <div className="bg-card border border-border rounded-2xl p-8 min-h-96">
          <AnimatePresence mode="wait">
            {/* Step 1: Product Selection */}
            {step === "product" && (
              <motion.div
                key="product"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">Choose Your Flavor</h3>
                <div className="space-y-4">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleProductSelect(p.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        selectedProduct === p.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-lg">{p.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {p.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-xl">{p.price} GHS</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <Button
                  onClick={() => setStep("quantity")}
                  disabled={!selectedProduct}
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                >
                  Continue <ChevronRight size={20} />
                </Button>
              </motion.div>
            )}

            {/* Step 2: Quantity Selection */}
            {step === "quantity" && (
              <motion.div
                key="quantity"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">How Many Boxes?</h3>
                <div className="mb-6 p-6 bg-primary/10 rounded-xl border border-primary/30">
                  <p className="text-sm text-muted-foreground mb-2">
                    Selected: {product?.name}
                  </p>
                  <p className="text-3xl font-bold">
                    {product?.price} GHS per box
                  </p>
                </div>

                <div className="flex items-center justify-center gap-6 mb-8">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-14 h-14 rounded-lg bg-card border border-border hover:border-primary transition-colors flex items-center justify-center text-2xl font-bold"
                  >
                    −
                  </button>
                  <div className="text-center">
                    <p className="text-5xl font-bold mb-2">{quantity}</p>
                    <p className="text-muted-foreground">boxes</p>
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-14 h-14 rounded-lg bg-card border border-border hover:border-primary transition-colors flex items-center justify-center text-2xl font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total:</span>
                    <span className="text-3xl font-bold text-primary">
                      {total} GHS
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setStep("product");
                      setSelectedProduct("");
                    }}
                    className="w-full"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleQuantityConfirm}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Continue <ChevronRight size={20} />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">Delivery Details</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+233 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Delivery Address
                    </label>
                    <textarea
                      placeholder="Your full delivery address"
                      rows={3}
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Order summary */}
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 my-6">
                    <div className="space-y-2 text-sm mb-3">
                      <div className="flex justify-between">
                        <span>{product?.name}</span>
                        <span>
                          {quantity}x {product?.price} GHS
                        </span>
                      </div>
                      <div className="border-t border-primary/20 pt-2 flex justify-between font-bold">
                        <span>Total:</span>
                        <span className="text-primary text-lg">
                          {total} GHS
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep("quantity")}
                      className="w-full"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      {loading ? "Placing Order..." : "Place Order"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 4: Success */}
            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-primary" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-2">Order Placed!</h3>
                <p className="text-muted-foreground mb-6">
                  Your magical popcorn is on its way. We'll notify you soon with
                  tracking details.
                </p>

                <div className="p-4 rounded-lg bg-card border border-border mb-6 text-left">
                  <p className="text-sm text-muted-foreground mb-3">
                    Order Summary:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Item:</span>
                      <span className="font-bold">{product?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span className="font-bold">{quantity} boxes</span>
                    </div>
                    <div className="flex justify-between text-primary">
                      <span>Total:</span>
                      <span className="font-bold">{total} GHS</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setStep("product");
                    setSelectedProduct("");
                    setQuantity(1);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      address: "",
                    });
                  }}
                  className="bg-primary hover:bg-primary/90"
                >
                  Order Again
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
