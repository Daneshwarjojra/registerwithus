import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { readBlogUpload } from "@/utils/blogUploads";

export const dynamic = "force-dynamic";

const contentTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  const file = await readBlogUpload(filename);
  if (!file) {
    return new NextResponse("Not found", { status: 404 });
  }

  const ext = path.extname(file.filename).toLowerCase();
  return new NextResponse(new Uint8Array(file.data), {
    headers: {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
