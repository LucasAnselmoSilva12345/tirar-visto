interface StatsProps {
  value: number;
  label: string;
}

const stats: StatsProps[] = [
  { value: 509, label: 'Vistos Tirados' },
  { value: 602, label: 'Passaportes Tirados' },
  { value: 634, label: 'Famílias Felizes' },
];

export function Stats() {
  return (
    <div className="flex flex-row divide-y sm:divide-y-0 sm:divide-x divide-white-medium">
      {stats.map((stat, index) => (
        <div key={index} className="flex-1 px-7 py-4">
          <div className="text-[2.75rem] font-medium text-black-dark">
            {stat.value}
          </div>
          <div className="text-gray-dark text-base font-normal mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
