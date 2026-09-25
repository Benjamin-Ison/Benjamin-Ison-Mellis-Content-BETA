import { Reveal } from "@/components/Reveal";

export function AboutUs() {
  return (
    <section id="nosotros" className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-primary/40 bg-surface shadow-soft sm:aspect-[4/3] lg:aspect-[4/5]">
            <div className="absolute inset-0 grid place-items-center p-6 text-center">
              <p className="font-display text-sm font-extrabold tracking-tight text-primary uppercase sm:text-base">
                Foto equipo Mellis Content — reemplazar
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="text-4xl leading-[1.02] sm:text-6xl">
            Quiénes <span className="text-primary">somos</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Somos Mellis Content: dos hermanos que empezamos ayudando a negocios locales a vender
            más por Instagram, sin saber que se iba a convertir en nuestro trabajo de tiempo
            completo. Probamos, nos equivocamos y aprendimos qué es lo que realmente hace que un
            negocio venda a través de redes. Hoy ayudamos a otros negocios locales a lograr lo
            mismo.
          </p>
          <div className="mt-8 h-1 w-24 rounded-full bg-accent-gradient" aria-hidden />
        </Reveal>
      </div>
    </section>
  );
}
