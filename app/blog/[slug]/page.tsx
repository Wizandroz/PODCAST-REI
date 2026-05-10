import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import RevealBlock from '@/components/RevealBlock';
import Tag from '@/components/Tag';
import { ARTICLES } from '@/lib/data';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

function renderContent(text: string) {
  return text.split('\n\n').map((block, i) => {
    if (block.startsWith('**') && block.endsWith('**')) {
      return (
        <h3
          key={i}
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 28,
            color: 'var(--white)',
            margin: '32px 0 12px',
            lineHeight: 1.1,
          }}
        >
          {block.replace(/\*\*/g, '')}
        </h3>
      );
    }
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p
        key={i}
        style={{
          fontSize: 17,
          lineHeight: 1.85,
          color: 'var(--grey-light)',
          marginBottom: 24,
        }}
      >
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} style={{ color: 'var(--white)', fontWeight: 600 }}>
              {part.replace(/\*\*/g, '')}
            </strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </p>
    );
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const art = ARTICLES.find((a) => a.slug === params.slug);
  if (!art) notFound();

  const others = ARTICLES.filter((a) => a.id !== art.id);

  return (
    <div className="page page-with-banner page-transition">
      <PageBanner title="Blog" subtitle="Articol" />
      <section
        className="r-section-tight"
        style={{
          background: 'var(--blue-deep)',
          padding: '64px 40px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(45deg, oklch(0.4 0.15 252 / 0.04) 0px, oklch(0.4 0.15 252 / 0.04) 1px, transparent 1px, transparent 40px)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <Link
            href="/blog"
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.15em',
              color: 'oklch(0.65 0.12 252)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textTransform: 'uppercase',
              marginBottom: 40,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: 0,
              textDecoration: 'none',
            }}
          >
            ← Înapoi la blog
          </Link>
          <RevealBlock>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
              <Tag label={art.category} variant="blue" />
              <Tag label={art.readTime} variant="cream" />
            </div>
            <h1 className="display-lg" style={{ color: 'var(--white)', marginBottom: 16, lineHeight: 1 }}>
              {art.title}
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: 'oklch(0.75 0.12 252)',
                marginBottom: 32,
                fontWeight: 300,
                fontStyle: 'italic',
              }}
            >
              {art.subtitle}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                borderTop: '1px solid oklch(0.4 0.12 252 / 0.3)',
                paddingTop: 24,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'oklch(0.28 0.15 252)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--ff-display)',
                  fontSize: 20,
                  color: 'var(--white)',
                  flexShrink: 0,
                }}
              >
                {art.author.charAt(0)}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--ff-body)',
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'var(--white)',
                  }}
                >
                  {art.author}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--ff-mono)',
                    fontSize: 9,
                    color: 'oklch(0.65 0.12 252)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {art.role} · {art.date}
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section
        className="r-section-tight"
        style={{ padding: '64px 40px 96px', background: 'var(--ink)' }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <RevealBlock>
            <div className="quote-block" style={{ marginBottom: 48 }}>
              <p>&ldquo;{art.excerpt}&rdquo;</p>
            </div>
            <div>{renderContent(art.content)}</div>
            <div
              style={{
                marginTop: 64,
                paddingTop: 32,
                borderTop: '1px solid oklch(0.22 0.015 252 / 0.4)',
                display: 'flex',
                gap: 8,
                flexWrap: 'wrap',
              }}
            >
              {art.tags.map((t) => (
                <Tag key={t} label={t} variant="blue" />
              ))}
            </div>
          </RevealBlock>

          <RevealBlock delay={0.2}>
            <div style={{ marginTop: 80 }}>
              <div className="section-label" style={{ marginBottom: 24 }}>
                Alte articole
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                }}
              >
                {others.map((a) => (
                  <Link key={a.id} href={`/blog/${a.slug}`} className="article-row">
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--ff-display)',
                          fontSize: 20,
                          color: 'var(--white)',
                          marginBottom: 4,
                        }}
                      >
                        {a.title}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--ff-mono)',
                          fontSize: 9,
                          color: 'var(--blue-bright)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {a.author} · {a.readTime}
                      </div>
                    </div>
                    <span style={{ color: 'var(--blue-bright)', fontSize: 20, flexShrink: 0 }}>
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
}
