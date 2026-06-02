import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, Radio } from "lucide-react";
import { Equalizer } from "./Equalizer";

// Public Haitian-friendly stream placeholder — user can swap for their own URL.
const STREAM_URL = "https://stream.zeno.fm/0r0xa792kwzuv";

type Props = { variant?: "hero" | "sticky" };

export function LivePlayer({ variant = "hero" }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        await a.play();
        setPlaying(true);
      }
    } catch {
      setPlaying(false);
    }
  };

  if (variant === "sticky") {
    return (
      <button
        onClick={toggle}
        aria-label={playing ? "Pause live radio" : "Play live radio"}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-glow-red animate-pulse-glow hover:scale-105 transition-transform"
      >
        <audio ref={audioRef} src={STREAM_URL} preload="none" />
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        <span className="hidden sm:inline">{playing ? "Live" : "Listen Live"}</span>
        {playing && <Equalizer />}
      </button>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 sm:p-8 shadow-glow-blue">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />
      <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row items-center gap-6">
        <button
          onClick={toggle}
          className="group relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow-red animate-pulse-glow hover:scale-105 transition"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
        </button>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start text-xs uppercase tracking-widest text-accent">
            <Radio className="h-3.5 w-3.5" />
            <span className="font-semibold">On Air · Live</span>
            <Equalizer playing={playing} />
          </div>
          <h3 className="mt-2 text-2xl font-bold text-foreground">Radio Mbps Digital</h3>
          <p className="text-sm text-muted-foreground">
            Listen live anytime, anywhere — streaming Haiti to the world.
          </p>

          <div className="mt-4 flex items-center gap-3 justify-center sm:justify-start">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-40 accent-[oklch(0.68_0.22_250)]"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
