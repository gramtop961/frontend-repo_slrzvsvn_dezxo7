import React from 'react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-400 via-blue-300 to-green-300" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 ring-1 ring-blue-200">
            <Star size={14} />
            Crafted in blues & greens
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            A calm, vibrant look she’ll love
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            We designed this experience around her favorite colors — blending deep ocean blues with fresh
            meadow greens for a soothing, energetic feel across the page.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
            <a
              href="#features"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md text-white bg-gradient-to-r from-blue-600 to-green-600 shadow hover:shadow-md transition"
            >
              Explore features
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-white/70 ring-1 ring-slate-200 shadow-sm overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-blue-200 via-white to-green-200" />
          </div>
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-2xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
