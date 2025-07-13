import { LectureRecording } from "@/sanity-studio/sanity.types";

function groupRecordingsByDay(recordings: LectureRecording[]) {
  const formatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });

  return recordings.reduce<Record<string, LectureRecording[]>>((acc, r) => {
    const key = r.date ? formatter.format(new Date(r.date)) : "Unknown Day";
    if (!acc[key]) acc[key] = [];
    acc[key].push(r);
    return acc;
  }, {});
}

export { groupRecordingsByDay };
