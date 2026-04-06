import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;