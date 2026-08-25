import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ctaLabel, whatsappHref } from "@/data/advogado";

const nav = [
  { href: "#advogado", label: "O advogado" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#autoridade", label: "Especialização" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-primary-foreground transition-colors duration-500 ${
        scrolled ? "bg-ink/92 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-sm font-medium tracking-[-0.02em] sm:text-base">
            José Augusto de Sousa Gois
          </span>
          <span className="hidden text-[0.625rem] uppercase tracking-[0.22em] text-primary-foreground/45 lg:inline">
            Advocacia previdenciária
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer noopener"
            className="border border-primary-foreground/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-primary-foreground hover:text-ink"
          >
            {ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex size-11 items-center justify-center lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="bg-ink lg:hidden">
          <nav className="container-page flex flex-col pb-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-t border-primary-foreground/10 py-4 text-base text-primary-foreground/75"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
              className="mt-5 bg-primary-foreground py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-ink"
            >
              {ctaLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
