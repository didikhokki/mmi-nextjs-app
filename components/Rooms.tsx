const rooms = [
  {
    title: "Hot Spring Suite",
    desc: "Private bath with forest view and traditional interiors.",
    img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
  },
  {
    title: "Japanese Suite",
    desc: "Tatami-style comfort with serene mountain atmosphere.",
    img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    title: "Private Villa",
    desc: "Exclusive villa stay with luxury spa experience.",
    img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
  },
];

export default function Rooms() {
  return (
    <section className="py-28 bg-[#f8f8f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-5xl font-serif mb-4">
          Rooms & Villas
        </h2>
        <p className="text-gray-500 mb-16">
          Choose from our finest suites inspired by nature and tradition.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {rooms.map((room, i) => (
            <div key={i} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text */}
              <h3 className="mt-6 text-2xl font-serif">
                {room.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {room.desc}
              </p>

              {/* Button */}
              <button className="mt-6 px-6 py-3 border rounded-full text-sm hover:bg-black hover:text-white transition">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
