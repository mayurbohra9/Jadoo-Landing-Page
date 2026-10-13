export default function HomeLink({ children, onClick, ...props }) {
  function returnToTop(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    onClick?.();
    const home = new URL('./index.html', window.location.href);
    window.history.replaceState(null, '', `${home.pathname}${home.search}`);
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }

  return (
    <a {...props} href="./index.html" onClick={returnToTop}>
      {children}
    </a>
  );
}
