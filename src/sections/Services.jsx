import { asset, services } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import DecorativePluses from '../components/ui/DecorativePluses';

export default function Services() {
  return (
    <section id="services" className="page-container section-space relative">
      <DecorativePluses variant="services" className="services-pluses absolute hidden lg:block" />
      <Reveal>
        <SectionHeading eyebrow="CATEGORY">We Offer Best Services</SectionHeading>
      </Reveal>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 90}
            className={`service-shell ${service.featured ? 'service-featured' : ''}`}
          >
            <article className="service-card relative flex h-full flex-col items-center px-7 py-9 text-center">
              <div className="mb-6 flex h-24 items-center justify-center">
                <img
                  src={asset('icons', service.icon)}
                  alt=""
                  className={`service-icon ${service.icon === 'flight.svg' ? 'service-icon-flight' : ''}`}
                  width="88"
                  height="88"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="max-w-44 text-base leading-6 text-muted">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
