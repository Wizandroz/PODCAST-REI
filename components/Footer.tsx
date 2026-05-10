import Link from 'next/link';
import SocialLinks from './SocialLinks';

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: 'Acasă', href: '/' },
  { label: 'Despre', href: '/about' },
  { label: 'Episoade', href: '/episodes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Echipă', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

const THEMES = [
  'Erasmus',
  'Piața muncii',
  'Geopolitică',
  'Ideologii',
  'Piețe financiare',
  'Etică',
  'Soft Skills',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/podcast-logo.png" alt="Podcast REI" className="footer-brand-logo" />
            <div className="footer-brand-name">
              REI<span className="footer-brand-name-accent"> INSIGHTS</span>
            </div>
          </div>
          <div className="footer-tagline">Unscripted. Unfiltered. Uncut.</div>
          <p className="footer-desc">
            Podcastul Facultății de Relații Economice Internaționale — unde teoria întâlnește
            realitatea, iar profesorii devin mentori publici.
          </p>
          <SocialLinks />
        </div>
        <div>
          <div className="footer-col-title">Navigare</div>
          <ul className="footer-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Teme</div>
          <ul className="footer-links">
            {THEMES.map((t) => (
              <li key={t}>
                <Link href="/episodes">{t}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li>
              <Link href="/contact">Propune un invitat</Link>
            </li>
            <li>
              <Link href="/contact">Colaborări</Link>
            </li>
            <li>
              <Link href="/contact">Echipa de producție</Link>
            </li>
            <li>
              <a href="https://rei.ase.ro" target="_blank" rel="noreferrer">
                Facultatea REI
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 REI Insights — Podcast REI Team · ASE București</span>
        <span className="footer-copy footer-copy-accent">
          FACULTATEA DE RELAȚII ECONOMICE INTERNAȚIONALE
        </span>
      </div>
    </footer>
  );
}
