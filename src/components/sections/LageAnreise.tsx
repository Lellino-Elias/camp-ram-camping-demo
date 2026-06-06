"use client";

import Reveal from "@/components/ui/Reveal";
import { campsite } from "@/content/campsite.config";

export default function LageAnreise() {
  const { heading, modes } = campsite.anreise;
  const { coords, adresse } = campsite.kontakt;
  const name = campsite.name;
  const mapsHref = coords
    ? `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adresse)}`;

  return (
    <section id="anreise" className="scroll-mt-24 py-16 md:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] items-stretch gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
        {/* Self-contained location panel — always renders (no external map tiles). */}
        <Reveal>
          <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-bg2 via-bg to-bg2 lg:h-full lg:min-h-[460px]">
            {/* Decorative locator graphic (concentric "you-are-here" rings). */}
            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="absolute h-[520px] w-[520px] rounded-full border border-ink/[0.06]" />
              <span className="absolute h-[380px] w-[380px] rounded-full border border-ink/[0.08]" />
              <span className="absolute h-[240px] w-[240px] rounded-full border border-gold/15" />
              <span className="absolute h-[120px] w-[120px] rounded-full border border-gold/25" />
              <span className="absolute h-[120px] w-[120px] rounded-full bg-gold/10 animate-ping" />
              <span
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 42%, transparent 52%, color-mix(in oklab, var(--bg) 78%, transparent) 100%)",
                }}
              />
            </div>

            {/* Center pin marker. */}
            <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
              <div
                className="grid h-[42px] w-[42px] place-items-center shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
                style={{
                  borderRadius: "50% 50% 50% 0",
                  transform: "rotate(-45deg)",
                  background: "var(--gold)",
                  border: "2px solid var(--ink)",
                }}
              >
                <span className="block h-3 w-3 rounded-full bg-bg" style={{ transform: "rotate(45deg)" }} />
              </div>
            </div>

            {/* Region label, top-left. */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted backdrop-blur-md md:left-5 md:top-5">
              <svg width="11" height="11" viewBox="0 0 16 16" aria-hidden><path d="M8 1.5c-2.8 0-5 2.1-5 4.9 0 3.4 5 8.1 5 8.1s5-4.7 5-8.1c0-2.8-2.2-4.9-5-4.9Zm0 6.8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="currentColor" /></svg>
              Standort
            </div>

            {/* Google Maps CTA, top-right. */}
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-[13px] min-h-[44px] md:right-5 md:top-5 md:py-2 md:text-xs md:min-h-0 font-semibold text-white shadow-lg transition-colors hover:bg-gold-soft"
            >
              Auf Google Maps ansehen
              <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden><path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>

            {/* Address + coordinates card, bottom. */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-line bg-bg/85 px-4 py-3 backdrop-blur-md md:bottom-5 md:left-5 md:right-5 md:px-5 md:py-4">
              <p className="font-display text-base font-bold leading-snug text-ink md:text-lg">{name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{adresse}</p>
              {coords && (
                <p className="mt-1.5 font-mono text-[11px] tracking-tight text-muted/80">
                  {coords.lat.toFixed(5)}° N · {coords.lng.toFixed(5)}° E
                </p>
              )}
            </div>
          </div>
        </Reveal>

        {/* Anreise modes */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold leading-[1.02] tracking-tight text-ink">
              {heading}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-px overflow-hidden rounded-3xl border border-line bg-line">
            {modes.map((m, i) => (
              <Reveal key={m.title} delay={i * 90}>
                <div className="flex items-start gap-4 bg-bg p-6">
                  <span className="font-display mt-0.5 text-sm font-bold text-gold">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{m.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
