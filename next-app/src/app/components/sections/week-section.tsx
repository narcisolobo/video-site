import { getRecordingsByWeek } from "@/lib/queries";
import { client } from "@/lib/sanity";
import { type LectureRecording } from "@/sanity-studio/sanity.types";
import VideoList from "../video-list";

interface WeekSectionProps {
  module: string;
  weekNumber: number;
}

async function WeekSection({ module, weekNumber }: WeekSectionProps) {
  const RECORDINGS_QUERY = getRecordingsByWeek(weekNumber);
  const recordings = await client.fetch<LectureRecording[]>(
    RECORDINGS_QUERY,
    {},
    { cache: "no-store" },
  );

  return (
    <section id={`week-${weekNumber}`} className="flex flex-col gap-4">
      <div className="card bg-base-100 card-lg shadow-sm">
        <div className="card-body">
          <h1 className="card-title font-display text-3xl">
            {module}, Week {weekNumber}
          </h1>
        </div>
      </div>

      <VideoList recordings={recordings} />
    </section>
  );
}

export default WeekSection;
