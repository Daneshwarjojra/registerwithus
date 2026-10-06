import fs from "fs/promises";
import path from "path";

export function blogUploadDirectories() {
  return [
    path.join(process.cwd(), "public", "uploads", "blogs"),
    path.join(process.cwd(), "uploads", "blogs"),
  ];
}

export async function ensureBlogUploadDir() {
  const errors: string[] = [];

  for (const dir of blogUploadDirectories()) {
    try {
      await fs.mkdir(dir, { recursive: true });
      return dir;
    } catch (error: any) {
      errors.push(`${dir}: ${error?.message || "unable to create directory"}`);
    }
  }

  throw new Error(`Unable to create uploads/blogs. ${errors.join(" | ")}`);
}

export function safeBlogFilename(originalName: string) {
  const base = path.basename(originalName || "image").replace(/[^a-zA-Z0-9._-]/g, "_");
  return `${Date.now()}_${base || "image"}`;
}

export async function readBlogUpload(filename: string) {
  const safeName = path.basename(filename);
  if (!safeName || safeName !== filename) return null;

  for (const dir of blogUploadDirectories()) {
    try {
      const data = await fs.readFile(path.join(dir, safeName));
      return { data, filename: safeName };
    } catch {
      // The image may have been stored in the other uploads directory.
    }
  }

  return null;
}
