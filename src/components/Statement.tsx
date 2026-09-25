import { motion } from "motion/react";

export function Statement() {
  return (
    <section className="relative overflow-hidden border-y border-primary/30 px-5 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-statement-gradient" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-gradient"
        aria-hidden
      />
      <motion.p
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl text-center font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl"
      >
        Tu próximo cliente ya está en Instagram.{" "}
        <span className="text-primary">Que te vea.</span>
      </motion.p>
    </section>
  );
}
