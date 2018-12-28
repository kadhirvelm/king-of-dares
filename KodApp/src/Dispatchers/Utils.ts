const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://wwww.kod.com"
    : "http://localhost:3001";

export function retrieveUrl(slug: string) {
  return BASE_URL + slug;
}
