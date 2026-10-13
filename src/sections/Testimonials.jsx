import { useState } from 'react';
import { asset, testimonials } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const next = testimonials[(active + 1) % testimonials.length];
  const change = (direction) =>
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  return (
    <section
      id="testimonials"
      className="page-container section-space grid gap-16 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <Reveal>
        <SectionHeading eyebrow="TESTIMONIALS" align="left">
          What People Say
          <br />
          About Us.
        </SectionHeading>
        <div className="mt-8 flex gap-1 lg:mt-16" aria-label="Choose testimonial">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className="flex h-8 w-8 items-center justify-center rounded-full"
            >
              <span
                className={`h-3 w-3 rounded-full transition-colors ${active === index ? 'bg-ink' : 'bg-gray-200'}`}
              />
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal className="testimonial-stack relative pb-20 pl-5 pr-10 sm:pr-16">
        <div
          className="testimonial-back absolute bottom-2 left-[52px] right-7 top-[76px] flex flex-col justify-end rounded-2xl border-2 border-[#f7f7f7] px-8 pb-6 text-muted"
          aria-hidden="true"
        >
          <p className="font-semibold">{next.name}</p>
          <p className="mt-1 text-sm">{next.location}</p>
        </div>
        <figure
          key={active}
          className="testimonial relative rounded-2xl bg-white px-8 pb-8 pt-8 shadow-card sm:px-9"
        >
          <img
            src={asset('images', 'testimonial-mike.webp')}
            alt=""
            width="68"
            height="68"
            className="absolute -left-8 -top-7 h-17 w-17 rounded-full"
            loading="lazy"
          />
          <blockquote className="max-w-[340px] text-sm font-normal leading-7 text-muted">
            “{testimonials[active].quote}”
          </blockquote>
          <figcaption className="mt-7 text-muted" aria-live="polite" aria-atomic="true">
            <p className="font-semibold">{testimonials[active].name}</p>
            <p className="mt-1 text-sm">{testimonials[active].location}</p>
          </figcaption>
        </figure>
        <div className="testimonial-controls absolute right-0 top-16 flex flex-col gap-4 xl:-right-10">
          <button
            className="rounded-full p-1.5 text-muted"
            type="button"
            aria-label="Previous testimonial"
            onClick={() => change(-1)}
          >
            <Icon name="arrow" className="h-5 w-5" />
          </button>
          <button
            className="rounded-full p-1.5 text-ink"
            type="button"
            aria-label="Next testimonial"
            onClick={() => change(1)}
          >
            <Icon name="arrow" className="h-5 w-5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
