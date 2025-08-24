"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

const PricingPlans = () => {
  const navigate = useNavigate()

  const plans = [
    {
      name: "Básico",
      price: "149€",
      originalPrice: "199€",
      id: "basico",
      features: [
        "1 Vídeo Vertical (15-20 segundos)",
        "Guion + Voz + Subtítulos",
        "Entrega en 48h",
        "Formato para redes sociales",
        "1 Revisión incluida",
      ],
      popular: false,
    },
    {
      name: "Profesional",
      price: "249€",
      originalPrice: "349€",
      id: "profesional",
      features: [
        "3 Vídeos Verticales (15-25 segundos)",
        "Guion + Voz + Subtítulos",
        "2 Rondas de Ajustes",
        "Entrega en 48h",
        "Copies listos para usar",
        "Estrategia de contenido básica",
        "Garantía de devolución",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "399€",
      originalPrice: "549€",
      id: "premium",
      features: [
        "5 Vídeos Verticales (15-30 segundos)",
        "Guion + Voz + Subtítulos profesional",
        "3 Rondas de Ajustes",
        "Entrega en 24h",
        "Copies + Estrategia completa",
        "Consultoría personalizada 1h",
        "Soporte prioritario",
        "Garantía de devolución extendida",
      ],
      popular: false,
    },
  ]

  const handleGetStarted = (planId: string) => {
    navigate(`/checkout?plan=${planId}`)
  }

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Elige tu pack perfecto</h2>
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
                  ? "shadow-primary bg-gradient-subtle border-primary border-2 transform scale-105"
                  : "shadow-elegant border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                  ⭐ MÁS POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-lg text-muted-foreground line-through mr-2">Antes {plan.originalPrice}</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{plan.price}</div>
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
                onClick={() => handleGetStarted(plan.id)}
              >
                Comenzar ahora
              </Button>

              <p className="text-xs text-muted-foreground text-center">Sin compromiso, cancelación flexible</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-8 py-4 rounded-full">
            <span className="text-2xl">🛡️</span>
            <span className="font-semibold">Garantía de satisfacción 100% • Entrega en 48h</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
