import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "5oob6xe3",
  dataset: "lecture-recordings",
  apiVersion: "2025-07-11",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export { client, urlFor };
