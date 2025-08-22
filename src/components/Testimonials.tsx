import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Duplicamos leads en una semana",
      author: "María González",
      company: "Inmobiliaria Valencia",
      rating: 5
    },
    {
      text: "Los vídeos nos ayudaron a destacar en redes",
      author: "Carlos Ruiz",
      company: "Concesionario Madrid",
      rating: 5
    },
    {
      text: "Calidad profesional a precio increíble",
      author: "Ana Martín",
      company: "Boutique Online",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Casos de éxito
          </h2>
          <p className="text-xl text-muted-foreground">
            Lo que dicen nuestros clientes sobre los resultados
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-elegant bg-gradient-subtle border-primary/10">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-lg font-medium text-foreground mb-4">
                "{testimonial.text}"
              </blockquote>
              
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold">{testimonial.author}</div>
                <div>{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;