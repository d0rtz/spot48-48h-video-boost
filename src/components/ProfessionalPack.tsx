import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProfessionalPack = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pack Profesional
          </h2>
          <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
            149€
          </div>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas para impulsar tu marketing
          </p>
        </div>
        
        <Card className="p-8 md:p-12 shadow-primary bg-gradient-subtle border-primary/20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <span className="text-lg font-medium text-foreground">
                3 Vídeos Verticales (15-25 segundos cada uno)
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <span className="text-lg font-medium text-foreground">
                Copies Listos para Usar
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <span className="text-lg font-medium text-foreground">
                1 Ronda de Ajustes
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <span className="text-lg font-medium text-foreground">
                Garantía de Devolución
              </span>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="cta" size="xl" className="min-w-80">
              Empezar Ahora - 149€
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Entrega garantizada en 48 horas
            </p>
          </div>
        </Card>
        
        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <span className="text-2xl">🛡️</span>
            <span className="font-semibold">Garantía de satisfacción 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPack;