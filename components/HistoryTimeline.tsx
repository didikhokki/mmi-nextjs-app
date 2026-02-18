"use client";

const timelineData = [
  {
    year: "1850",
    text: "Built as the\nhome of a\nwealthy farmer\nin what is now\nTokamachi,\nNiigata.",
    size: "large",
  },
  {
    year: "1868",
    text: "Meiji",
    size: "small",
  },
  {
    year: "1912",
    text: "Taisho",
    size: "small",
  },
  {
    year: "1926",
    text: "Showa",
    size: "small",
  },
  {
    year: "1987",
    text: "Moved to the\nKanbayashi area\nof Nagano to\nserve as a rural\nmuseum of rural\nlife in the snow\ncountry of Japan.",
    size: "large",
  },
  {
    year: "2017",
    text: "Renovated for\nuse as the\nrestaurant\n“Hotarutei”.",
    size: "medium",
    active: true,
  },
  {
    year: "2023",
    text: "Newly built villas\nfor overnight\nstays.",
    size: "medium",
  },
];

export default function HistoryTimeline() {
  return (
    <section className="w-full bg-[#f8f8f5] py-24">
      <div className="max-w-7xl mx-auto px-10">
        {/* Wrapper */}
        <div className="relative w-full">
          {/* Horizontal Line */}
          <div className="absolute top-[160px] left-0 w-full h-[1px] bg-gray-500"></div>

          {/* Timeline Items */}
          <div className="flex justify-between items-start">
            {timelineData.map((item, index) => {
              // Height rules like original
              let dashHeight = "h-10";
              if (item.size === "large") dashHeight = "h-20";
              if (item.size === "medium") dashHeight = "h-14";

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center w-[140px]"
                >
                  {/* Text Above */}
                  <p
                    className={`text-[12px] whitespace-pre-line text-center leading-snug mb-2 ${
                      item.size === "small"
                        ? "font-medium"
                        : "font-normal"
                    }`}
                  >
                    {item.text}
                  </p>

                  {/* Dashed Line */}
                  <div
                    className={`${dashHeight} border-l border-dashed border-gray-500`}
                  ></div>

                  {/* Circle exactly on line */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border border-gray-600 bg-[#f8f8f5]`}
                    ></div>

                    {/* Active Double Ring */}
                    {item.active && (
                      <div className="absolute w-2 h-2 rounded-full border border-gray-600"></div>
                    )}
                  </div>

                  {/* Year Below */}
                  <p className="text-[12px] mt-3 tracking-wide text-gray-700">
                    {item.year}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
