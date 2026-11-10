export default function PlanList({ items }: { items: readonly string[] }) {
  return (
    <ul className="divide-y divide-haarlijn border-y border-haarlijn">
      {items.map((item) => (
        <li key={item} className="py-3">
          {item}
        </li>
      ))}
    </ul>
  );
}
