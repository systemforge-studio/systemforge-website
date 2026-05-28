import { services } from "../../data/siteContent";
import { SectionHeader } from "../ui/SectionHeader";
import { ServiceCard } from "../ui/ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Strategic engineering services for business-critical products"
          description="From architecture through release, we help teams deliver secure, scalable software with lower operational risk and stronger delivery confidence."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-up" style={{ animationDelay: `${index * 70}ms` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
