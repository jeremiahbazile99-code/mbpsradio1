export function ZenoEmbed() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-glow-blue">
      <div className="w-full overflow-x-auto flex justify-center p-4 sm:p-6">
        <iframe
          src="https://zeno.fm/player/mbps-radio"
          width="575"
          height="250"
          frameBorder="0"
          scrolling="no"
          title="MBPS Radio on Zeno.FM"
          className="max-w-full"
        />
      </div>
      <a
        href="https://zeno.fm/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-xs text-muted-foreground pb-4"
      >
        A Zeno.FM Station
      </a>
    </div>
  );
}
