type Props = { playing?: boolean; bars?: number; className?: string };

export function Equalizer({ playing = true, bars = 5, className = "" }: Props) {
  return (
    <div className={`flex items-end gap-1 h-5 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-gradient-brand equalizer-bar"
          style={{
            height: "100%",
            animationDelay: `${i * 0.12}s`,
            animationPlayState: playing ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}
