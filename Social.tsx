import { Facebook, Instagram, Youtube } from "lucide-react";

const socials = [
  { name: "Facebook", icon: Facebook, href: "#", color: "from-[oklch(0.55_0.2_260)] to-[oklch(0.45_0.18_270)]" },
  { name: "Instagram", icon: Instagram, href: "#", color: "from-[oklch(0.65_0.24_25)] to-[oklch(0.55_0.22_330)]" },
  { name: "YouTube", icon: Youtube, href: "#", color: "from-[oklch(0.62_0.24_25)] to-[oklch(0.55_0.22_15)]" },
];

export function Social() {
  return (
    <section className="relative py-24 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold">Community</p>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
          Stay Connected With <span className="text-gradient">the Community</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Follow Radio Mbps Digital for updates, live announcements and stories from the global Haitian community.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className={`group flex items-center gap-3 rounded-full border border-border bg-card/60 backdrop-blur px-5 py-3 hover:scale-105 transition`}
            >
              <span className={`grid place-items-center h-9 w-9 rounded-full bg-gradient-to-br ${s.color}`}>
                <s.icon className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm font-medium">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
