import type { ReactNode } from 'react';

interface TagProps {
  label: ReactNode;
  variant?: 'blue' | 'cream' | 'red' | 'live';
  dot?: boolean;
}

export default function Tag({ label, variant = 'blue', dot = false }: TagProps) {
  return (
    <span className={`tag tag-${variant}${dot ? ' tag-dot' : ''}`}>{label}</span>
  );
}
