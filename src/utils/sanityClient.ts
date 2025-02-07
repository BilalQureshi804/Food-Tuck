import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "v8ri5c79", // Replace with your Sanity project ID
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
});
