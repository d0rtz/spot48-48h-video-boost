import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué incluye exactamente cada pack?",
      answer: "Cada pack incluye vídeos verticales listos para redes sociales, guion, voz y subtítulos. Según el plan, varían la cantidad de vídeos y rondas de ajustes."
    },
    {
      question: "¿De verdad entregáis en 48h?",
      answer: "Sí. Una vez que recibimos tu formulario con la información del negocio, comenzamos el proceso y entregamos en un máximo de 48 horas."
    },
    {
      question: "¿Puedo pedir modificaciones si no me convence el resultado?",
      answer: "Sí, todos los planes incluyen al menos una ronda de ajustes gratuita para asegurar que quedes satisfecho."
    },
    {
      question: "¿Sirven los vídeos para cualquier sector?",
      answer: "Sí. Trabajamos con inmobiliarias, automoción, e-commerce, restauración y otros sectores adaptando el guion y estilo visual."
    },
    {
      question: "¿Cómo os contacto si tengo dudas?",
      answer: "Puedes escribirnos a spot48.agency@gmail.com o vía Instagram @spot48.agency."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background rounded-lg shadow-elegant border border-border"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;