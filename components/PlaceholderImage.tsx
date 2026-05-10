import type { CSSProperties } from 'react';

interface PlaceholderImageProps {
  label: string;
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
}

export default function PlaceholderImage({
  label,
  width = '100%',
  height = '100%',
  style = {},
}: PlaceholderImageProps) {
  return (
    <div className="img-placeholder" style={{ width, height, minHeight: 180, ...style }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="11" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 22 L10 16 L16 20 L22 14 L30 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
      <span style={{ padding: '0 16px', textAlign: 'center', lineHeight: 1.5 }}>{label}</span>
    </div>
  );
}
