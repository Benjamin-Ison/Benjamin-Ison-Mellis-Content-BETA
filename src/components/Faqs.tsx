import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "¿Cómo sé si mi negocio califica?",
    a: "Si tenés un local físico o vendés directo por redes y ya atendés clientes, probablemente sí. En la llamada lo vemos en 15 minutos y te lo decimos de frente.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "Los primeros mensajes suelen aparecer en las primeras semanas. Lo sólido, cuando hay constancia: entre el mes uno y el tres.",
  },
  {
    q: "¿Qué tipo de contenido crean?",
    a: "Reels, fotos y historias pensados para vender: producto, detrás de escena, tu manera de trabajar y todo lo que hace que alguien elija tu negocio.",
  },
  {
    q: "¿Por qué hay una evaluación de personalidad?",
    a: "Porque trabajamos con pocos negocios a la vez. Si no hay buena onda ni ganas de meterle, no funciona para ninguno de los dos.",
  },
  {
    q: "¿Qué pasa si no quedo seleccionado en la primera llamada?",
    a: "Te decimos por qué y te dejamos recomendaciones concretas para aplicar solo. Sin costo y sin resentimientos.",
  },
];

export function Faqs() {
  return (
    <section id="faqs" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-4xl leading-[1.02] sm:text-6xl">Preguntas frecuentes</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="mb-3 rounded-2xl border border-border bg-surface px-5 transition-colors duration-300 hover:border-primary/50"
              >
                <AccordionTrigger className="text-left font-display text-base font-extrabold hover:text-primary hover:no-underline sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>

              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
