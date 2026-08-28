export default function Bullets({ items }) {
  if (!items?.length) return null;

  return (
    <ul className="bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
