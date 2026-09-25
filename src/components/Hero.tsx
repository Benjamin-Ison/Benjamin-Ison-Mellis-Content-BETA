import { Play } from "lucide-react";
import { motion } from "motion/react";

import { CtaButton } from "@/components/CtaButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-fit rounded-full border border-primary/60 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase lg:mx-0"
          >
            Agencia de contenido para negocios locales
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl leading-[1.05] sm:text-6xl"
          >
            Convertimos tu Instagram en tu <span className="text-primary">mejor vendedor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0"
          >
            Gestionamos el contenido de tu negocio de punta a punta: ideas, grabación, edición y
            publicación. Vos atendés tu local, nosotros nos ocupamos de que te encuentren.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 flex flex-col items-center gap-3 lg:items-start"
          >
            <CtaButton />
            <span className="text-xs text-muted-foreground">
              Llamada uno a uno, sin costo y sin compromiso.
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-xl"
        >
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-5 rounded-3xl border border-border bg-surface shadow-glow">
            <span className="flex size-16 items-center justify-center rounded-full border border-primary/50 bg-primary/15">
              <Play className="size-7 fill-primary text-primary" aria-hidden />
            </span>
            <p className="px-6 text-center text-sm font-bold tracking-widest text-primary uppercase">
              Video Mellis Content — Reemplazar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
