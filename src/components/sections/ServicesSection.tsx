import { services } from "../../data/siteContent";
import { SectionHeader } from "../ui/SectionHeader";
import { ServiceCard } from "../ui/ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Strategic engineering services for business-critical products"
          description="From architecture through release, we help teams deliver secure, scalable software with lower operational risk and stronger delivery confidence."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
