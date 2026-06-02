import logo from "@/assets/mbps-logo.jpeg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <img src={logo.url} alt="MBP's Radio Digital" className="h-10 w-10 rounded-full object-cover ring-2 ring-primary" />
            Radio <span className="text-gradient">Mbps Digital</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Streaming Haiti to the world — music, culture and connection without limits.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#music" className="hover:text-foreground">Music</a>
          <a href="#app" className="hover:text-foreground">Mobile App</a>
          <a href="#news" className="hover:text-foreground">News</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
          <a href="#listen" className="hover:text-foreground">Listen Live</a>
        </nav>

        <div className="text-sm text-muted-foreground md:text-right">
          <p className="text-gradient font-semibold">"Streaming Haiti to the World"</p>
          <p className="mt-3">© {new Date().getFullYear()} Radio Mbps Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
