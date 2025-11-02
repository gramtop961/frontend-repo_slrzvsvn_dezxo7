import { useState } from 'react';

const SURPRISE_URL = 'https://mystery-portal-sam.web.app/';

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  const handleToggle = () => setFlipped((f) => !f);
  const goToSurprise = () => {
    window.open(SURPRISE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative mx-auto w-full max-w-sm sm:max-w-md perspective">
      {/* card container */}
      <div
        className={`relative h-80 sm:h-96 w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
        }`}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Flip the card to reveal the message"
      >
        {/* front */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-rose-500 p-[2px] [backface-visibility:hidden]">
          <div className="relative h-full w-full rounded-2xl bg-slate-900/70 backdrop-blur-xl overflow-hidden">
            {/* subtle glow */}
            <div className="pointer-events-none absolute -top-20 -right-10 h-56 w-56 rounded-full bg-rose-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-sky-400/30 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-300 via-white to-rose-300 bg-clip-text text-transparent">
                For Samriddhi
              </h3>
              <p className="mt-3 text-slate-200/90">
                Hover or tap to flip and reveal your birthday message
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 shadow-inner">
                Made with love in blue & red
              </span>
            </div>
          </div>
        </div>

        {/* back */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-rose-500 via-pink-500 to-sky-500 rotate-y-180 [backface-visibility:hidden]">
          <div className="relative h-full w-full rounded-2xl bg-slate-950/80 backdrop-blur-xl overflow-hidden">
            {/* confetti-like sparkles */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-rose-300 animate-ping" />
              <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-sky-300 animate-ping" />
              <div className="absolute left-12 bottom-10 h-2 w-2 rounded-full bg-blue-300 animate-ping" />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
              <p className="text-lg sm:text-xl text-slate-100/95 leading-relaxed">
                May your day be as bright as your smile and as vibrant as this card.
                Here's to more laughs, more adventures, and all the joy in the world.
              </p>
              <p className="mt-3 text-slate-300">
                You are loved beyond words. Happy Birthday! 🎉
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToSurprise();
                }}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 ring-1 ring-white/10 transition-transform hover:scale-[1.03] active:scale-95"
              >
                Open Your Surprise
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* helper for perspective via arbitrary class since Tailwind doesn't have it natively */}
      <style>
        {`
          .perspective { perspective: 1200px; }
          .rotate-y-180 { transform: rotateY(180deg); }
        `}
      </style>
    </div>
  );
}
