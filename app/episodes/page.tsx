'use client';

import Link from 'next/link';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import PlaceholderImage from '@/components/PlaceholderImage';
import RevealBlock from '@/components/RevealBlock';
import Tag from '@/components/Tag';
import { EPISODES } from '@/lib/data';

const FILTERS = [
  'Toate',
  'Erasmus',
  'Piața muncii',
  'Geopolitică',
  'Ideologii',
  'Piețe financiare',
  'Etică',
  'Soft Skills',
];

export default function EpisodesPage() {
  const [activeFilter, setActiveFilter] = useState('Toate');

  const filtered =
    activeFilter === 'Toate'
      ? EPISODES
      : EPISODES.filter((ep) =>
          ep.tags.some(
            (t) =>
              t.toLowerCase().includes(activeFilter.toLowerCase()) ||
              activeFilter.toLowerCase().includes(t.toLowerCase())
          )
        );

  const featuredEp = EPISODES[0];
  const showFeatured =
    activeFilter === 'Toate' ||
    featuredEp.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="page page-with-banner page-transition">
      <PageBanner title="Episoade" subtitle="Catalog & Arhivă" />
      <section
        className="r-section-tight"
        style={{ padding: '80px 40px 64px', background: 'var(--ink)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Catalog episoade</div>
            <h1 className="display-xl" style={{ marginBottom: 16 }}>
              EPISOADE
            </h1>
            <p
              style={{
                fontSize: 16,
                color: 'var(--grey-light)',
                maxWidth: 560,
                marginBottom: 48,
              }}
            >
              Un sezon inaugural de conversații cu cadrele didactice REI. Primul episod apare{' '}
              <span style={{ color: 'var(--blue-bright)', fontWeight: 600 }}>
                săptămâna aceasta
              </span>
              .
            </p>
          </RevealBlock>

          <RevealBlock delay={0.1}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 64 }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </RevealBlock>

          {showFeatured && (
            <RevealBlock delay={0.15}>
              <div style={{ marginBottom: 48 }}>
                <div
                  style={{
                    fontFamily: 'var(--ff-mono)',
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    color: 'var(--blue-bright)',
                    textTransform: 'uppercase',
                    marginBottom: 16,
                  }}
                >
                  ★ Episod special de lansare
                </div>
                <Link
                  href={`/episodes/${featuredEp.id}`}
                  className="r-split-2col"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    border: '1px solid var(--blue)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue-bright)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)';
                  }}
                >
                  <div style={{ position: 'relative', minHeight: 320 }}>
                    <PlaceholderImage
                      label="Cover episod 001 — Erasmus, Așteptări și Realități"
                      height="100%"
                      style={{ minHeight: 320 }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(90deg, oklch(0.48 0.22 252 / 0.2), transparent)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div style={{ position: 'absolute', top: 20, left: 20 }}>
                      <Tag label="Curând · Săptămâna aceasta" variant="live" dot />
                    </div>
                  </div>
                  <div
                    className="r-pad-xl"
                    style={{
                      padding: 40,
                      background: 'var(--ink-soft)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--ff-mono)',
                          fontSize: 11,
                          color: 'var(--blue-bright)',
                          letterSpacing: '0.15em',
                          marginBottom: 16,
                        }}
                      >
                        EP. 001 · Episod pilot
                      </div>
                      <h2 className="display-md" style={{ color: 'var(--white)', marginBottom: 16 }}>
                        {featuredEp.title}
                      </h2>
                      <div
                        style={{
                          fontFamily: 'var(--ff-mono)',
                          fontSize: 11,
                          color: 'var(--grey-light)',
                          letterSpacing: '0.1em',
                          marginBottom: 24,
                        }}
                      >
                        Invitat: {featuredEp.guest} · {featuredEp.role}
                      </div>
                      <p
                        style={{
                          fontSize: 15,
                          lineHeight: 1.75,
                          color: 'var(--grey-light)',
                          marginBottom: 24,
                        }}
                      >
                        {featuredEp.description}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {featuredEp.tags.map((t) => (
                        <Tag key={t} label={t} variant="blue" />
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </RevealBlock>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 24,
            }}
          >
            {filtered.slice(1).map((ep, i) => (
              <RevealBlock key={ep.id} delay={i * 0.07}>
                <Link href={`/episodes/${ep.id}`} className="ep-card">
                  <div className="ep-card-thumb">
                    <PlaceholderImage label={`Episod ${ep.number} — ${ep.guest}`} />
                    <div className="ep-card-thumb-inner">
                      <div className="ep-card-play">▶</div>
                    </div>
                    <div style={{ position: 'absolute', top: 16, right: 16 }}>
                      <Tag label="Planificat" variant="cream" />
                    </div>
                  </div>
                  <div className="ep-card-body">
                    <div className="ep-card-number">EP. {ep.number}</div>
                    <div className="ep-card-title">{ep.title}</div>
                    <div className="ep-card-guest">Invitat: {ep.guest}</div>
                    <div className="ep-card-desc">{ep.description}</div>
                    <div className="ep-card-tags">
                      {ep.tags.map((t) => (
                        <Tag key={t} label={t} variant="blue" />
                      ))}
                    </div>
                  </div>
                </Link>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
