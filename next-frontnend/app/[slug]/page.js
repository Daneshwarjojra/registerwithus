import { notFound } from "next/navigation";
import Servicedetails from "@/components/Services/Servicedetails";
import Taskey from "@/components/Home/Taskey";
import JsonLd from "@/components/Common/JsonLd";
import { getServiceBySlug, SERVICE_SLUGS } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/structuredData";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service page does not exist.",
      path: `/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: service.metaTitle || `${service.service} | Register With Us`,
    description: service.metaDescription,
    path: `/${slug}`,
    keywords: service.metaKeywords,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service, slug)} />
      <Servicedetails service={service} slug={slug} />
      <Taskey
        heading={`Still Have <br /><span className="">Questions?</span>`}
        subheading="Let’s connect and clear all your doubts. Our expert team is ready to assist you."
        buttonText="Reach Out"
        buttonLink="/contact"
        imageSrc="/img/consultant3.jpeg"
      />
      {service.whyChooseUs ? (
        <section>
          <div className="container py-5">
            <h2 className="text-center mb-4 section-title fw-bold text-dark">
              {service.whyChooseUs.heading}
            </h2>
            <p className="text-center mb-4">{service.whyChooseUs.points[0]}</p>
            <div className="row justify-content-center">
              {service.whyChooseUs.points.slice(1).map((point) => (
                <div className="col-md-6 mb-3" key={point}>
                  <div className="border p-3 h-100 rounded shadow-sm bg-light">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    {point.replace(/^•\s*/, "")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
