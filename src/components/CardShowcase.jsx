import FlipCard from './FlipCard';

export default function CardShowcase() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Hover to Reveal • Tap to Flip
          </h2>
          <p className="mt-3 text-slate-300">
            A glassy two-sided card in blue and red, just for you.
          </p>
        </div>

        <div className="mt-10">
          <FlipCard />
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          Tip: On mobile, tap the card to flip. Click the surprise button on the back! 💫
        </p>
      </div>
    </section>
  );
}
