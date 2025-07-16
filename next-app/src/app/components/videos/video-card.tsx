import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/utils";
import { LectureRecording } from "@/sanity-studio/sanity.types";

interface VideoCardProps {
  recording: LectureRecording;
}

function VideoCard({ recording }: VideoCardProps) {
  return (
    <div
      key={recording._id}
      className="card bg-base-100 hover:bg-base-200 relative shadow transition-transform duration-200 ease-in-out hover:-translate-x-1 hover:-translate-y-1"
    >
      <a
        href={recording.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`Go to video: ${recording.title}`}
      />
      <figure>
        {recording.thumbnail && (
          <Image
            src={urlFor(recording.thumbnail).width(500).url()}
            alt={recording.title || "Lecture thumbnail"}
            width={500}
            height={340}
            className="rounded-t-lg"
            priority={false}
          />
        )}
      </figure>
      <div className="card-body justify-between p-6">
        <div className="collapse flex-grow">
          <input type="checkbox" defaultChecked />
          <h3 className="card-title collapse-title p-0">{recording.title}</h3>
          <div className="prose">
            {recording?.description && (
              <PortableText value={recording.description} />
            )}
          </div>
        </div>
        <div className="text-base-content/70 flex items-center justify-between text-xs uppercase">
          <p>
            week {recording.week}, day {recording.day}
          </p>
          <p className="text-right">
            {recording.date && formatDate(recording.date)}
          </p>
        </div>
        <a
          href={recording.videoUrl}
          target="_blank"
          className="btn btn-sm btn-primary mt-2"
        >
          Watch Video
        </a>
      </div>
    </div>
  );
}

export default VideoCard;
