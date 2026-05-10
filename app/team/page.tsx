import Link from 'next/link';
import Marquee from '@/components/Marquee';
import PageBanner from '@/components/PageBanner';
import RevealBlock from '@/components/RevealBlock';
import { TEAM } from '@/lib/data';

export default function TeamPage() {
  return (
    <div className="page page-with-banner page-transition">
      <PageBanner title="Echipa" subtitle="Oamenii din spate" />
      <section
        className="r-section-tight"
        style={{ padding: '80px 40px 64px', background: 'var(--ink)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Oamenii din spate</div>
            <h1 className="display-xl" style={{ marginBottom: 32 }}>
              ECHIPA
              <br />
              <span style={{ color: 'var(--blue-bright)' }}>PODCAST REI</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                color: 'var(--grey-light)',
                maxWidth: 600,
                marginBottom: 64,
                fontWeight: 300,
              }}
            >
              Un grup de studenți REI care au transformat o idee în proiect de producție. Nu o
              sarcină de curs — o inițiativă reală, cu mize reale.
            </p>
          </RevealBlock>

          <Marquee />

          <div style={{ marginTop: 80 }}>
            <RevealBlock>
              <div className="section-label">Membrii echipei</div>
            </RevealBlock>
            <div
              className="team-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 1,
                border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                marginTop: 32,
              }}
            >
              {TEAM.map((member, i) => (
                <RevealBlock key={i} delay={i * 0.05}>
                  <div
                    className="hover-tint"
                    style={{
                      padding: '32px 28px',
                      borderRight: '1px solid oklch(0.22 0.015 252 / 0.4)',
                      borderBottom: '1px solid oklch(0.22 0.015 252 / 0.4)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        border: '1px solid oklch(0.22 0.015 252)',
                        background: 'oklch(0.14 0.02 252)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--ff-display)',
                        fontSize: 18,
                        color: 'var(--blue-bright)',
                        marginBottom: 20,
                      }}
                    >
                      {member.name.charAt(0)}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 9,
                        color: 'var(--blue-bright)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      {member.role}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--ff-body)',
                        fontSize: 16,
                        color: 'var(--white)',
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 16,
                        right: 16,
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 28,
                        color: 'oklch(0.18 0.015 252)',
                        fontWeight: 600,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>

          <RevealBlock delay={0.2}>
            <div
              className="team-join"
              style={{
                marginTop: 80,
                padding: 48,
                border: '1px solid oklch(0.22 0.015 252 / 0.4)',
                background: 'var(--ink-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 32,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div className="section-label" style={{ marginBottom: 12 }}>
                  Alătură-te
                </div>
                <h2 className="display-md" style={{ color: 'var(--white)', marginBottom: 12 }}>
                  Faci parte din REI?
                </h2>
                <p style={{ fontSize: 15, color: 'var(--grey-light)', maxWidth: 480 }}>
                  Căutăm în permanență studenți pasionați de producție media, comunicare, regie sau
                  scenariu. Dacă ai energie și idei — vorbim.
                </p>
              </div>
              <Link className="btn-primary" href="/contact">
                Trimite un mesaj →
              </Link>
            </div>
          </RevealBlock>
        </div>
      </section>
    </div>
  );
}
