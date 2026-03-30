import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, MapPin } from "lucide-react";
import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4 py-12">
      <div className="w-full max-w-lg space-y-8 text-center">
        {/* Success Icon with Animation */}
        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 shadow-lg shadow-primary/20 animate-in zoom-in duration-500">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thank you for choosing Starpops. We are getting your order ready for
            dispatch.
          </p>
        </div>

        {/* Reassurance Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium">Packed Fresh</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Truck className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium">Fast Delivery</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium">To Your Door</p>
          </div>
        </div>

        {/* Payment Info Box */}
        <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-left">
          <div className="flex items-start space-x-3">
            <div className="mt-1 rounded-full bg-primary/20 p-1">
              <Truck className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Payment on Delivery
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Relax! You only pay when your delicious popcorn arrives safely
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
          className="w-full text-lg shadow-lg shadow-primary/25"
        >
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
