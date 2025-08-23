import logoOfficial from "@/assets/spot48-logo-official.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-accent text-accent-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img src={logoOfficial} alt="Spot48 - Vídeos que venden en 48h" className="h-10 w-auto mb-4" />
            <p className="text-accent-foreground/80 mb-4">
              Vídeos que venden en 48h
            </p>
            <p className="text-accent-foreground/60 text-sm">
              Transforma tu presencia digital con vídeos profesionales 
              creados en tiempo récord.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Contacto</h4>
            <div className="space-y-2 text-sm">
              <p className="text-accent-foreground/80">
                Email: spot48.agency@gmail.com
              </p>
              <p className="text-accent-foreground/80">
                Instagram: @spot48.agency
              </p>
              <p className="text-accent-foreground/80">
                TikTok: @spot48.agency
              </p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Servicios</h4>
            <div className="space-y-2 text-sm text-accent-foreground/80">
              <p>Vídeos para redes sociales</p>
              <p>Anuncios publicitarios</p>
              <p>Contenido para marketing</p>
              <p>Edición profesional</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © 2024 Spot48. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;