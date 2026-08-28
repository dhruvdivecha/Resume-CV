export default function Section({ icon: Icon, title, children }) {
  return (
    <section className="section">
      <h2 className="section__heading">
        {Icon && <Icon size={14} strokeWidth={2.5} aria-hidden="true" />}
        {title}
      </h2>
      {children}
    </section>
  );
}
