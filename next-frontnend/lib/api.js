export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://registerwithus.in"
).replace(/\/$/, "");

export function mediaUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
