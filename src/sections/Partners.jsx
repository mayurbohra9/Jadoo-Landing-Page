import { asset, partners } from '../data/content';
import Reveal from '../components/ui/Reveal';

export default function Partners() {
  return (
    <section className="page-container py-12 md:py-16" aria-label="Our travel partners">
      <Reveal className="flex flex-wrap items-center justify-center gap-5 lg:justify-between">
        {partners.map((name, index) => (
          <div
            key={name}
            className={`partner-logo flex h-24 w-48 items-center justify-center rounded-xl px-6 ${name === 'Expedia' ? 'partner-featured' : ''}`}
          >
            <img
              src={asset(
                'logos',
                ['axon.webp', 'jetstar.webp', 'expedia.webp', 'qantas.webp', 'alitalia.webp'][
                  index
                ],
              )}
              alt={name}
              className="max-h-14 w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </Reveal>
    </section>
  );
}
