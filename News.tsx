const posts = [
  { tag: "Music", title: "New Kompa Friday Sessions launch this weekend", date: "Jun 1, 2026", excerpt: "A fresh weekly show celebrating the legends and rising stars of Kompa." },
  { tag: "Event", title: "Live from Port-au-Prince — Cultural Heritage Special", date: "May 24, 2026", excerpt: "A two-hour live broadcast featuring local artists and storytellers." },
  { tag: "Update", title: "Mbps Digital app crosses 50K listeners worldwide", date: "May 12, 2026", excerpt: "Thank you to the global Haitian community for tuning in every day." },
];

export function News() {
  return (
    <section id="news" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-semibold">News & Updates</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">From the station</h2>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">View all →</a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-accent/60 transition"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/15 text-primary px-2.5 py-1 font-medium">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-gradient transition">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              <span className="mt-5 inline-block text-sm text-accent font-medium">Read more →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
