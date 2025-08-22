const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            El problema vs. La oportunidad
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem Side */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-accent mb-6">❌ El Problema</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-muted/50 rounded-lg border-l-4 border-destructive">
                <h4 className="font-semibold text-foreground mb-2">
                  Contenido estático sin gancho
                </h4>
                <p className="text-muted-foreground">
                  Las imágenes fijas ya no captan la atención en un mundo digital 
                  saturado de estímulos visuales.
                </p>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg border-l-4 border-destructive">
                <h4 className="font-semibold text-foreground mb-2">
                  Vídeos lentos y caros
                </h4>
                <p className="text-muted-foreground">
                  La producción tradicional requiere semanas y presupuestos elevados 
                  que no todas las empresas pueden permitirse.
                </p>
              </div>
              
              <div className="p-6 bg-muted/50 rounded-lg border-l-4 border-destructive">
                <h4 className="font-semibold text-foreground mb-2">
                  Scroll infinito
                </h4>
                <p className="text-muted-foreground">
                  Tienes menos de 3 segundos para captar la atención antes de que 
                  el usuario pase al siguiente contenido.
                </p>
              </div>
            </div>
          </div>
          
          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-6">✅ La Oportunidad</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary shadow-elegant">
                <h4 className="font-semibold text-foreground mb-2">
                  Velocidad de producción sin precedentes
                </h4>
                <p className="text-muted-foreground">
                  Entrega en 48 horas con calidad profesional garantizada.
                </p>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary shadow-elegant">
                <h4 className="font-semibold text-foreground mb-2">
                  Costes significativamente reducidos
                </h4>
                <p className="text-muted-foreground">
                  Pack completo por solo 149€, una fracción del coste tradicional.
                </p>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary shadow-elegant">
                <h4 className="font-semibold text-foreground mb-2">
                  Escalabilidad para múltiples canales
                </h4>
                <p className="text-muted-foreground">
                  Contenido optimizado para todas las plataformas digitales.
                </p>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary shadow-elegant">
                <h4 className="font-semibold text-foreground mb-2">
                  Mayor engagement y conversión
                </h4>
                <p className="text-muted-foreground">
                  Hasta 3x más alcance orgánico y 47% mayor conversión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;