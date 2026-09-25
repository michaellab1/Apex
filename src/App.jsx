import Header from "./component/Header";
import Hero from "./component/Hero";
import BentoGrid from "./component/BentoGrid";
import Codeshowcase from "./component/Codeshowcase";
import SystemMetrics from "./component/SystemMetrics";
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#090d16] text-slate-100 antialiased selection:bg-slate-200 selection:bg-indigo-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <Codeshowcase />
        <SystemMetrics />
      </main>
    </div>
  );
}

export default App;
