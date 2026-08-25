import { Instagram, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { advogado, whatsappHref } from "@/data/advogado";

export function Localizacao() {
  const { lat, lng } = advogado.coords;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=16&hl=pt-BR&output=embed`;

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contato e localização</p>
          <h2 className="mt-6 text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.12]">
            Atendimento em {advogado.cidade}, {advogado.estado}.
          </h2>

          <dl className="mt-10 border-t border-border">
            <div className="flex items-start gap-6 border-b border-border py-5">
              <dt className="eyebrow w-24 shrink-0 pt-1">WhatsApp</dt>
              <dd>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-base text-ink transition-opacity hover:opacity-60"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  {advogado.telefoneFormatado}
                </a>
              </dd>
            </div>
            <div className="flex items-start gap-6 border-b border-border py-5">
              <dt className="eyebrow w-24 shrink-0 pt-1">Cidade</dt>
              <dd className="text-base text-ink">
                {advogado.cidade} — {advogado.estado}
                <a
                  href={advogado.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-ink"
                >
                  <MapPin className="size-3.5" aria-hidden />
                  Ver no Google Maps
                </a>
              </dd>
            </div>
            <div className="flex items-start gap-6 border-b border-border py-5">
              <dt className="eyebrow w-24 shrink-0 pt-1">Registro</dt>
              <dd className="text-base text-ink">{advogado.oab}</dd>
            </div>
            <div className="flex items-start gap-6 border-b border-border py-5">
              <dt className="eyebrow w-24 shrink-0 pt-1">Canais</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
                <a
                  href={advogado.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
                >
                  <Instagram className="size-4" aria-hidden /> Instagram
                </a>
                <a
                  href={advogado.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
                >
                  <Linkedin className="size-4" aria-hidden /> LinkedIn
                </a>
                <a
                  href={advogado.blog}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-opacity hover:opacity-60"
                >
                  Conteúdo educativo
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground">
            Endereço completo e horário de atendimento não constam nas fontes públicas consultadas —
            espaço reservado para o profissional informar.
          </p>
        </div>

        <div className="border border-border">
          <iframe
            title={`Localização de ${advogado.nome} em ${advogado.cidade}, ${advogado.estado}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full grayscale md:h-full md:min-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
