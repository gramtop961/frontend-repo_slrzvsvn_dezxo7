import Hero from './components/Hero';
import CardShowcase from './components/CardShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <CardShowcase />
      <Footer />
    </div>
  );
}

export default App;
