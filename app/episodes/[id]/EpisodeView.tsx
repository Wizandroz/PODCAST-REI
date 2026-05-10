'use client';

import Link from 'next/link';
import { useState } from 'react';
import PlaceholderImage from '@/components/PlaceholderImage';
import RevealBlock from '@/components/RevealBlock';
import Tag from '@/components/Tag';
import type { Episode } from '@/lib/data';

interface EpisodeViewProps {
  episode: Episode;
  related: Episode[];
}

export default function EpisodeView({ episode: ep, related }: EpisodeViewProps) {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <>
      <section
        className="r-section-tight"
        style={{
          padding: '64px 40px',
          background: 'var(--ink)',
          borderBottom: '1px solid oklch(0.22 0.015 252 / 0.4)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 60% at 80% 50%, oklch(0.48 0.22 252 / 0.08), transparent)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <Link
            href="/episodes"
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.15em',
              color: 'var(--grey)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textTransform: 'uppercase',
              marginBottom: 32,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: 0,
              textDecoration: 'none',
            }}
          >
            ← Înapoi la episoade
          </Link>
          <div
            className="r-split-2col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'center',
            }}
          >
            <RevealBlock>
              <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                <Tag label={`EP. ${ep.number}`} variant="blue" />
                {ep.status === 'soon' && <Tag label="Curând" variant="live" dot />}
                {ep.status === 'planned' && <Tag label="Planificat" variant="cream" />}
                {ep.intro && <Tag label="Episod Pilot" variant="blue" />}
              </div>
              <h1 className="display-lg" style={{ color: 'var(--white)', marginBottom: 24 }}>
                {ep.title}
              </h1>
              <div
                style={{
                  display: 'flex',
                  gap: 24,
                  marginBottom: 32,
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 9,
                      letterSpacing: '0.15em',
                      color: 'var(--grey)',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}
                  >
                    Invitat
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-body)',
                      fontSize: 18,
                      fontWeight: 600,
                      color: 'var(--cream)',
                    }}
                  >
                    {ep.guest}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 9,
                      letterSpacing: '0.15em',
                      color: 'var(--grey)',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}
                  >
                    Rol
                  </div>
                  <div style={{ fontSize: 15, color: 'var(--grey-light)' }}>{ep.role}</div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 9,
                      letterSpacing: '0.15em',
                      color: 'var(--grey)',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}
                  >
                    Durată
                  </div>
                  <div style={{ fontSize: 15, color: 'var(--grey-light)' }}>{ep.duration}</div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: 'var(--grey-light)',
                  marginBottom: 32,
                }}
              >
                {ep.description}
              </p>
              {ep.intro && (
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'var(--grey)',
                    borderLeft: '2px solid var(--blue)',
                    paddingLeft: 16,
                  }}
                >
                  Acest episod inaugural include și o introducere în viziunea de ansamblu a
                  podcastului — ce conversații vor urma, de ce contează și ce tipuri de întrebări
                  structurează fiecare episod.
                </p>
              )}
            </RevealBlock>
            <RevealBlock delay={0.2}>
              <div className="episode-hero-cover" style={{ position: 'relative' }}>
                <PlaceholderImage label={`Foto invitat — ${ep.guest}`} />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(135deg, oklch(0.48 0.22 252 / 0.2), transparent)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 24,
                    background:
                      'linear-gradient(transparent, oklch(0.08 0.01 252 / 0.9))',
                  }}
                >
                  <div
                    className="ep-num-watermark"
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 64,
                      color: 'oklch(0.48 0.22 252 / 0.3)',
                      lineHeight: 1,
                    }}
                  >
                    {ep.number}
                  </div>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      <section
        className="r-section-tight"
        style={{ padding: '64px 40px', background: 'var(--ink-soft)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Video & Audio</div>
            <div
              className="r-split-asym-rev"
              style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}
            >
              <div
                style={{
                  background: 'oklch(0.1 0.02 252)',
                  border: '1px solid oklch(0.22 0.015 252 / 0.6)',
                  aspectRatio: '16/9',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                  fontFamily: 'var(--ff-mono)',
                  color: 'var(--grey)',
                  letterSpacing: '0.1em',
                  fontSize: 11,
                  textTransform: 'uppercase',
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    border: '2px solid oklch(0.3 0.015 252)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    color: 'var(--grey-light)',
                  }}
                >
                  ▶
                </div>
                <div>YouTube · Episod integral</div>
                <div style={{ fontSize: 9, color: 'var(--grey)', opacity: 0.6 }}>
                  Disponibil la lansare
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Spotify · Audio', 'Apple Podcasts', 'Google Podcasts'].map((pl) => (
                  <div
                    key={pl}
                    style={{
                      background: 'oklch(0.1 0.02 252)',
                      border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      cursor: 'pointer',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        'oklch(0.22 0.015 252 / 0.4)';
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 11,
                        letterSpacing: '0.12em',
                        color: 'var(--grey-light)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {pl}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 9,
                        color: 'oklch(0.35 0.01 252)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      Curând
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="r-section-tight" style={{ padding: '64px 40px', background: 'var(--ink)' }}>
        <div
          className="r-split-2col"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
          }}
        >
          <RevealBlock>
            <div className="section-label">Teme abordate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {ep.themes &&
                ep.themes.map((theme, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '16px 20px',
                      border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                      fontFamily: 'var(--ff-body)',
                      fontSize: 15,
                      color: 'var(--cream)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        'oklch(0.22 0.015 252 / 0.4)';
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--blue-bright)',
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 11,
                      }}
                    >
                      →
                    </span>
                    {theme}
                  </div>
                ))}
            </div>
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <div className="section-label">Citat cheie</div>
            {ep.quote && (
              <div className="quote-block">
                <p>&ldquo;{ep.quote}&rdquo;</p>
                <cite>— {ep.guest}</cite>
              </div>
            )}
            <div style={{ marginTop: 32 }}>
              <div className="section-label" style={{ marginBottom: 16 }}>
                Taguri
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {ep.tags.map((t) => (
                  <Tag key={t} label={t} variant="blue" />
                ))}
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section
        className="r-section-tight"
        style={{ padding: '64px 40px', background: 'var(--ink)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 32,
                flexWrap: 'wrap',
                gap: 16,
              }}
            >
              <div>
                <div className="section-label">Citește episodul</div>
                <h2 className="display-md" style={{ color: 'var(--white)' }}>
                  Transcript
                </h2>
              </div>
              <button
                type="button"
                className={showTranscript ? 'btn-primary' : 'btn-outline'}
                onClick={() => setShowTranscript((s) => !s)}
              >
                {showTranscript ? '↑ Ascunde transcriptul' : '↓ Citește în loc să asculți'}
              </button>
            </div>

            {!showTranscript && (
              <div
                style={{
                  padding: '40px 48px',
                  border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                  background: 'var(--ink-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 32,
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ fontSize: 48 }}>📖</div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 24,
                      color: 'var(--white)',
                      marginBottom: 8,
                    }}
                  >
                    Preferi să citești?
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'var(--grey-light)',
                      maxWidth: 560,
                    }}
                  >
                    Transcriptul integral al episodului este disponibil pentru cei care vor să
                    parcurgă conversația în format text — la orice oră, fără căști, în ritmul
                    propriu.
                  </p>
                </div>
              </div>
            )}

            {showTranscript && ep.transcript && (
              <div
                style={{
                  border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                  background: 'var(--ink-soft)',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="transcript-header"
                  style={{
                    padding: '24px 32px',
                    borderBottom: '1px solid oklch(0.22 0.015 252 / 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    background: 'oklch(0.12 0.02 252)',
                    flexWrap: 'wrap',
                  }}
                >
                  <Tag label={`EP. ${ep.number}`} variant="blue" />
                  <span
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 10,
                      color: 'var(--grey)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Transcript integral · {ep.duration}
                  </span>
                </div>
                <div
                  className="transcript-body"
                  style={{ padding: '40px 48px', maxHeight: 600, overflowY: 'auto' }}
                >
                  {ep.transcript.map((block, i) => (
                    <div
                      key={i}
                      className="transcript-row"
                      style={{
                        marginBottom: 32,
                        display: 'grid',
                        gridTemplateColumns: '120px 1fr',
                        gap: 24,
                        alignItems: 'start',
                      }}
                    >
                      <div
                        className="transcript-speaker"
                        style={{
                          fontFamily: 'var(--ff-mono)',
                          fontSize: 10,
                          color:
                            block.speaker === 'Moderator'
                              ? 'var(--blue-bright)'
                              : 'var(--grey-light)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          paddingTop: 3,
                          borderRight: '1px solid oklch(0.22 0.015 252 / 0.4)',
                          paddingRight: 16,
                        }}
                      >
                        {block.speaker}
                      </div>
                      <p
                        style={{
                          fontSize: 15,
                          lineHeight: 1.8,
                          color: 'var(--cream)',
                          fontStyle: block.speaker === 'Moderator' ? 'italic' : 'normal',
                        }}
                      >
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showTranscript && !ep.transcript && (
              <div
                style={{
                  padding: '40px 48px',
                  border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                  background: 'var(--ink-soft)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--ff-display)',
                    fontSize: 28,
                    color: 'var(--white)',
                    marginBottom: 12,
                  }}
                >
                  Transcript în curând
                </div>
                <p style={{ fontSize: 14, color: 'var(--grey-light)' }}>
                  Transcriptul acestui episod va fi disponibil la scurt timp după lansare.
                </p>
              </div>
            )}
          </RevealBlock>
        </div>
      </section>

      <section
        className="r-section-tight"
        style={{ padding: '64px 40px', background: 'var(--ink-soft)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Alte episoade</div>
            <div
              className="r-grid-3"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
                marginTop: 32,
              }}
            >
              {related.map((rel, i) => (
                <RevealBlock key={rel.id} delay={i * 0.08}>
                  <Link href={`/episodes/${rel.id}`} className="ep-card">
                    <div className="ep-card-body">
                      <div className="ep-card-number">EP. {rel.number}</div>
                      <div className="ep-card-title">{rel.title}</div>
                      <div className="ep-card-guest">Invitat: {rel.guest}</div>
                      <div className="ep-card-tags" style={{ marginTop: 12 }}>
                        {rel.tags.slice(0, 2).map((t) => (
                          <Tag key={t} label={t} variant="blue" />
                        ))}
                      </div>
                    </div>
                  </Link>
                </RevealBlock>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>
    </>
  );
}
