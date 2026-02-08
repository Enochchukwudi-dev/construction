import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-4";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntegrationsSection />
      <Features />
      <FAQsThree />
      <FooterSection />
    </>
  );
}
