import Marquee from '@/components/Marquee';
import PageBanner from '@/components/PageBanner';
import RevealBlock from '@/components/RevealBlock';

const MISSION_PARAGRAPHS = [
  'Podcastul REI Insights a apărut dintr-o convingere simplă: există o distanță între ce se predă și ce se trăiește. Între manual și realitate. Între catedră și birou.',
  'Ne-am propus să reducem această distanță prin conversații autentice cu cei care trăiesc la intersecția academiei și a lumii reale — profesori, alumni, experți.',
  'Nu suntem un proiect de PR al facultății. Suntem un proiect de comunicare cu substanță, construit de studenți care înțeleg că relevanța se construiește, nu se decretează.',
];

const FORMAT_STEPS = [
  { step: '01', label: 'Intro', time: '3–5 min', desc: 'Prezentarea invitatului și a temei zilei.' },
  {
    step: '02',
    label: 'Parcurs Personal',
    time: '10 min',
    desc: 'Povestea invitatului — de la student la expert.',
  },
  {
    step: '03',
    label: 'Nucleul Tematic',
    time: '20–30 min',
    desc: 'Dezbaterea subiectului principal, cu profunzime.',
  },
  {
    step: '04',
    label: 'Rapid Fire REI',
    time: '5 min',
    desc: 'Întrebări fulger pentru sfaturi concrete.',
  },
  { step: '05', label: 'Outro', time: '2 min', desc: 'Concluzii și îndemnuri pentru studenți.' },
];

const PLATFORMS = [
  { platform: 'YouTube', format: 'Episod integral video' },
  { platform: 'Spotify', format: 'Format audio' },
  { platform: 'Instagram', format: 'Reels · Fragmente cheie' },
  { platform: 'TikTok', format: 'Shorts · Momentele tari' },
  { platform: 'LinkedIn', format: 'Perspective profesionale' },
  { platform: 'Facebook', format: 'Episod integral video' },
];

const PROMISES = [
  {
    title: 'Conținut cu substanță',
    desc: 'Nicio emisiune nu este produsă pentru a bifa un casetou institutional. Fiecare episod are o miză, o teză și un argument.',
  },
  {
    title: 'Invitați credibili',
    desc: 'Profesori REI, experți, alumni — oameni cu traiectorii reale și perspective verificate, nu figuri decorative.',
  },
  {
    title: 'Producție serioasă',
    desc: 'Audio-video de calitate, structură clară, montaj atent. Podcastul arată ca ce este: un proiect profesional.',
  },
  {
    title: 'Ritm constant',
    desc: 'Bilunnar, fără pauze lungi. Ne luăm în serios angajamentul față de public și față de invitați.',
  },
];

export default function AboutPage() {
  return (
    <div className="page page-with-banner page-transition">
      <PageBanner title="Despre" subtitle="Proiect & Misiune" />
      <section
        className="r-section-tight"
        style={{
          padding: '80px 40px 96px',
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
            background: 'linear-gradient(90deg, transparent, oklch(0.48 0.22 252 / 0.04))',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Despre proiect</div>
            <h1 className="display-xl" style={{ maxWidth: 780, marginBottom: 40 }}>
              UNSCRIPTED.
              <br />
              <span style={{ color: 'var(--blue-bright)' }}>UNFILTERED.</span>
              <br />
              UNCUT.
            </h1>
          </RevealBlock>
          <RevealBlock delay={0.2}>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.8,
                color: 'var(--grey-light)',
                maxWidth: 640,
                fontWeight: 300,
              }}
            >
              REI Insights este o inițiativă de comunicare a Facultății de Relații Economice
              Internaționale, concepută nu pentru a impresiona, ci pentru a conecta.
            </p>
          </RevealBlock>
        </div>
      </section>

      <Marquee />

      <section
        className="r-section"
        style={{ padding: '96px 40px', background: 'var(--ink-soft)' }}
      >
        <div
          className="r-split-2col"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
          }}
        >
          <RevealBlock>
            <div className="section-label">Misiunea</div>
            <h2 className="display-md" style={{ color: 'var(--white)', marginBottom: 32 }}>
              De ce există
              <br />
              <span style={{ color: 'var(--blue-bright)' }}>acest podcast?</span>
            </h2>
            <div className="quote-block">
              <p>
                &ldquo;Un program academic poate preda teorii. Un podcast bun poate schimba
                perspectiva.&rdquo;
              </p>
              <cite>— Echipa REI Insights</cite>
            </div>
          </RevealBlock>
          <RevealBlock delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {MISSION_PARAGRAPHS.map((text, i) => (
                <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--grey-light)' }}>
                  {text}
                </p>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="r-section" style={{ padding: '96px 40px', background: 'var(--ink)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Cum funcționează</div>
            <h2 className="display-lg" style={{ color: 'var(--white)', marginBottom: 64 }}>
              FORMATUL
            </h2>
          </RevealBlock>
          <div
            className="r-grid-5"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 1,
              border: '1px solid oklch(0.22 0.015 252 / 0.4)',
            }}
          >
            {FORMAT_STEPS.map((s, i) => (
              <RevealBlock key={i} delay={i * 0.08}>
                <div
                  className="format-step"
                  style={{
                    borderRight:
                      i < FORMAT_STEPS.length - 1
                        ? '1px solid oklch(0.22 0.015 252 / 0.4)'
                        : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 28,
                      color: 'oklch(0.22 0.015 252)',
                      fontWeight: 600,
                      marginBottom: 16,
                      lineHeight: 1,
                    }}
                  >
                    {s.step}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 18,
                      color: 'var(--white)',
                      marginBottom: 4,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 10,
                      color: 'var(--blue-bright)',
                      letterSpacing: '0.12em',
                      marginBottom: 16,
                    }}
                  >
                    {s.time}
                  </div>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--grey)' }}>
                    {s.desc}
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section
        className="r-section"
        style={{
          padding: '96px 40px',
          background: 'var(--blue-deep)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Distribuție</div>
            <h2 className="display-lg" style={{ color: 'var(--white)', marginBottom: 48 }}>
              UNDE NE<br />GĂSEȘTI
            </h2>
          </RevealBlock>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 24,
            }}
          >
            {PLATFORMS.map((p, i) => (
              <RevealBlock key={i} delay={i * 0.07}>
                <div className="platform-card">
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 22,
                      color: 'var(--white)',
                      marginBottom: 8,
                    }}
                  >
                    {p.platform}
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
                    {p.format}
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <section
        className="r-section"
        style={{ padding: '96px 40px', background: 'var(--ink-soft)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Promisiunea editorială</div>
            <h2 className="display-lg" style={{ color: 'var(--white)', marginBottom: 64 }}>
              CE GARANTĂM
            </h2>
          </RevealBlock>
          <div
            className="r-split-2col"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}
          >
            {PROMISES.map((item, i) => (
              <RevealBlock key={i} delay={i * 0.1}>
                <div className="card" style={{ padding: 36 }}>
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 10,
                      color: 'var(--blue-bright)',
                      letterSpacing: '0.15em',
                      marginBottom: 16,
                      textTransform: 'uppercase',
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 26,
                      color: 'var(--white)',
                      marginBottom: 16,
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--grey-light)' }}>
                    {item.desc}
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
