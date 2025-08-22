import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import OurSolution from "@/components/OurSolution";
import PricingPlans from "@/components/PricingPlans";
import Process from "@/components/Process";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <OurSolution />
      <PricingPlans />
      <Process />
      <TrustedBy />
      <Testimonials />
      <Results />
      <FAQ />
      <CallToAction />
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
