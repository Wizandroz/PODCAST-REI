const ITEMS = [
  'REI Insights',
  '·',
  'Dialoguri la Granița Economiei',
  '·',
  'UNSCRIPTED. UNFILTERED. UNCUT',
  '·',
  'Facultatea de REI',
  '·',
  'Profesori. Studenți. Idei care contează.',
  '·',
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className={`marquee-item ${item === '·' ? 'marquee-item-blue' : ''}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
