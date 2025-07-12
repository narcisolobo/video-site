import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { LectureRecording } from "@/sanity-studio/sanity.types";

type ThumbnailType = NonNullable<LectureRecording["thumbnail"]>;

const client = createClient({
  projectId: "5oob6xe3",
  dataset: "lecture-recordings",
  apiVersion: "2025-07-11",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source: ThumbnailType) {
  return builder.image(source);
}

export { client, urlFor };
