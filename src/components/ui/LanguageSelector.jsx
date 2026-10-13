import { useEffect, useId, useRef, useState } from 'react';
import Icon from './Icon';

const languages = [{ code: 'EN', name: 'English' }];

export default function LanguageSelector() {
  const [language, setLanguage] = useState('EN');
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const trigger = useRef(null);
  const options = useRef([]);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    options.current[languages.findIndex((item) => item.code === language)]?.focus();
    function closeOutside(event) {
      if (!root.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open, language]);

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  function navigate(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close();
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const focusable = [
        ...document.querySelectorAll('a[href], button, input, select, [tabindex="0"]'),
      ].filter(
        (element) =>
          element.getClientRects().length &&
          (!root.current.contains(element) || element === trigger.current),
      );
      const index = focusable.indexOf(trigger.current);
      setOpen(false);
      focusable[index + (event.shiftKey ? -1 : 1)]?.focus();
    } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const index = options.current.indexOf(document.activeElement);
      const next =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? languages.length - 1
            : (index + (event.key === 'ArrowDown' ? 1 : -1) + languages.length) % languages.length;
      options.current[next]?.focus();
    }
  }

  return (
    <div ref={root} className="relative" onKeyDown={open ? navigate : undefined}>
      <button
        ref={trigger}
        type="button"
        aria-label={`Language preference: ${language}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (!open && ['ArrowDown', 'ArrowUp'].includes(event.key)) {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="flex items-center gap-1.5 rounded px-1 py-2 text-sm"
      >
        <span>{language}</span>
        <Icon name="arrow" className="h-3 w-3" />
      </button>
      {open && (
        <ul
          id={menuId}
          role="listbox"
          aria-label="Language preference"
          className="language-menu absolute right-0 top-full z-50 mt-2 w-40 rounded-xl border border-[#f0e4cf] bg-[#fffaf1] p-1.5 shadow-lg"
        >
          {languages.map((item, index) => (
            <li key={item.code} role="presentation">
              <button
                ref={(element) => {
                  options.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={language === item.code}
                onClick={() => {
                  setLanguage(item.code);
                  close();
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#fff1da] ${language === item.code ? 'bg-[#fff1da] text-ink' : 'text-muted'}`}
              >
                <span>{item.name}</span>
                <span className="text-xs">{item.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
