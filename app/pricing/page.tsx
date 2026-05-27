import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Header />
      <div className="pt-20">
        <Pricing />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
