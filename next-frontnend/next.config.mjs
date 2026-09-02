import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "3001" },
      { protocol: "https", hostname: "registerwithus.in" },
      { protocol: "https", hostname: "www.registerwithus.in" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
    ],
  },
};

export default nextConfig;
