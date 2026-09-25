import { motion } from "motion/react";

import { Reveal } from "@/components/Reveal";

const phases = [
  {
    title: "Llamada de propuesta",
    text: "Charlamos uno a uno y evaluamos con honestidad si podemos ayudar a tu negocio.",
  },
  {
    title: "Llamada de onboarding",
    text: "Si avanzás, agendamos una llamada para que conozcas el servicio a fondo.",
  },
  {
    title: "Evaluación de personalidad",
    text: "Analizamos si encajás con nuestra forma de trabajar. Trabajamos con pocos y bien.",
  },
  {
    title: "Entrega del servicio",
    text: "Arrancamos: creamos, editamos y publicamos tu contenido todos los meses.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-5 py-24 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl leading-[1.02] sm:text-6xl">Cómo funciona</h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Cuatro pasos simples. Sin vueltas, sin contratos eternos.
          </p>
        </Reveal>

        <ol className="relative mt-16 list-none">
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute top-2 bottom-8 left-[21px] w-px origin-top bg-gradient-to-b from-primary via-primary/50 to-transparent sm:left-[27px]"
          />

          {phases.map((phase, i) => (
            <motion.li
              key={phase.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex gap-6 pb-12 last:pb-0 sm:gap-8"
            >
              <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-primary/40 bg-background font-display text-base font-extrabold text-primary transition-colors duration-300 group-hover:bg-accent-gradient group-hover:text-primary-foreground sm:size-14 sm:text-lg">
                {i + 1}
              </span>
              <div className="pt-1.5">
                <p className="text-xs font-semibold tracking-[0.18em] text-primary/70 uppercase">
                  Fase {i + 1}
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl">{phase.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
                  {phase.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
