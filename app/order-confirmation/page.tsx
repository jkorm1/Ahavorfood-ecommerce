import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, MapPin } from "lucide-react";
import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4 py-12">
      <div className="w-full max-w-lg space-y-8 text-center">
        {/* Success Icon with Animation */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 shadow-lg shadow-primary/20 animate-in zoom-in duration-500">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>

        <div className="space-y-4">
          <h1
            className="text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thank you for choosing Ahavor Foods. We are getting your Tombrown
            ready for dispatch.
          </p>
        </div>

        {/* Reassurance Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-3xl border border-border bg-card p-4 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-secondary">Packed Fresh</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-3xl border border-border bg-card p-4 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Truck className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-secondary">Fast Delivery</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-3xl border border-border bg-card p-4 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-secondary">To Your Door</p>
          </div>
        </div>

        {/* Payment Info Box */}
        <div className="rounded-3xl bg-secondary/5 border border-secondary/20 p-6 text-left">
          <div className="flex items-start space-x-3">
            <div className="mt-1 rounded-full bg-secondary/20 p-1">
              <Truck className="h-4 w-4 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-secondary">
                Payment on Delivery
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Relax! You only pay when your nutritious Tombrown arrives safely
                at your doorstep. We will contact you shortly to confirm
                delivery details.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          asChild
          size="lg"
          className="w-full text-lg font-bold shadow-glow-primary bg-primary hover:bg-primary/90 rounded-full transition-all"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
