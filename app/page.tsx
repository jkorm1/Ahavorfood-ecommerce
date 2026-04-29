import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Checkout } from "@/components/checkout";
import { Showcase } from "@/components/showcase";
import { Updates } from "@/components/updates";
import { Story } from "@/components/story";
import { Team } from "@/components/team";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Products />
      <Checkout />
      <Story />
      <Showcase />
      <Updates />
      <Team />
      <Footer />
      <Toaster theme="dark" />
    </main>
  );
}
