"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);
  return value;
}

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, active);
  return (
    <div>
      <p className="font-display text-4xl font-light leading-none text-gold sm:text-5xl lg:text-6xl">
        {count}
        <span className="text-gold/70">{suffix}</span>
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ivory/45">{label}</p>
    </div>
  );
}

export default function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
      {stats.map((s) => (
        <Stat key={s.label} {...s} active={active} />
      ))}
    </div>
  );
}
