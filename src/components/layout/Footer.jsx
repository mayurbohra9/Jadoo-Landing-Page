import { asset, footerGroups } from '../../data/content';
import HomeLink from '../ui/HomeLink';

export default function Footer() {
  return (
    <footer className="page-container pb-8 pt-20 font-medium md:pt-24">
      <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.35fr]">
        <div className="sm:col-span-3 lg:col-span-1">
          <HomeLink
            aria-label="Jadoo home"
            className="text-[44px] font-medium tracking-tight text-ink"
          >
            Jadoo.
          </HomeLink>
          <p className="mt-4 max-w-52 text-xs leading-4 text-muted">
            Book your trip in minute, get full
            <br />
            Control for much longer.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-6 text-lg font-bold text-black">{group.title}</h3>
            <ul className="space-y-3 text-muted">
              {group.links.map((label) => (
                <li key={label}>
                  {label === 'Mobile' ? (
                    <a className="nav-link" href="#discover-app">
                      {label}
                    </a>
                  ) : (
                    <span aria-disabled="true" title={`${label} is unavailable`}>
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div id="discover-app" className="sm:col-span-3 lg:col-span-1">
          <div className="flex gap-4">
            {[
              ['Facebook', 'facebook.svg'],
              ['Instagram', 'instagram.svg'],
              ['Twitter', 'twitter.svg'],
            ].map(([name, icon]) => (
              <span
                key={name}
                aria-label={name}
                role="img"
                title={`${name} profile is unavailable`}
                className={`social-link ${name === 'Instagram' ? 'instagram-link' : ''}`}
              >
                <img
                  src={asset('icons', icon)}
                  alt=""
                  className={name === 'Instagram' ? 'instagram-asset' : 'h-4 w-4 object-contain'}
                />
              </span>
            ))}
          </div>
          <p className="mb-4 mt-5 text-lg text-muted">Discover our app</p>
          <div className="flex gap-2">
            <span title="Google Play listing is unavailable">
              <img
                src={asset('logos', 'google-play.png')}
                alt="Get it on Google Play"
                width="107"
                height="35"
                loading="lazy"
              />
            </span>
            <span title="App Store listing is unavailable">
              <img
                src={asset('logos', 'app-store.png')}
                alt="Available on the App Store"
                width="100"
                height="35"
                loading="lazy"
              />
            </span>
          </div>
        </div>
      </div>
      <p className="mt-16 text-center text-xs text-muted">All rights reserved@jadoo.co</p>
    </footer>
  );
}
