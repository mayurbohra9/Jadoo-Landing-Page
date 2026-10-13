import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

export default function AuthDialog({ mode, onClose }) {
  const dialog = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const signup = mode === 'signup';

  useEffect(() => {
    const element = dialog.current;
    element.showModal();
    element.querySelector('input')?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function submit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  function keepFocusInside(event) {
    if (event.key !== 'Tab') return;
    const controls = [
      ...dialog.current.querySelectorAll(
        'button:not(:disabled), input:not(:disabled), a[href], select:not(:disabled), textarea:not(:disabled)',
      ),
    ].filter((element) => element.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <dialog
      ref={dialog}
      className="auth-dialog"
      aria-labelledby="account-title"
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
          aria-label="Close account dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-[#fff1da]"
        >
          <Icon name="close" />
        </button>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-coral">Jadoo</p>
        <h2 id="account-title" className="font-display text-3xl font-bold">
          {signup ? 'Create your account' : 'Welcome back'}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Preview only. Account services are not connected, and your details will not be sent or
          saved.
        </p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          {signup && (
            <label className="block text-sm font-medium">
              Your name
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                className="account-input"
              />
            </label>
          )}
          <label className="block text-sm font-medium">
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="account-input"
            />
          </label>
          <label className="block text-sm font-medium">
            Password
            <input
              name="password"
              type="password"
              autoComplete={signup ? 'new-password' : 'current-password'}
              minLength={8}
              required
              className="account-input"
            />
            <span className="mt-1 block text-xs font-normal text-muted">
              Use at least 8 characters for this preview.
            </span>
          </label>
          <button type="submit" className="primary-button w-full">
            {signup ? 'Preview sign up' : 'Preview login'}
          </button>
          <p role="status" className="min-h-10 text-sm leading-5 text-muted">
            {submitted
              ? 'Form validated. No account was created or signed in, and no details were sent or saved.'
              : ''}
          </p>
        </form>
      </div>
    </dialog>
  );
}
