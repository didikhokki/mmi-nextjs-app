"use client";

export default function ImageSlider() {
  const images = [
    "https://cpunud.com/1.webp",
    "https://cpunud.com/2.webp",
    "https://cpunud.com/3.webp",
    "https://cpunud.com/4.webp",
    "https://cpunud.com/5.webp",
    "https://cpunud.com/6.webp",
  ];

  return (
    <section className="w-full bg-[#f8f8f5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Frame */}
        <div className="overflow-hidden border bg-white">
          {/* Track */}
          <div className="slider-track">
            {/* Render images twice for seamless loop */}
            {[...images, ...images].map((img, i) => (
              <div key={i} className="slide">
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
