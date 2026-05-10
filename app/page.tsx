'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Marquee from '@/components/Marquee';
import PlaceholderImage from '@/components/PlaceholderImage';
import RevealBlock from '@/components/RevealBlock';
import SocialLinks from '@/components/SocialLinks';
import Tag from '@/components/Tag';
import { EPISODES, TEAM, THEMES_TEASER } from '@/lib/data';

const MANIFESTO_ITEMS = [
  {
    label: 'Academia, umanizată',
    text:
      'Profesorii nu sunt doar figuri de la catedră. Sunt experți cu traiectorii fascinante, opinii tăioase și povești pe care nicio programă analitică nu le cuprinde.',
  },
  {
    label: 'Studenții, pregătiți',
    text:
      'Orientare în carieră, perspective reale asupra pieței muncii, și răspunsuri la întrebările pe care nu știi cui să le pui.',
  },
  {
    label: 'Temele care contează acum',
    text:
      'De la Erasmus la piețele dictate de algoritmi, de la soft skills la geopolitică economică — conversații relevante pentru lumea în care vom lucra.',
  },
  {
    label: 'Un proiect de comunicare cu substanță',
    text:
      'Video podcast, bilunnar, distribuit pe toate platformele. Format structurat, editorial curattat, produs de studenți care înțeleg că a comunica bine este o competență profesională.',
  },
];

const STATS = [
  { n: '8+', label: 'Episoade planificate în sezonul inaugural' },
  { n: '40–60', label: 'Minute per episod, fără compromisuri de substanță' },
  { n: '2×', label: 'Episoade pe lună, ritm susținut de conținut' },
  {
    n: '5',
    label: 'Platforme de distribuție — YouTube, Instagram, TikTok, LinkedIn, Spotify',
  },
];

