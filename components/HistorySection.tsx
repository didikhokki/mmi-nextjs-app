import HistoryTimeline from "./HistoryTimeline";
import ResortIllustration from "./ResortIllustration";

export default function HistorySection() {
  return (
    <section className="w-full bg-[#f8f8f5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Timeline */}
        <HistoryTimeline />

        {/* Illustration */}
        <ResortIllustration />
      </div>
    </section>
  );
}
