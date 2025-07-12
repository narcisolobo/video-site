import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { LectureRecording } from "@/sanity-studio/sanity.types";

interface VideoListProps {
  recordings: LectureRecording[];
}

function VideoList({ recordings }: VideoListProps) {
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
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))] gap-4">
      {recordings.map((r) => (
        <div
          key={r._id}
          className="card bg-base-100 hover:bg-base-200 relative shadow transition-transform duration-200 ease-in-out hover:-translate-x-1 hover:-translate-y-1"
        >
          <a
            href={r.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`Go to video: ${r.title}`}
          />
          <figure>
            {r.thumbnail && (
              <Image
                src={urlFor(r.thumbnail).width(500).url()}
                alt={r.title || "Lecture thumbnail"}
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
              <h3 className="card-title collapse-title p-0">{r.title}</h3>
              <p className="collapse-content p-0">{r.description}</p>
            </div>
            <a
              href={r.videoUrl}
              target="_blank"
              className="btn btn-sm btn-primary mt-2"
            >
              Watch Video
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