const AUDIENCES = [
  {
    who: 'Studenți REI',
    why: 'Orientare în carieră, perspective din industrie, și povești reale de la profesorii lor.',
  },
  {
    who: 'Profesori',
    why: 'Un spațiu pentru a-și exprima expertiza în afara sălii de curs, în format accesibil și modern.',
  },
  {
    who: 'Alumni',
    why: 'Reconectare cu facultatea, perspective noi, și inspirație pentru traiectorii profesionale.',
  },
  { who: 'Viitori studenți', why: 'O fereastră autentică în cultura academică și oportunitățile REI.' },
  {
    who: 'Public general',
    why: 'Economie, geopolitică și societate — accesibil, fără jargon inutil.',
  },
];

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const firstEp = EPISODES[0];

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="page page-transition">
      {/* HERO */}
      <section
        className="home-hero"
        style={{
          minHeight: '100vh',
          background: 'oklch(0.06 0.01 252)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 40px 80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/podcast-thumbnail.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, oklch(0.06 0.01 252 / 0.3) 0%, oklch(0.06 0.01 252 / 0.6) 60%, oklch(0.06 0.01 252 / 0.97) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="home-hero-glow"
          style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, oklch(0.48 0.22 252 / 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="home-hero-vertical-label"
          style={{
            position: 'absolute',
            right: 40,
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center',
            fontFamily: 'var(--ff-mono)',
            fontSize: 10,
            letterSpacing: '0.3em',
            color: 'oklch(0.3 0.015 252)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          PODCAST · FACULTATEA DE REI · ASE BUCUREȘTI · 2026
        </div>

        <div
          className="home-hero-logo"
          style={{
            position: 'absolute',
            right: '10%',
            top: '50%',
            transform: 'translateY(-20%)',
            zIndex: 2,
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 0.8s 0.5s',
          }}
        >
          <img
            src="/podcast-logo.png"
            alt="Podcast REI"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 0,
              filter: 'drop-shadow(0 0 28px oklch(0.48 0.22 252 / 0.45))',
            }}
          />
        </div>

        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="section-label" style={{ marginBottom: 32 }}>
              Lansare 2026 · Episod Pilot
            </div>
          </div>

          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            <h1 className="display-xl" style={{ maxWidth: 900, marginBottom: 8 }}>
              DIALOGURI<br />
              <span style={{ color: 'var(--blue-bright)' }}>LA GRANIȚA</span>
              <br />
              ECONOMIEI
            </h1>
          </div>

          <div
            className="home-hero-meta"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 32,
              marginTop: 48,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  color: 'var(--grey-light)',
                  textTransform: 'uppercase',
                  marginBottom: 24,
                  maxWidth: 480,
                  lineHeight: 1.8,
                }}
              >
                Profesori. Studenți. Idei care contează.<br />
                <span style={{ color: 'var(--blue-bright)' }}>
                  Unscripted. Unfiltered. Uncut.
                </span>
              </p>
              <div
                className="home-hero-cta"
                style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
              >
                <Link className="btn-primary" href="/episodes">
                  Primul episod →
                </Link>
                <Link className="btn-outline" href="/about">
                  Despre podcast
                </Link>
              </div>
            </div>
            <div
              className="home-hero-meta-tags"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                alignItems: 'flex-end',
              }}
            >
              <Tag label="Lansare săptămâna aceasta" variant="live" dot />
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                }}
              >
                {['Erasmus', 'AI', 'Piețe', 'Negociere'].map((t) => (
                  <Tag key={t} label={t} variant="cream" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="home-scroll-indicator"
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            opacity: heroVisible ? 0.6 : 0,
            transition: 'opacity 0.5s 1.5s',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 9,
              letterSpacing: '0.2em',
              color: 'var(--grey)',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, var(--blue-bright), transparent)',
            }}
          />
        </div>
      </section>

      <Marquee />

      {/* FEATURED EPISODE */}
      <section className="r-section" style={{ padding: '96px 40px', background: 'var(--ink)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Primul episod · Această săptămână</div>
          </RevealBlock>

          <div
            className="r-split-2col"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0,
              border: '1px solid oklch(0.22 0.015 252 / 0.6)',
              overflow: 'hidden',
            }}
          >
            <RevealBlock delay={0.1}>
              <div style={{ position: 'relative', height: '100%', minHeight: 400 }}>
                <PlaceholderImage
                  label="Cover episod 001 — George Tudose"
                  height="100%"
                  style={{ minHeight: 400 }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(135deg, oklch(0.48 0.22 252 / 0.3) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />
                <div style={{ position: 'absolute', top: 24, left: 24 }}>
                  <Tag label="Curând" variant="live" dot />
                </div>
                <div
                  className="featured-watermark"
                  style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 24,
                    fontFamily: 'var(--ff-display)',
                    fontSize: 88,
                    lineHeight: 1,
                    color: 'oklch(0.48 0.22 252 / 0.25)',
                    userSelect: 'none',
                  }}
                >
                  001
                </div>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.2}>
              <div
                className="r-pad-xl"
                style={{
                  padding: 48,
                  background: 'var(--ink-soft)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                    {firstEp.tags.map((t) => (
                      <Tag key={t} label={t} variant="blue" />
                    ))}
                  </div>
                  <h2 className="display-md" style={{ color: 'var(--white)', marginBottom: 16 }}>
                    {firstEp.title}
                  </h2>
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 12,
                      letterSpacing: '0.12em',
                      color: 'var(--blue-bright)',
                      marginBottom: 24,
                      textTransform: 'uppercase',
                    }}
                  >
                    Invitat: {firstEp.guest} · {firstEp.role}
                  </div>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: 'var(--grey-light)',
                      marginBottom: 32,
                    }}
                  >
                    {firstEp.description}
                    <br />
                    <br />
                    <span style={{ color: 'var(--grey)' }}>
                      Episodul pilot include și o introducere extinsă în viziunea podcastului — ce
                      conversații urmează, de ce contează și ce tipuri de întrebări vor structura
                      fiecare episod.
                    </span>
                  </p>
                  <div className="quote-block" style={{ marginBottom: 32 }}>
                    <p>&ldquo;{firstEp.quote}&rdquo;</p>
                    <cite>— George Tudose</cite>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <Link className="btn-primary" href={`/episodes/${firstEp.id}`}>
                    Vezi episodul →
                  </Link>
                  <span
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 10,
                      color: 'var(--grey)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {firstEp.duration} · Video Podcast
                  </span>
                </div>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        className="r-section"
        style={{ padding: '96px 40px', background: 'var(--ink-soft)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            className="r-split-asym"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 64,
              alignItems: 'start',
            }}
          >
            <RevealBlock>
              <div className="section-label">Ce este REI Insights</div>
              <h2
                className="display-md"
                style={{ color: 'var(--white)', marginTop: 8, marginBottom: 32 }}
              >
                Nu un podcast.
                <br />
                <span style={{ color: 'var(--blue-bright)' }}>O conversație</span>
                <br />
                cu mize reale.
              </h2>
              <SocialLinks />
            </RevealBlock>
            <RevealBlock delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {MANIFESTO_ITEMS.map((item, i) => (
                  <div key={i} className="manifesto-line">
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--ff-mono)',
                          fontSize: 10,
                          letterSpacing: '0.15em',
                          color: 'var(--blue-bright)',
                          marginBottom: 6,
                          textTransform: 'uppercase',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>{item.label}</div>
                      <div
                        style={{
                          fontFamily: 'var(--ff-body)',
                          fontSize: 14,
                          fontWeight: 400,
                          color: 'var(--grey)',
                          marginTop: 8,
                          lineHeight: 1.6,
                          letterSpacing: 0,
                        }}
                      >
                        {item.text}
                      </div>
                    </div>
                    <span style={{ fontSize: 20, color: 'var(--blue-bright)', opacity: 0.4 }}>
                      →
                    </span>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* PLANNED EPISODES */}
      <section className="r-section" style={{ padding: '96px 40px', background: 'var(--ink)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                marginBottom: 48,
                flexWrap: 'wrap',
                gap: 24,
              }}
            >
              <div>
                <div className="section-label">Conversații planificate</div>
                <h2 className="display-lg" style={{ color: 'var(--white)' }}>
                  CE URMEAZĂ
                </h2>
              </div>
              <Link className="btn-outline" href="/episodes">
                Toate episoadele →
              </Link>
            </div>
          </RevealBlock>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 1,
              border: '1px solid oklch(0.22 0.015 252 / 0.4)',
            }}
          >
            {EPISODES.slice(1, 7).map((ep, i) => (
              <RevealBlock key={ep.id} delay={i * 0.07}>
                <Link
                  href={`/episodes/${ep.id}`}
                  className="ep-card"
                  style={{
                    height: '100%',
                    border: 'none',
                    borderRight: i % 2 === 0 ? '1px solid oklch(0.22 0.015 252 / 0.4)' : 'none',
                    borderBottom: '1px solid oklch(0.22 0.015 252 / 0.4)',
                  }}
                >
                  <div
                    className="ep-card-body"
                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 16,
                      }}
                    >
                      <span className="ep-card-number">EP. {ep.number}</span>
                      <Tag label="Planificat" variant="cream" />
                    </div>
                    <div className="ep-card-title">{ep.title}</div>
                    <div className="ep-card-guest">Invitat: {ep.guest}</div>
                    <div className="ep-card-desc" style={{ flex: 1 }}>
                      {ep.description}
                    </div>
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

      {/* STATS */}
      <section
        className="r-section"
        style={{
          padding: '96px 40px',
          background: 'var(--blue-deep)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, oklch(1 0 0 / 0.03) 0px, oklch(1 0 0 / 0.03) 1px, transparent 1px, transparent 40px)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <RevealBlock>
            <div className="section-label" style={{ color: 'oklch(0.7 0.1 252)' }}>
              De ce contează
            </div>
            <h2 className="display-lg" style={{ color: 'var(--white)', marginBottom: 64 }}>
              RELEVANȚA<br />
              <span style={{ color: 'oklch(0.85 0.12 252)' }}>ÎN CIFRE ȘI REALITATE</span>
            </h2>
          </RevealBlock>
          <div
            className="r-grid-4"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}
          >
            {STATS.map((stat, i) => (
              <RevealBlock key={i} delay={i * 0.1}>
                <div>
                  <div className="stat-number" style={{ color: 'oklch(0.85 0.15 252)' }}>
                    {stat.n}
                  </div>
                  <div className="stat-label" style={{ color: 'oklch(0.6 0.08 252)' }}>
                    {stat.label}
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="r-section" style={{ padding: '96px 40px', background: 'var(--ink)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Universul tematic</div>
            <h2 className="display-lg" style={{ color: 'var(--white)', marginBottom: 64 }}>
              TEMELE<br />SEZONULUI
            </h2>
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {THEMES_TEASER.map((t, i) => {
                const baseColor =
                  i % 3 === 0
                    ? 'var(--blue-bright)'
                    : i % 3 === 1
                    ? 'var(--cream)'
                    : 'var(--grey)';
                return (
                  <Link
                    key={i}
                    href="/episodes"
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: `clamp(18px, ${1.5 + i * 0.2}vw, ${28 + i * 3}px)`,
                      color: baseColor,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '8px 4px',
                      transition: 'color 0.2s',
                      letterSpacing: '0.02em',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--white)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = baseColor;
                    }}
                  >
                    {t.tag}
                  </Link>
                );
              })}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* AUDIENCE */}
      <section
        className="r-section"
        style={{ padding: '96px 40px', background: 'var(--ink-soft)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Pentru cine</div>
            <h2 className="display-lg" style={{ color: 'var(--white)', marginBottom: 64 }}>
              PUBLICUL<br />NOSTRU
            </h2>
          </RevealBlock>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 1,
              border: '1px solid oklch(0.22 0.015 252 / 0.4)',
            }}
          >
            {AUDIENCES.map((item, i) => (
              <RevealBlock key={i} delay={i * 0.08}>
                <div className="card" style={{ padding: 32, height: '100%', cursor: 'default' }}>
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 10,
                      color: 'var(--blue-bright)',
                      letterSpacing: '0.15em',
                      marginBottom: 12,
                      textTransform: 'uppercase',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 24,
                      color: 'var(--white)',
                      marginBottom: 16,
                    }}
                  >
                    {item.who}
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--grey)' }}>
                    {item.why}
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="r-section" style={{ padding: '96px 40px', background: 'var(--ink)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: 48,
                flexWrap: 'wrap',
                gap: 24,
              }}
            >
              <div>
                <div className="section-label">Oamenii din spate</div>
                <h2 className="display-lg" style={{ color: 'var(--white)' }}>
                  ECHIPA
                </h2>
              </div>
              <Link className="btn-outline" href="/team">
                Cunoaște echipa →
              </Link>
            </div>
          </RevealBlock>
          <RevealBlock delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {TEAM.map((member, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                    padding: '12px 20px',
                    transition: 'border-color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue-bright)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      'oklch(0.22 0.015 252 / 0.4)';
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 10,
                      color: 'var(--blue-bright)',
                      letterSpacing: '0.12em',
                      marginBottom: 4,
                      textTransform: 'uppercase',
                    }}
                  >
                    {member.role}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-body)',
                      fontSize: 14,
                      color: 'var(--cream)',
                      fontWeight: 500,
                    }}
                  >
                    {member.name}
                  </div>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* CTA */}
      <section
        className="r-section-lg"
        style={{
          padding: '120px 40px',
          background: 'var(--ink-soft)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, oklch(0.48 0.22 252 / 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
          <RevealBlock>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              Urmărește lansarea
            </div>
            <h2 className="display-lg" style={{ color: 'var(--white)', marginBottom: 24 }}>
              FII PRIMUL<br />
              <span style={{ color: 'var(--blue-bright)' }}>CARE ASCULTĂ</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: 'var(--grey-light)',
                marginBottom: 48,
              }}
            >
              Primul episod apare săptămâna aceasta. Urmărește-ne pe platformele tale preferate și
              nu rata lansarea.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 12,
                marginBottom: 48,
                flexWrap: 'wrap',
              }}
            >
              <Link className="btn-primary" href="/episodes">
                Ascultă episoadele →
              </Link>
              <Link className="btn-outline" href="/contact">
                Contactează-ne
              </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SocialLinks />
            </div>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
}
