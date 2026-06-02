import { Heart, Globe, Sparkles, Music } from "lucide-react";

const pillars = [
  { icon: Heart, title: "Haitian Identity", text: "Rooted in the rhythm, language, and pride of Haiti." },
  { icon: Globe, title: "Worldwide Reach", text: "Connecting the diaspora across every continent." },
  { icon: Music, title: "Music Diversity", text: "Creole, French and English — sound without borders." },
  { icon: Sparkles, title: "Quality Streaming", text: "Stable, high-fidelity broadcasting 24/7." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">About the station</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
            Streaming Haiti <span className="text-gradient">to the world.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Radio Mbps Digital brings the best of Creole, French and English music to listeners
            around the world, sharing the authentic sound of Haiti through digital broadcasting.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Created to connect the global Haitian community with its culture, rhythm and identity —
            a fresh, diverse and high-quality music experience, 24 hours a day.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Made with passion for everyone who carries Haiti in their hearts, no matter where they are.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/50 transition"
            >
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-brand shadow-glow-blue">
                <p.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
