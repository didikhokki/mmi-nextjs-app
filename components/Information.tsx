export default function Information() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-serif mb-8 sm:mb-10">
        Information
      </h2>

      {/* List */}
      <div className="space-y-6 border-t pt-6 text-sm">
        
        {/* Item */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b pb-4">
          {/* Date */}
          <p className="text-gray-500 text-xs sm:text-sm">
            2026.02.10
          </p>

          {/* Text */}
          <p className="text-gray-700 flex-1 sm:mx-6">
            Spring season special packages now available.
          </p>

          {/* Icon */}
          <span className="text-lg font-semibold self-end sm:self-auto">
            +
          </span>
        </div>

        {/* Item */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b pb-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            2026.01.22
          </p>

          <p className="text-gray-700 flex-1 sm:mx-6">
            Renovation completed for luxury suites.
          </p>

          <span className="text-lg font-semibold self-end sm:self-auto">
            +
          </span>
        </div>

        {/* Item */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b pb-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            2026.01.05
          </p>

          <p className="text-gray-700 flex-1 sm:mx-6">
            New dining menu inspired by Kyoto cuisine.
          </p>

          <span className="text-lg font-semibold self-end sm:self-auto">
            +
          </span>
        </div>
      </div>
    </section>
  );
}
