import { BookingCalendar } from "@/components/BookingCalendar";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section id="contacto" className="relative overflow-hidden px-5 py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-4xl leading-[1.02] sm:text-6xl">
          Agenda una llamada <span className="text-primary">gratuita.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Contanos sobre tu negocio y evaluemos juntos, sin costo, si podemos ayudarte a vender más por Instagram. 25 minutos, cero compromiso.
        </p>
        <BookingCalendar />
      </Reveal>
    </section>
  );
}
