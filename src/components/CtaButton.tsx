import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Reemplazar por el link de agenda real (Calendly, WhatsApp, etc.). */
export const CTA_URL = "#contacto";
export const CTA_LABEL = "Agendar llamada gratuita";

type CtaButtonProps = {
  size?: "pill" | "hero";
  className?: string;
  label?: string;
  withIcon?: boolean;
};

export function CtaButton({
  size = "hero",
  className,
  label = CTA_LABEL,
  withIcon = true,
}: CtaButtonProps) {
  return (
    <motion.a
      href={CTA_URL}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className="inline-flex"
    >
      <Button asChild variant="hero" size={size} className={cn("tracking-tight", className)}>
        <span>
          {label}
          {withIcon ? <ArrowRight /> : null}
        </span>
      </Button>
    </motion.a>
  );
}
