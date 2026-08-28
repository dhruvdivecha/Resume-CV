export default function TechChips({ items }) {
  if (!items?.length) return null;

  return (
    <div className="tech">
      {items.map((item) => (
        <span className="tech__chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
