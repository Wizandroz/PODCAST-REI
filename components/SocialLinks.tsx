interface SocialLinksProps {
  size?: number;
}

const SOCIALS = [
  { label: 'YT', href: '#' },
  { label: 'IG', href: '#' },
  { label: 'TK', href: '#' },
  { label: 'LI', href: '#' },
  { label: 'SP', href: '#' },
];

export default function SocialLinks({ size = 44 }: SocialLinksProps) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          className="social-link"
          style={{ width: size, height: size }}
          title={s.label}
          aria-label={s.label}
        >
          <span className="social-link-label">{s.label}</span>
        </a>
      ))}
    </div>
  );
}
