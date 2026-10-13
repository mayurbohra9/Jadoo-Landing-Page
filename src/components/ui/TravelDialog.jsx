import { useEffect, useRef } from 'react';
import { destinations } from '../../data/content';
import Icon from './Icon';

export default function TravelDialog({ mode, trip, onClose }) {
  const dialog = useRef(null);
  const demo = mode === 'demo';
  const title = demo
    ? 'Travel with Jadoo'
    : trip
      ? trip.name
      : mode === 'hotels'
        ? 'Find a hotel'
        : 'Find a flight';
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    element.querySelector('select, a, button')?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  function keepFocusInside(event) {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.current.querySelectorAll('button, select, a[href]')];
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  return (
    <dialog
      ref={dialog}
      className="auth-dialog"
      aria-labelledby="travel-title"
      onKeyDown={keepFocusInside}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          onClose();
      }}
    >
      <div className="relative p-7 sm:p-9">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close travel dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-[#fff1da]"
        >
          <Icon name="close" />
        </button>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-coral">
          Jadoo preview
        </p>
        <h2 id="travel-title" className="pr-5 font-display text-3xl font-bold">
          {title}
        </h2>
        {demo ? (
          <div
            className="my-6 flex aspect-video items-center justify-center rounded-2xl bg-[#fff1da] text-coral"
            aria-hidden="true"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-coral text-2xl text-white shadow-play">
              &#9654;
            </span>
          </div>
        ) : trip ? (
          <dl className="my-6 grid grid-cols-2 gap-4 text-sm">
            <dt className="text-muted">Location</dt>
            <dd>{trip.name}</dd>
            <dt className="text-muted">Sample price</dt>
            <dd className="font-semibold">{trip.price}</dd>
            <dt className="text-muted">Duration</dt>
            <dd>{trip.duration}</dd>
          </dl>
        ) : (
          <label className="my-6 block text-sm font-medium">
            Destination
            <select className="account-input" defaultValue={destinations[0].name}>
              {destinations.map((destination) => (
                <option key={destination.name}>{destination.name}</option>
              ))}
            </select>
          </label>
        )}
        <p className="mb-6 text-sm leading-6 text-muted">
          {demo
            ? 'Our travel demo video is coming soon. Explore our destinations while you wait.'
            : trip
              ? 'This is a sample itinerary and price. Online booking is not connected. Explore how booking works below.'
              : `This demo does not search live ${mode === 'hotels' ? 'hotel' : 'flight'} availability or prices. Explore our featured destinations for travel inspiration.`}
        </p>
        {demo ? (
          <button type="button" className="primary-button w-full" onClick={onClose}>
            Close
          </button>
        ) : (
          <a
            className="primary-button block text-center"
            href={trip ? '#booking' : '#destinations'}
            onClick={() => onClose(true)}
          >
            {trip ? 'See booking steps' : 'Explore destinations'}
          </a>
        )}
      </div>
    </dialog>
  );
}
