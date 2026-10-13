import { useState } from 'react';
import { asset, bookingSteps } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';

export default function BookingSteps() {
  const [saved, setSaved] = useState(false);
  return (
    <section
      id="booking"
      className="page-container section-space grid items-center gap-16 lg:grid-cols-2 lg:gap-20"
    >
      <Reveal>
        <SectionHeading eyebrow="Easy and Fast" align="left">
          Book Your Next Trip
          <br />
          In 3 Easy Steps
        </SectionHeading>
        <ol className="mt-10 space-y-9">
          {bookingSteps.map((step) => (
            <li key={step.title} className="flex items-start gap-5">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: step.color }}
              >
                <img src={asset('icons', step.icon)} alt="" width="24" height="24" loading="lazy" />
              </span>
              <div className="max-w-85 text-muted">
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-1 text-sm leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
      <Reveal
        className="booking-visual relative mx-auto w-full max-w-[440px] pb-6 pr-8 sm:pr-16"
        delay={100}
      >
        <article className="relative rounded-3xl bg-white p-6 shadow-card">
          <img
            src={asset('images', 'greece-trip.webp')}
            alt="A traveler overlooking Santorini, Greece"
            className="h-40 w-full rounded-3xl object-cover"
            width="321"
            height="161"
            loading="lazy"
          />
          <h3 className="mt-6 text-lg font-medium text-black">Trip To Greece</h3>
          <p className="mt-3 text-sm text-muted">
            14–29 June <span className="mx-2">|</span> by Robbin joseph
          </p>
          <div className="mt-5 flex gap-4">
            {['leaf.svg', 'map.svg', 'trip-send.svg'].map((icon) => (
              <span
                key={icon}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5]"
              >
                <img src={asset('icons', icon)} alt="" width="16" height="16" loading="lazy" />
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="flex items-center gap-3 text-sm text-muted">
              <img src={asset('icons', 'building.svg')} alt="" width="16" height="16" />
              24 people going
            </p>
            <button
              type="button"
              aria-label={saved ? 'Unsave Greece trip' : 'Save Greece trip'}
              aria-pressed={saved}
              onClick={() => setSaved(!saved)}
              className={`rounded-full p-2 text-violet ${saved ? 'heart-saved' : ''}`}
            >
              <Icon name="heart" />
            </button>
          </div>
        </article>
        <div className="ongoing-trip absolute -right-1 bottom-20 flex w-[245px] gap-3 rounded-2xl bg-white p-4 shadow-card sm:-right-12 lg:-right-3 xl:-right-12">
          <img
            src={asset('images', 'rome-trip.webp')}
            alt=""
            width="50"
            height="50"
            className="h-12 w-12 rounded-full"
            loading="lazy"
          />
          <div className="flex-1">
            <p className="text-xs text-muted">Ongoing</p>
            <p className="mt-1 font-medium text-black">Trip to rome</p>
            <p className="mb-2 mt-3 text-xs text-black">
              <span className="text-violet">40%</span> completed
            </p>
            <div
              className="h-1 rounded-full bg-gray-100"
              role="progressbar"
              aria-label="Rome trip completion"
              aria-valuenow={40}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="h-full w-2/5 rounded-full bg-violet" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
