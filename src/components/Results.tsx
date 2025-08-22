const Results = () => {
  const stats = [
    {
      metric: "68%",
      title: "Más atención",
      description: "Incremento medio en el tiempo de visualización frente a contenido estático."
    },
    {
      metric: "47%",
      title: "Mayor conversión",
      description: "Aumento en la tasa de respuesta a llamadas a la acción en vídeos cortos."
    },
    {
      metric: "3X",
      title: "Más eficiente",
      description: "Triple de alcance orgánico comparado con publicaciones tradicionales."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ejemplos de resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Datos reales de nuestros clientes que han transformado su marketing con Spot48
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gradient-subtle rounded-lg shadow-elegant border border-primary/10">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                {stat.metric}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {stat.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-primary/5 px-8 py-4 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                M
              </div>
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold">
                A
              </div>
              <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center text-primary-foreground font-bold">
                J
              </div>
            </div>
            <span className="text-foreground font-semibold">
              +50 empresas confían en Spot48
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;