import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-video-production.jpg";
import ParticleBackground from "./ParticleBackground";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20">
      {/* Background with Particles */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional video production studio" className="w-full h-full object-cover opacity-5" />
        <ParticleBackground />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Spot48
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-foreground mb-4">
            Vídeos que venden en 48h
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforma tu presencia digital con vídeos profesionales creados en tiempo récord 
            para impulsar tus resultados de marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-64 animate-pulse-glow">
              Comienza ahora
            </Button>
            <a href="https://instagram.com/spot48.agency" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="xl" className="min-w-64">
                Instagram
              </Button>
            </a>
          </div>
        </div>
        
        {/* Stats Preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">48h</div>
            <div className="text-muted-foreground">Entrega garantizada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">149€</div>
            <div className="text-muted-foreground">Pack completo</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">3X</div>
            <div className="text-muted-foreground">Más eficiente</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;