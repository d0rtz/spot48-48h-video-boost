import videoEditingImage from "@/assets/video-editing-process.jpg";

const OurSolution = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestra solución: Spot48
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-elegant">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  3 Anuncios Verticales
                </h3>
                <p className="text-muted-foreground">
                  Entregados en solo 48 horas, perfectos para redes sociales 
                  y publicidad digital.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-elegant">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Guion + Voz + Subtítulos
                </h3>
                <p className="text-muted-foreground">
                  Todo incluido para maximizar el impacto y la accesibilidad 
                  de tu mensaje.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-elegant">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  1 Ajuste Gratuito
                </h3>
                <p className="text-muted-foreground">
                  Garantizamos tu satisfacción con la posibilidad de realizar 
                  modificaciones.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={videoEditingImage}
              alt="Video editing process"
              className="w-full rounded-lg shadow-primary"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;