export default function Overview() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-serif mb-6 text-black">
            Overview
          </h2>

          <p className="text-black leading-relaxed">
            Nestled deep in the mountains, our inn offers
            a peaceful escape surrounded by forests,
            hot springs, and timeless Japanese hospitality.
          </p>

          <button className="mt-8 border border-black px-6 py-3 text-sm rounded-full text-black hover:bg-black hover:text-white transition">
            Learn More →
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://cpunud.com/overview.webp"
            alt="Resort"
            className="rounded-xl shadow-lg border border-black"
          />
        </div>

      </div>
    </section>
  );
}
