import { Check, Smartphone, Download } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const features = [
  "Lightweight and easy to use",
  "Fast and stable streaming",
  "One-tap live listening",
  "Social media integration",
  "Android compatible",
  "Designed for uninterrupted listening",
];

export function AppPromo() {
  return (
    <section id="app" className="relative py-24 sm:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <img
            src={appMockup}
            alt="Radio Mbps Digital mobile app"
            loading="lazy"
            width={1024}
            height={1280}
            className="relative mx-auto max-h-[560px] w-auto rounded-3xl animate-float"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">Mobile app</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Take Radio Mbps Digital <span className="text-gradient">everywhere.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Enjoy simple, fast and reliable listening directly from your phone and stay connected wherever you are.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="grid place-items-center h-6 w-6 shrink-0 rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.mundostreaminghd.mbpsradio&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow-red hover:scale-105 transition"
            >
              <Download className="h-4 w-4" /> Download for Android
            </a>
            <a
              href="https://apps.apple.com/us/app/mbps-radio-official/id6758016912"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition"
            >
              <Smartphone className="h-4 w-4" /> Download on iOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
