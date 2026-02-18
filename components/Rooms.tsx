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
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-5xl font-serif mb-4 text-black">
          Rooms & Villas
        </h2>

        <p className="text-black mb-16">
          Choose from our finest suites inspired by nature and tradition.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {rooms.map((room, i) => (
            <div key={i} className="group">
              
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-md border border-black">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text */}
              <h3 className="mt-6 text-2xl font-serif text-black">
                {room.title}
              </h3>

              <p className="mt-3 text-black text-sm leading-relaxed">
                {room.desc}
              </p>

              {/* Button */}
              <button
                className="
                  mt-6 px-6 py-3
                  border border-black
                  rounded-full text-sm
                  text-black
                  hover:bg-black hover:text-white
                  transition
                "
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
