import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Da el primer paso hoy
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Transforma tu marketing hoy mismo con vídeos que realmente venden
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Instagram Contact */}
          <Card className="p-8 bg-background/95 backdrop-blur-sm border-0">
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Solicita más información
              </h3>
              <p className="text-muted-foreground mb-6">
                Escríbenos por Instagram a @spot48.agency y te enviaremos 
                ejemplos personalizados para tu sector.
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="w-full"
                onClick={() => window.open("https://docs.google.com/forms/d/YOUR_FORM_ID/viewform?embedded=true", "_blank")}
              >
                Solicita información
              </Button>
            </div>
          </Card>
          
          {/* Schedule Call */}
          <Card className="p-8 bg-background/95 backdrop-blur-sm border-0">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Habla con nosotros
              </h3>
              <p className="text-muted-foreground mb-6">
                15 minutos para analizar tus necesidades y mostrarte cómo 
                podemos ayudarte.
              </p>
              <Button variant="default" size="lg" className="w-full">
                Agendar Llamada
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Main CTA */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="xl" 
            className="bg-background text-primary hover:bg-background/90 min-w-80 shadow-glow"
            onClick={() => window.open("https://docs.google.com/forms/d/YOUR_FORM_ID/viewform?embedded=true", "_blank")}
          >
            Comenzar ahora - Pack desde 149€
          </Button>
          <p className="text-primary-foreground/80 mt-4">
            Entrega garantizada en 48 horas • Sin compromisos
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;