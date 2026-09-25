import { Menu } from "lucide-react";

import { CtaButton } from "@/components/CtaButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { href: "#top", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#como-funciona", label: "Proceso" },
  { href: "#resultados", label: "Testimonios" },
  { href: "#faqs", label: "Preguntas frecuentes" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-accent-gradient font-display text-sm font-extrabold text-primary-foreground">
            M
          </span>
          <span className="truncate font-display text-base font-extrabold tracking-tight sm:text-lg">
            Mellis Content
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Abrir menú"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary lg:hidden"
            >
              <Menu className="size-4" />
              <span className="hidden sm:inline">Menú</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 border-border bg-surface">
              {links.map((l) => (
                <DropdownMenuItem key={l.href} asChild>
                  <a href={l.href} className="cursor-pointer font-semibold hover:text-primary">
                    {l.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <CtaButton size="pill" label="Agendar gratis" withIcon={false} className="shrink-0" />
        </div>
      </div>
    </header>
  );
}
