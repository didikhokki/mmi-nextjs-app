export default function QuoteSection() {
  return (
    <section className="bg-gray-700 text-white py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Quote */}
        <div>
          <p className="text-lg leading-relaxed">
            “A retreat where silence speaks,  
            nature surrounds you,  
            and every stay becomes a memory.”
          </p>

          <p className="mt-6 text-sm text-gray-300">
            — Mountain Resort Collection
          </p>
        </div>

        {/* Small Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
            alt="Spa"
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
