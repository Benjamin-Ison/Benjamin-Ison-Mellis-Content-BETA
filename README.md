# Mellis Growth Engine

Creá una landing page en español para "Mellis Content", una agencia de gestión de contenido en Instagram para negocios locales (comercios, emprendimientos con local físico o venta directa por redes). El objetivo principal de la página es convertir visitas en clientes que agenden una consulta uno a uno gratuita.

Stack técnico: React + TypeScript + Tailwind CSS + shadcn/ui, totalmente responsive (mobile-first, ya que el tráfico va a venir mayormente de Instagram). Usá Framer Motion para animaciones de scroll (fade-in, slide-up al aparecer cada sección) y microinteracciones sutiles en botones y cards. El botón de CTA principal debe estar preparado como componente reutilizable, con la URL fácil de reemplazar después (por ahora que apunte a "#contacto" como ancla placeholder).

Estilo visual: Moderno, minimalista, oscuro. Fondo oscuro (negro/gris muy oscuro), texto blanco bold, acentos en color naranja vibrante para CTAs y elementos destacados — inspirado en la estética de las historias de Instagram de la marca (fondo oscuro, texto blanco bold, botones naranjas grandes tipo "Comentá 2k"). Tipografía sans-serif bold y grande para títulos, generoso espacio en blanco, bordes redondeados en botones y cards, sombras suaves para dar profundidad.

Tono de copy: Cercano, auténtico, directo, sin jerga corporativa. Como una marca joven que habla de resultados reales, no como una agencia de marketing genérica.

Estructura de secciones:

Hero: Título de gran impacto centrado en el resultado que buscan los negocios locales (ej: "Convertimos tu Instagram en tu mejor vendedor"). Subtítulo breve explicando qué hace la agencia. Botón CTA grande y llamativo: "Agendar consulta gratis". Considerar un fondo con gradiente sutil oscuro o textura, con animación de entrada.

Prueba social: Sección visual mostrando mockups de conversaciones de WhatsApp con ventas reales de clientes (diseñar como tarjetas tipo captura de chat, con placeholders de ejemplo), y/o tarjetas de testimonios breves con nombre de negocio. Animación de aparición al hacer scroll, tipo cards que se deslizan una por una.

Cómo funciona: 4 fases del proceso en cards numeradas con animación secuencial al hacer scroll (ideal en timeline vertical en mobile, horizontal en desktop):

Fase 1 – Llamada de propuesta: evaluamos uno a uno si podemos ayudar a tu negocio.

Fase 2 – Llamada de onboarding: si avanzás, agendamos una llamada para que conozcas el servicio a profundidad.

Fase 3 – Evaluación de personalidad: analizamos si encajás con nuestro método de trabajo.

Fase 4 – Entrega del servicio: comenzamos a crear y publicar tu contenido.

FAQs: Acordeón interactivo (componente accordion de shadcn/ui) con 4-5 preguntas frecuentes, por ejemplo: ¿Cómo sé si mi negocio califica?, ¿Cuánto tiempo tarda en verse resultados?, ¿Qué tipo de contenido crean?, ¿Por qué hay una evaluación de personalidad?, ¿Qué pasa si no quedo seleccionado en la primera llamada? Respuestas breves y directas, tono cercano.

CTA final: Sección de cierre con título de impacto reforzando el resultado, y botón grande de "Agendar consulta gratis" repitiendo el CTA principal.

Header/Navbar: Simple, con logo placeholder de texto "Mellis Content" y el botón de CTA visible siempre (sticky).

No incluir: precios, información de contacto específica ni datos del fundador — esta es una versión beta que se completará con datos reales más adelante.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/563fc88f-e71b-4926-8c76-b39b427d121e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
