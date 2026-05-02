import { Navigation } from "@/components/navigation";
import { ImpactContent } from "@/components/impact-content";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

export default function ImpactPage() {
  return (
    <main className="w-full">
      <Navigation />
      <ImpactContent />
      <Footer />
      <Toaster theme="dark" />
    </main>
  );
}
