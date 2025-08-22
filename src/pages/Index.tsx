import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import OurSolution from "@/components/OurSolution";
import ProfessionalPack from "@/components/ProfessionalPack";
import Process from "@/components/Process";
import Results from "@/components/Results";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <OurSolution />
      <ProfessionalPack />
      <Process />
      <Results />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
