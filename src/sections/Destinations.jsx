import { useRef, useState } from 'react';
import TravelDialog from '../components/ui/TravelDialog';
import { asset, destinations } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

export default function Destinations() {
  const [selected, setSelected] = useState(null);
  const trigger = useRef(null);
  return (
    <section id="destinations" className="page-container section-space">
      <Reveal>
        <SectionHeading eyebrow="Top Selling">Top Destinations</SectionHeading>
      </Reveal>
      <div className="relative mx-auto mt-14 grid max-w-[1040px] gap-8 md:grid-cols-3 lg:gap-10">
        <img
          src={asset('decorations', 'destination-swirl.svg')}
          alt=""
          className="absolute -right-14 bottom-12 hidden w-24 xl:block"
          loading="lazy"
        />
        {destinations.map((destination, index) => (
          <Reveal key={destination.name} delay={index * 90}>
            <article className="destination-card relative overflow-hidden rounded-3xl bg-white shadow-card">
              <button
                type="button"
                className="absolute inset-0 z-10 rounded-3xl hover:bg-ink/5"
                aria-label={`View trip details for ${destination.name}`}
                onClick={(event) => {
                  trigger.current = event.currentTarget;
                  setSelected(destination);
                }}
              />
              <img
                className="h-72 w-full object-cover object-top sm:h-80"
                src={asset('images', destination.image)}
                alt={
                  destination.name === 'Rome, Italy'
                    ? 'The Colosseum in Rome'
                    : destination.name === 'London, UK'
                      ? 'Big Ben in London in autumn'
                      : 'Helsinki Cathedral overlooking the city'
                }
                width="314"
                height="327"
                loading="lazy"
              />
              <div className="px-5 pb-8 pt-6 font-medium text-muted">
                <div className="flex justify-between gap-3 text-base">
                  <h3>{destination.name}</h3>
                  <span>{destination.price}</span>
                </div>
                <p className="mt-4 flex items-center gap-3 text-sm">
                  <img src={asset('icons', 'navigation.svg')} alt="" width="18" height="18" />
                  {destination.duration}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {selected && (
        <TravelDialog
          trip={selected}
          onClose={(navigate) => {
            setSelected(null);
            if (!navigate) requestAnimationFrame(() => trigger.current?.focus());
          }}
        />
      )}
    </section>
  );
}
