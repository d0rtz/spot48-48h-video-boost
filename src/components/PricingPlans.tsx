import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PricingPlans = () => {
  const plans = [
    {
      name: "Básico",
      price: "99€",
      features: [
        "1 Vídeo Vertical (15-20 segundos)",
        "Guion + Voz + Subtítulos",
        "Entrega en 48h",
        "Formato para redes sociales"
      ],
      popular: false
    },
    {
      name: "Profesional",
      price: "149€",
      features: [
        "3 Vídeos Verticales (15-25 segundos)",
        "Guion + Voz + Subtítulos",
        "1 Ronda de Ajustes",
        "Entrega en 48h",
        "Copies listos para usar",
        "Garantía de devolución"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "249€",
      features: [
        "5 Vídeos Verticales (15-30 segundos)",
        "Guion + Voz + Subtítulos",
        "2 Rondas de Ajustes",
        "Entrega en 24h",
        "Copies + Estrategia de contenido",
        "Soporte prioritario",
        "Garantía de devolución"
      ],
      popular: false
    }
  ];

  const handleGetStarted = (planName: string) => {
    window.open("https://docs.google.com/forms/d/YOUR_FORM_ID/viewform?embedded=true", "_blank");
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Elige tu pack perfecto
          </h2>
          <p className="text-xl text-muted-foreground">
            Planes diseñados para impulsar tu marketing al siguiente nivel
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.popular 
                  ? 'shadow-primary bg-gradient-subtle border-primary border-2 transform scale-105' 
                  : 'shadow-elegant border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                  ⭐ MÁS POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">Pago único</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={plan.popular ? "cta" : "default"} 
                size="lg" 
                className="w-full mb-4"
                onClick={() => handleGetStarted(plan.name)}
              >
                Comenzar ahora
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Sin compromiso, cancelación flexible
              </p>
            </Card>
          ))}
        </div>
        
        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-8 py-4 rounded-full">
            <span className="text-2xl">🛡️</span>
            <span className="font-semibold">Garantía de satisfacción 100% • Entrega en 48h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;