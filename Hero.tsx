import { Download, Radio } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/mbps-logo.jpeg.asset.json";
import { Equalizer } from "../Equalizer";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <img
            src={logo.url}
            alt="MBP's Radio Digital logo"
            className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover ring-4 ring-primary/60 shadow-glow-blue animate-float mb-6"
          />
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
            On Air · 24/7
            <Equalizer />
          </div>

          <h1 className="mt-6 text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95]">
            Radio <span className="text-gradient">Mbps</span>
            <br />
            <span className="text-foreground/90">Digital</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
            The Sound of Haiti, streaming worldwide. Music, culture & connection
            without limits — Haitians for the world.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#listen"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-base font-semibold text-white shadow-glow-red hover:scale-105 transition"
            >
              <Radio className="h-5 w-5" /> Listen Live
            </a>
            <a
              href="#app"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-7 py-4 text-base font-semibold text-foreground hover:bg-card/70 transition"
            >
              <Download className="h-5 w-5" /> Download the App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
