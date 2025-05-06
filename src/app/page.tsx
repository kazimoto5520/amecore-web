import HeroSection from "@/components/hero-section";
import LatestProjects from "@/components/latest-projects";
import ProcessSection from "@/components/process-section";
import SponsorSection from "@/components/sponsor-section";


export default function Home() {
  return (
    <>
     <HeroSection />
     <ProcessSection />
     <LatestProjects />
     <SponsorSection />
     
    </>
  );
}