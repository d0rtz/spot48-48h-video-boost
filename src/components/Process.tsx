import speedImage from "@/assets/speed-illustration.jpg"

const Process = () => {
  const steps = [
    {
      number: 1,
      name: "Brief",
      description: "Formulario rápido con toda la información necesaria sobre tu producto/servicio.",
    },
    {
      number: 2,
      name: "Guion",
      description: "Redactamos el mensaje perfecto para captar la atención y generar acción.",
    },
    {
      number: 3,
      name: "IA + Edición",
      description: "Combinamos tecnología avanzada con toque humano profesional.",
    },
    {
      number: 4,
      name: "Entrega",
      description: "Recibe tus vídeos listos para publicar en cualquier plataforma.",
    },
  ]

  return (
    <section id="process" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestro proceso: Eficiencia garantizada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un flujo de trabajo optimizado que entrega resultados profesionales en tiempo récord
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl shadow-primary">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.name}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src={speedImage || "/placeholder.svg"}
              alt="Speed and efficiency illustration"
              className="w-full rounded-lg shadow-primary"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg" />

            {/* Floating 48h Badge */}
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-xl shadow-glow">
              48h
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
