import { useState } from 'react';
import { asset } from '../data/content';
import Reveal from '../components/ui/Reveal';
import DecorativePluses from '../components/ui/DecorativePluses';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  function submit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <section id="newsletter" className="page-container relative py-16 md:py-20">
      <Reveal className="newsletter relative isolate rounded-3xl rounded-tl-[100px] bg-[#f8f6fd] px-6 py-16 text-center md:px-20 md:py-20">
        <img
          src={asset('decorations', 'newsletter-rings-left.svg')}
          alt=""
          className="newsletter-rings-left pointer-events-none absolute bottom-0 left-6 -z-10 w-80 opacity-10"
          loading="lazy"
        />
        <img
          src={asset('decorations', 'newsletter-rings-right.svg')}
          alt=""
          className="newsletter-rings-right pointer-events-none absolute right-8 top-0 -z-10 w-48 opacity-10"
          loading="lazy"
        />
        <span className="newsletter-send absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#747def] to-[#5e3be1]">
          <img
            src={asset('icons', 'newsletter-send.svg')}
            alt=""
            className="w-9 translate-x-0.5 -translate-y-0.5"
          />
        </span>
        <h2 className="mx-auto max-w-[850px] text-2xl font-semibold leading-relaxed text-muted md:text-[32px]">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>
        <form
          onSubmit={submit}
          className="mx-auto mt-12 flex max-w-[620px] flex-col gap-5 sm:flex-row"
        >
          <label className="flex flex-1 items-center gap-4 rounded-xl bg-white px-6 py-5 text-muted">
            <img
              src={asset('icons', 'email.svg')}
              alt=""
              width="21"
              height="18"
              className="h-[18px] w-[21px] shrink-0"
            />
            <span className="sr-only">Your email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubmitted(false);
              }}
              placeholder="Your email"
              required
              autoComplete="email"
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none"
            />
          </label>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-b from-[#ff946d] to-[#ff7d68] px-10 py-5 font-medium text-white transition-transform hover:-translate-y-1"
          >
            Subscribe
          </button>
        </form>
        <p role="status" className="mt-5 min-h-6 text-sm text-muted">
          {submitted
            ? 'Thanks for your interest! This preview does not send or store your email.'
            : ''}
        </p>
      </Reveal>
      <DecorativePluses className="newsletter-plus absolute -right-12 bottom-0 hidden xl:block" />
    </section>
  );
}
