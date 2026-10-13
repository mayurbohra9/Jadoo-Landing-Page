import { asset } from '../data/content';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero page-container relative grid items-center lg:grid-cols-2"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy relative z-10 pb-8 pt-8 lg:pb-20 lg:pt-12">
        <p className="mb-6 text-sm font-bold uppercase text-coral md:text-xl">
          Best destinations around the world
        </p>
        <h1 id="hero-title" className="hero-title">
          Travel,{' '}
          <span className="relative">
            enjoy
            <img
              className="hero-underline"
              src={asset('decorations', 'heading-underline.svg')}
              alt=""
            />
          </span>
          <br />
          and live a new
          <br />
          and full life
        </h1>
        <p className="mt-7 max-w-[365px] text-sm leading-7 text-muted md:text-base">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it
          engrossed listening. Park gate sell they west hard for the.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-7 md:gap-10">
          <a className="primary-button" href="#destinations">
            Find out more
          </a>
          <span
            aria-disabled="true"
            title="Demo video is unavailable"
            className="flex items-center gap-5 text-muted"
          >
            <span
              className="flex h-13 w-13 items-center justify-center rounded-full bg-coral text-white shadow-play"
              aria-hidden="true"
            >
              ▶
            </span>
            <span>Play Demo</span>
          </span>
        </div>
      </div>
      <img
        className="hero-image relative w-full"
        src={asset('images', 'hero-traveler.webp')}
        alt="A smiling traveler with a backpack sitting on an orange suitcase"
        width="783"
        height="764"
        fetchPriority="high"
      />
    </section>
  );
}
