export default function SectionHeading({ eyebrow, children, align = 'center' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <p className="mb-4 text-sm font-semibold text-muted md:text-lg">{eyebrow}</p>
      <h2 className="section-title">{children}</h2>
    </div>
  );
}
