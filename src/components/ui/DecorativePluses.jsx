import { asset } from '../../data/content';

export default function DecorativePluses({ className = '', variant = 'newsletter' }) {
  return (
    <img
      src={asset('decorations', `${variant}-pluses.svg`)}
      alt=""
      aria-hidden="true"
      width="153"
      height="166"
      loading="lazy"
      className={`decorative-pluses ${className}`}
    />
  );
}
