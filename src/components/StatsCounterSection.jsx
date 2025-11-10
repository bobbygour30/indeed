'use client';
import React, { useEffect, useRef, useState } from 'react';

/**
 * Smooth numeric counter using requestAnimationFrame and IntersectionObserver.
 *
 * Props:
 *  - to: number (target number to count to, e.g. 25)
 *  - duration: seconds
 *  - suffix: string appended to the number (e.g. "M+", "k+")
 *  - className: optional style class for the number
 */
function Counter({ to = 0, duration = 2.0, suffix = '', className = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const startedRef = useRef(false);
  const from = 0;

  // easing function (easeOutCubic)
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            // start animation
            startTimeRef.current = null;
            const totalMs = duration * 1000;

            const step = (timestamp) => {
              if (!startTimeRef.current) startTimeRef.current = timestamp;
              const elapsed = timestamp - startTimeRef.current;
              let t = Math.min(elapsed / totalMs, 1);
              const eased = easeOutCubic(t);
              const current = Math.round(from + (to - from) * eased);
              setValue(current);
              if (t < 1) {
                rafRef.current = requestAnimationFrame(step);
              } else {
                // ensure final value
                setValue(to);
              }
            };

            rafRef.current = requestAnimationFrame(step);
            // once started, we don't need the observer
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 } // adjust threshold as desired
    );

    observer.observe(node);

    return () => {
      // cleanup
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, duration]);

  // display with locale string (no decimals)
  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounterSection() {
  // Note: `to` is the number we visually count to (matching the visual text: 25, 177, 298, 5)
  // and suffix will show M+ / k+ as in your design.
  const stats = [
    { to: 25, suffix: 'M+', label: 'Jobs Available' },
    { to: 177, suffix: 'k+', label: 'New Jobs This Week!' },
    { to: 298, suffix: 'k+', label: 'Companies Hiring' },
    { to: 5, suffix: 'M+', label: 'Candidates' },
  ];

  return (
    <section className="bg-[#0F3E46] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <Counter
              to={stat.to}
              duration={2.2 + idx * 0.2} // slight variation for natural look
              suffix={stat.suffix}
              className="text-white text-4xl md:text-5xl font-semibold"
            />
            <p className="text-gray-300 mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
