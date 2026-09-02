export async function fetchJson(url, options) {
  const response = await fetch(url, options);
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return { success: false, blogs: [], categories: [] };
  }

  return response.json();
}
