import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { ctaLabel, whatsappHref } from "@/data/advogado";

export function WhatsappFlutuante() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ctaLabel}
      className={`fixed bottom-5 right-5 z-50 inline-flex h-13 items-center gap-2.5 bg-ink px-5 text-sm font-semibold tracking-wide text-primary-foreground shadow-xl transition-all duration-500 hover:opacity-85 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle className="size-4" aria-hidden />
      {ctaLabel}
    </a>
  );
}
