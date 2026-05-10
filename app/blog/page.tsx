import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import RevealBlock from '@/components/RevealBlock';
import Tag from '@/components/Tag';
import { ARTICLES } from '@/lib/data';

export default function BlogPage() {
  const featured = ARTICLES[0];

  return (
    <div className="page page-with-banner page-transition">
      <PageBanner title="Blog" subtitle="Articole & Analiză" />
      <section
        className="r-section-tight"
        style={{
          padding: '80px 40px 64px',
          background: 'var(--ink)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, oklch(0.48 0.22 252 / 0.03))',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Articole & Analiză</div>
            <h1 className="display-xl" style={{ marginBottom: 24 }}>
              BLOG
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--grey-light)',
                maxWidth: 560,
                marginBottom: 64,
                fontWeight: 300,
              }}
            >
              Scriem despre ce discutăm. Articole, analize, opinii și perspective de la echipa REI
              Insights — pentru cei care vor să citească, nu doar să asculte.
            </p>
          </RevealBlock>

          <RevealBlock delay={0.1}>
            <div style={{ marginBottom: 64 }}>
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
                ★ Articol recomandat
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="r-split-2col feature-card-blue"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  border: '1px solid var(--blue)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  className="blog-feature-cover"
                  style={{
                    background: 'var(--blue-deep)',
                    padding: '64px 48px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: 320,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage:
                        'repeating-linear-gradient(45deg, oklch(0.4 0.15 252 / 0.05) 0px, oklch(0.4 0.15 252 / 0.05) 1px, transparent 1px, transparent 40px)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ position: 'relative' }}>
                    <Tag label={featured.category} variant="blue" />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div
                      className="blog-feature-title"
                      style={{
                        fontFamily: 'var(--ff-display)',
                        fontSize: 52,
                        color: 'var(--white)',
                        lineHeight: 1,
                        marginBottom: 16,
                      }}
                    >
                      {featured.title}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 10,
                        color: 'oklch(0.65 0.12 252)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {featured.readTime} · {featured.date}
                    </div>
                  </div>
                </div>
                <div
                  className="blog-feature-body"
                  style={{
                    padding: 48,
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
                        letterSpacing: '0.1em',
                        marginBottom: 16,
                        textTransform: 'uppercase',
                      }}
                    >
                      De {featured.author}
                    </div>
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.8,
                        color: 'var(--grey-light)',
                        marginBottom: 24,
                      }}
                    >
                      {featured.excerpt}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {featured.tags.map((t) => (
                      <Tag key={t} label={t} variant="blue" />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </RevealBlock>

          <RevealBlock delay={0.15}>
            <div className="section-label" style={{ marginBottom: 32 }}>
              Toate articolele
            </div>
          </RevealBlock>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 1,
              border: '1px solid oklch(0.22 0.015 252 / 0.4)',
            }}
          >
            {ARTICLES.map((article, i) => (
              <RevealBlock key={article.id} delay={i * 0.07}>
                <Link href={`/blog/${article.slug}`} className="article-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Tag label={article.category} variant="blue" />
                    <span
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 9,
                        color: 'var(--grey)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {article.readTime}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 26,
                      color: 'var(--white)',
                      lineHeight: 1.1,
                      flex: 1,
                    }}
                  >
                    {article.title}
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--grey)' }}>
                    {article.excerpt}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid oklch(0.22 0.015 252 / 0.4)',
                      paddingTop: 16,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--ff-mono)',
                          fontSize: 9,
                          color: 'var(--blue-bright)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: 2,
                        }}
                      >
                        {article.author}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--ff-mono)',
                          fontSize: 9,
                          color: 'var(--grey)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {article.date}
                      </div>
                    </div>
                    <span style={{ color: 'var(--blue-bright)', fontSize: 18 }}>→</span>
                  </div>
                </Link>
              </RevealBlock>
            ))}
            <RevealBlock delay={0.3}>
              <div
                style={{
                  padding: 32,
                  borderRight: '1px solid oklch(0.22 0.015 252 / 0.4)',
                  borderBottom: '1px solid oklch(0.22 0.015 252 / 0.4)',
                  background: 'oklch(0.12 0.02 252)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: 16,
                  minHeight: 240,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--ff-mono)',
                    fontSize: 9,
                    color: 'var(--blue-bright)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Contribuie
                </div>
                <div
                  style={{
                    fontFamily: 'var(--ff-display)',
                    fontSize: 28,
                    color: 'var(--white)',
                    lineHeight: 1.1,
                  }}
                >
                  Scrie pentru REI Insights
                </div>
                <p style={{ fontSize: 13, color: 'var(--grey)', lineHeight: 1.6 }}>
                  Faci parte din echipă sau din comunitatea REI? Avem loc pentru vocea ta.
                </p>
                <Link
                  className="btn-outline"
                  href="/contact"
                  style={{ padding: '10px 20px', fontSize: 10 }}
                >
                  Contactează-ne →
                </Link>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>
    </div>
  );
}
