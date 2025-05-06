import HeroSection from "@/components/hero-section";
import LatestProjects from "@/components/latest-projects";
import ProcessSection from "@/components/process-section";
import ServicesSection from "@/components/services-section";
import SponsorSection from "@/components/sponsor-section";


export default function Home() {
  return (
    <>
     <HeroSection />
     <ProcessSection />
     <LatestProjects />
     <ServicesSection />
     <SponsorSection />
    </>
  );
}