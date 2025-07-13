import { LectureRecording } from "@/sanity-studio/sanity.types";
import VideoCard from "./videos/video-card";
import { groupRecordingsByDay } from "@/utils";

interface VideoListProps {
  recordings: LectureRecording[];
}

function VideoList({ recordings }: VideoListProps) {
  const grouped = groupRecordingsByDay(recordings);

  if (recordings.length === 0) {
    return (
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <p className="text-base-content/80 text-lg">No recordings found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([day, dayRecordings]) => (
        <section key={day}>
          <div className="card bg-base-300 shadow">
            <div className="card-body">
              <h2 className="font-display text-base-content mb-4 text-xl font-semibold">
                {day}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dayRecordings.map((r) => (
                  <VideoCard key={r._id} recording={r} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default VideoList;
