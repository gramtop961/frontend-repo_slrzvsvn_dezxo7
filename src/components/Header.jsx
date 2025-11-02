import React from 'react';
import { Rocket, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 grid place-items-center text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">Blue&Green</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-slate-300/70 hover:border-slate-400 transition bg-white text-slate-700">
            <Settings size={16} />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-gradient-to-r from-blue-600 to-green-600 text-white shadow hover:shadow-md active:scale-[0.99] transition">
            <User size={16} />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
