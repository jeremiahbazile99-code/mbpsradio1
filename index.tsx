import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MusicExperience } from "@/components/sections/Music";
import { AppPromo } from "@/components/sections/AppPromo";
import { Social } from "@/components/sections/Social";
import { News } from "@/components/sections/News";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LivePlayer } from "@/components/LivePlayer";
import { ZenoEmbed } from "@/components/ZenoEmbed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radio Mbps Digital — The Sound of Haiti, Streaming Worldwide" },
      { name: "description", content: "Digital radio station streaming the best of Creole, French and English music — 24/7 from Haiti to the world." },
      { property: "og:title", content: "Radio Mbps Digital — Streaming Haiti to the World" },
      { property: "og:description", content: "Music, culture & connection without limits. Listen live anytime, anywhere." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />
      <main>
        <Hero />
        <section id="listen" className="relative py-20 sm:py-24 border-t border-border">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-widest text-accent font-semibold">Live now</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Tune in — we're on air.</h2>
            </div>
            <ZenoEmbed />
          </div>
        </section>
        <About />
        <MusicExperience />
        <AppPromo />
        <Social />
        <News />
        <Contact />
      </main>
      <Footer />
      <LivePlayer variant="sticky" />
    </div>
  );
}
