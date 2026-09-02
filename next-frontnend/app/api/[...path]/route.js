import { API_BASE_URL } from "@/lib/api";

async function proxyRequest(request, context) {
  const { path } = await context.params;
  const incoming = new URL(request.url);
  const target = `${API_BASE_URL}/api/${path.join("/")}${incoming.search}`;

  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);

  const init = {
    method: request.method,
    headers,
    cache: "no-store",
  };

  if (!["GET", "HEAD"].includes(request.method)) {
    init.body = await request.text();
  }

  try {
    const response = await fetch(target, init);
    const responseType = response.headers.get("content-type") || "";

    if (!responseType.includes("application/json")) {
      return Response.json(
        { success: false, message: "Upstream API did not return JSON" },
        { status: 502 }
      );
    }

    const body = await response.arrayBuffer();
    return new Response(body, {
      status: response.status,
      headers: { "content-type": responseType },
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message || "Upstream API request failed" },
      { status: 502 }
    );
  }
}

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;
