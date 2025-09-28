import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { TradingSection } from "@/components/ui/trading-section";
import { CommunitySection } from "@/components/ui/community-section";
import { CtaSection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TradingSection />
      <CommunitySection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
