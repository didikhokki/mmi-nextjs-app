export default function Overview() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <div>
        <h2 className="text-5xl font-serif mb-6">
          Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Nestled deep in the mountains, our inn offers
          a peaceful escape surrounded by forests,
          hot springs, and timeless Japanese hospitality.
        </p>

        <button className="mt-8 border px-6 py-3 text-sm rounded-full hover:bg-black hover:text-white transition">
          Learn More →
        </button>
      </div>

      {/* Image */}
      <div>
        <img
          src="https://cpunud.com/overview.webp"
          alt="Resort"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
