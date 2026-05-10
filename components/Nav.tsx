'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS: Array<{ label: string; href: string }> = [
  { label: 'Acasă', href: '/' },
  { label: 'Despre', href: '/about' },
  { label: 'Episoade', href: '/episodes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Echipă', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link className="nav-logo" href="/">
          <img src="/podcast-logo.png" alt="Podcast REI Logo" className="nav-logo-img" />
          <span className="nav-logo-accent">REI</span>
          <span className="nav-logo-tag">INSIGHTS</span>
        </Link>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link className={isActive(pathname, link.href) ? 'active' : ''} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="nav-cta" href="/episodes">
          Ascultă acum →
        </Link>
        <button
          type="button"
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
        </button>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? '' : 'hidden'}`}>
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
