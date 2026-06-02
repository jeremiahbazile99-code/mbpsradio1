import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mbps-logo.jpeg.asset.json";

const links = [
  { href: "#listen", label: "Listen" },
  { href: "#about", label: "About" },
  { href: "#music", label: "Music" },
  { href: "#app", label: "App" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <img src={logo.url} alt="MBP's Radio Digital" className="h-10 w-10 rounded-full object-cover ring-2 ring-primary shadow-glow-blue" />
          <span>Radio <span className="text-gradient">Mbps</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="#listen"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-glow-red"
        >
          Listen Live
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <ul className="px-5 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block py-1 text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
