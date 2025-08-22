const TrustedBy = () => {
  const sectors = [
    { name: "Inmobiliaria", icon: "🏠" },
    { name: "Automoción", icon: "🚗" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Restauración", icon: "🍽️" },
    { name: "Fitness", icon: "💪" },
    { name: "Belleza", icon: "💄" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Sectores que confían en Spot48
          </h3>
          <p className="text-muted-foreground">
            Adaptamos nuestros vídeos a cualquier industria
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="text-center p-4 bg-muted/30 rounded-lg hover:bg-primary/5 transition-colors">
              <div className="text-3xl mb-2">{sector.icon}</div>
              <div className="text-sm font-medium text-foreground">{sector.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;