const BentoGrid = () => {
  return (
    <section
      id="features"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-dark-border"
    >
      <div className="mb-16">
        <h2 className="text-xx font-bold uppercase tracking-widest text-brand-accent mb-3">
          Core Plateform Modules
        </h2>

        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineer for Mission-critical Reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-dark-card border border-dark-border hover:border-500/50 rounded-3xl p-8 sm:p-10 flex flex-all justify-between transition-all duration-300 group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-accent flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Asynchronous Event Streaming
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Process Mllions Of Event Triggers concurrency with low-latemy
              pub/sub pipeline, event sourcing, and non-blocking 1/10
              intergration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
