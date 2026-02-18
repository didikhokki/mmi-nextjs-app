export default function Information() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-serif mb-10">
        Information
      </h2>

      <div className="space-y-6 border-t pt-6 text-sm">
        <div className="flex justify-between border-b pb-4">
          <p>2026.02.10</p>
          <p className="text-gray-700">
            Spring season special packages now available.
          </p>
          <span>+</span>
        </div>

        <div className="flex justify-between border-b pb-4">
          <p>2026.01.22</p>
          <p className="text-gray-700">
            Renovation completed for luxury suites.
          </p>
          <span>+</span>
        </div>

        <div className="flex justify-between border-b pb-4">
          <p>2026.01.05</p>
          <p className="text-gray-700">
            New dining menu inspired by Kyoto cuisine.
          </p>
          <span>+</span>
        </div>
      </div>
    </section>
  );
}
