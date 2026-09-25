import { Reveal } from "@/components/Reveal";

type Chat = {
  business: string;
  messages: { text: string; side: "in" | "out" }[];
};

const chats: Chat[] = [
  {
    business: "Panadería del barrio",
    messages: [
      { text: "Hola! Vi el reel de las facturas, tienen para hoy?", side: "in" },
      { text: "Hola! Sí, recién salidas 🔥", side: "out" },
      { text: "Perfecto, guardame 2 docenas 🙌", side: "in" },
    ],
  },
  {
    business: "Estudio de uñas",
    messages: [
      { text: "Vengo del video de TikTok/Insta, tenés turno esta semana?", side: "in" },
      { text: "Tengo jueves 16 o viernes 11 😊", side: "out" },
      { text: "Jueves 16 va! Ya te transfiero la seña", side: "in" },
    ],
  },
  {
    business: "Indumentaria local",
    messages: [
      { text: "Hola, quiero el buzo negro del último posteo", side: "in" },
      { text: "Queda uno en M, te lo reservo?", side: "out" },
      { text: "Sí sí, lo paso a buscar hoy 🧡", side: "in" },
    ],
  },
];

const testimonials = [
  {
    quote: "En tres semanas pasamos de 2 consultas por semana a no dar abasto con los mensajes.",
    business: "Café Nube — Villa Crespo",
  },
  {
    quote: "Yo ya no pienso qué subir. Ellos me dicen qué grabar y listo, se ocupan de todo.",
    business: "Belleza Studio — Rosario",
  },
];

export function SocialProof() {
  return (
    <section id="resultados" className="px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl leading-[1.02] sm:text-6xl">
            Mensajes que se convierten en <span className="text-primary">ventas</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            No hablamos de likes. Hablamos de gente escribiéndole a tu negocio para comprar. Estos
            son ejemplos del tipo de resultado que buscamos.
          </p>
        </Reveal>

        <Reveal className="marquee-hover relative mt-12 overflow-hidden">
          <div className="animate-marquee flex w-max gap-5">
            {[...chats, ...chats].map((chat, i) => (
              <article
                key={`${chat.business}-${i}`}
                className="w-72 shrink-0 rounded-3xl border border-border bg-surface p-4 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 sm:w-80"
              >
                <header className="flex min-w-0 items-center gap-3 border-b border-border pb-3">
                  <span className="size-9 shrink-0 rounded-full bg-surface-2" aria-hidden />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{chat.business}</p>
                    <p className="text-[11px] text-muted-foreground">en línea</p>
                  </div>
                </header>
                <div className="mt-4 flex min-h-36 flex-col gap-2.5">
                  {chat.messages.map((m, idx) => (
                    <p
                      key={idx}
                      className={
                        m.side === "in"
                          ? "max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-chat-in px-3.5 py-2 text-sm"
                          : "max-w-[85%] self-end rounded-2xl rounded-br-sm bg-chat-out px-3.5 py-2 text-sm text-foreground"
                      }
                    >
                      {m.text}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" aria-hidden />
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.business} delay={0.36 + i * 0.12}>
              <blockquote className="h-full rounded-3xl border border-border border-l-4 border-l-primary bg-surface-2/60 p-6 shadow-soft">
                <p className="font-display text-lg leading-snug">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-primary">{t.business}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
