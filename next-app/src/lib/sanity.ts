import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: "5oob6xe3",
  dataset: "lecture-recordings",
  apiVersion: "2025-07-11",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export { client, urlFor };
