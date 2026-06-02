import { useState } from "react";
import { Mail, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">Contact</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Get in touch with <span className="text-gradient">Radio Mbps Digital</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Email inquiries, artist submissions, advertising opportunities and guest booking requests — we'd love to hear from you.
          </p>
          <div className="mt-8 flex items-center gap-3 text-foreground">
            <span className="grid place-items-center h-10 w-10 rounded-lg bg-gradient-brand shadow-glow-blue">
              <Mail className="h-5 w-5 text-white" />
            </span>
            <a href="mailto:contact@radiombpsdigital.com" className="hover:text-gradient">
              contact@radiombpsdigital.com
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            <input required type="email" placeholder="Email address" className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>
          <input placeholder="Subject" className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-primary" />
          <textarea required rows={5} placeholder="Your message" className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand py-3.5 text-sm font-semibold text-white shadow-glow-red hover:scale-[1.02] transition"
          >
            <Send className="h-4 w-4" />
            {sent ? "Thanks — we'll be in touch!" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
