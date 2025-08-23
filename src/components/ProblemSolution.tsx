const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problem Side */}
          <div className="space-y-6 md:space-y-8 flex flex-col">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-destructive mb-4 md:mb-6">El Problema</h3>
            </div>

            <div className="space-y-4 md:space-y-6 flex-1 flex flex-col justify-between">
              <div className="group p-4 md:p-6 bg-muted/30 hover:bg-muted/50 rounded-xl border-l-4 border-destructive transition-all duration-300 hover:shadow-lg hover:translate-x-1">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-destructive transition-colors">
                  Contenido estático sin&nbsp;gancho
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Las imágenes fijas ya no captan la atención en un mundo digital saturado de estímulos visuales.
                </p>
              </div>

              <div className="group p-4 md:p-6 bg-muted/30 hover:bg-muted/50 rounded-xl border-l-4 border-destructive transition-all duration-300 hover:shadow-lg hover:translate-x-1">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-destructive transition-colors">
                  Vídeos lentos y&nbsp;caros
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  La producción tradicional requiere semanas y presupuestos elevados que no todas las empresas pueden
                  permitirse.
                </p>
              </div>

              <div className="group p-4 md:p-6 bg-muted/30 hover:bg-muted/50 rounded-xl border-l-4 border-destructive transition-all duration-300 hover:shadow-lg hover:translate-x-1">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-destructive transition-colors">
                  Scroll infinito
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Tienes menos de 3&nbsp;segundos para captar la atención antes de que el usuario pase al siguiente
                  contenido.
                </p>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-6 md:space-y-8 flex flex-col">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">La Oportunidad</h3>
            </div>

            <div className="space-y-4 md:space-y-6 flex-1 flex flex-col justify-between">
              <div className="group p-4 md:p-6 bg-primary/5 hover:bg-primary/10 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-x-1">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Velocidad de producción sin&nbsp;precedentes
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Entrega en 48&nbsp;horas con calidad profesional garantizada.
                </p>
              </div>

              <div className="group p-4 md:p-6 bg-primary/5 hover:bg-primary/10 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-x-1">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Costes significativamente reducidos
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Pack completo por solo 149€, una fracción del coste tradicional.
                </p>
              </div>

              <div className="group p-4 md:p-6 bg-primary/5 hover:bg-primary/10 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-x-1">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Escalabilidad para múltiples&nbsp;canales
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Contenido optimizado para todas las plataformas digitales.
                </p>
              </div>

              <div className="group p-4 md:p-6 bg-primary/5 hover:bg-primary/10 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-x-1">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Mayor engagement y&nbsp;conversión
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Hasta 3x más alcance orgánico y 47% mayor conversión.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex justify-center">
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
