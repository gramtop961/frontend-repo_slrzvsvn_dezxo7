import React from 'react';
import { Shield, Sparkles, Leaf } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Balanced by design',
    desc: 'A cool blue base with fresh green accents keeps things calm yet lively throughout the experience.',
  },
  {
    icon: Sparkles,
    title: 'Polished details',
    desc: 'Soft gradients, gentle depth, and motion-ready components for a refined, friendly feel.',
  },
  {
    icon: Leaf,
    title: 'Nature-inspired',
    desc: 'Inspired by oceans and forests — a palette that feels clean, revitalizing, and approachable.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Designed around her favorite colors
          </h2>
          <p className="mt-3 text-slate-600">
            Clean layouts, thoughtful contrast, and accessible color choices make the interface delightful and easy to use.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200/70 bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 text-white grid place-items-center shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
