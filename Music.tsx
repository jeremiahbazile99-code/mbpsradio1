import { Music2, Music3, Headphones, Radio } from "lucide-react";

const cards = [
  { icon: Music2, emoji: "🎵", title: "Creole Music", text: "Authentic Haitian rhythms and sounds." },
  { icon: Music3, emoji: "🎶", title: "French Music", text: "International and francophone favorites." },
  { icon: Headphones, emoji: "🎧", title: "English Music", text: "Popular hits and diverse genres." },
  { icon: Radio, emoji: "📡", title: "24/7 Streaming", text: "Always live, always connected." },
];

export function MusicExperience() {
  return (
    <section id="music" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">Music experience</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">A sound for every mood, a rhythm for every heart.</h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur p-7 hover:border-accent/60 transition"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 blur-2xl transition" />
              <div className="text-3xl">{c.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
