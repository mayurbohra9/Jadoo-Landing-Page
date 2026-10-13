import { useEffect, useRef, useState } from 'react';
import { asset } from '../../data/content';
import Icon from '../ui/Icon';
import LanguageSelector from '../ui/LanguageSelector';
import HomeLink from '../ui/HomeLink';
import AuthDialog from '../ui/AuthDialog';
import TravelDialog from '../ui/TravelDialog';

const navigation = [
  ['Destinations', '#destinations'],
  ['Hotels', null],
  ['Flights', null],
  ['Bookings', '#booking'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [searchMode, setSearchMode] = useState(null);
  const authTrigger = useRef(null);
  const menuButton = useRef(null);

  function openAccount(mode, event) {
    authTrigger.current = event.currentTarget;
    setOpen(false);
    setAuthMode(mode);
  }

  function closeAccount() {
    setAuthMode(null);
    requestAnimationFrame(() => {
      const trigger = authTrigger.current;
      (trigger?.getClientRects().length ? trigger : menuButton.current)?.focus();
    });
  }

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner page-container flex items-center justify-between gap-8">
        <HomeLink aria-label="Jadoo home" onClick={() => setOpen(false)}>
          <img src={asset('logos', 'jadoo.png')} alt="Jadoo" width="115" height="34" />
        </HomeLink>
        <button
          ref={menuButton}
          type="button"
          className="rounded-lg p-2 lg:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${open ? 'flex' : 'hidden'} absolute left-5 right-5 top-full flex-col gap-5 rounded-2xl bg-white p-6 shadow-card lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigation.map(([label, href]) =>
            href ? (
              <a key={label} className="nav-link" href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ) : (
              <button
                key={label}
                type="button"
                className="nav-link text-left"
                onClick={(event) => {
                  authTrigger.current = event.currentTarget;
                  setOpen(false);
                  setSearchMode(label.toLowerCase());
                }}
              >
                {label}
              </button>
            ),
          )}
          <button
            type="button"
            className="nav-link text-left"
            onClick={(event) => openAccount('login', event)}
          >
            Login
          </button>
          <button
            type="button"
            className="rounded border border-ink px-5 py-2 transition-colors hover:bg-ink hover:text-white"
            onClick={(event) => openAccount('signup', event)}
          >
            Sign up
          </button>
          <LanguageSelector />
        </nav>
      </div>
      {searchMode && (
        <TravelDialog
          mode={searchMode}
          onClose={(navigate) => {
            setSearchMode(null);
            if (!navigate)
              requestAnimationFrame(() => {
                const trigger = authTrigger.current;
                (trigger?.getClientRects().length ? trigger : menuButton.current)?.focus();
              });
          }}
        />
      )}
      {authMode && <AuthDialog key={authMode} mode={authMode} onClose={closeAccount} />}
    </header>
  );
}
