import services from "@/components/Services/services.json";

export const SERVICE_SLUGS = [
  ...new Set(services.map((item) => item.service).filter(Boolean)),
];

export function getServiceBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return (
    services.find((item) => item.service.toLowerCase().trim() === normalized) ||
    null
  );
}
