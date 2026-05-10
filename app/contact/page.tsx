'use client';

import { useState, type FormEvent } from 'react';
import PageBanner from '@/components/PageBanner';
import RevealBlock from '@/components/RevealBlock';
import SocialLinks from '@/components/SocialLinks';

type FormType = 'general' | 'guest' | 'collab' | 'team';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: FormType;
}

const TYPE_OPTIONS: Array<{ val: FormType; label: string }> = [
  { val: 'general', label: 'General' },
  { val: 'guest', label: 'Propune un invitat' },
  { val: 'collab', label: 'Colaborare' },
  { val: 'team', label: 'Alătură-te echipei' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page page-with-banner page-transition">
      <PageBanner title="Contact" subtitle="Hai să vorbim" />
      <section
        className="r-section-tight"
        style={{ padding: '80px 40px 96px', background: 'var(--ink)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <RevealBlock>
            <div className="section-label">Contactează-ne</div>
            <h1 className="display-xl" style={{ marginBottom: 32 }}>
              HAI SĂ
              <br />
              <span style={{ color: 'var(--blue-bright)' }}>VORBIM</span>
            </h1>
          </RevealBlock>

          <div
            className="r-split-asym"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap: 80,
              marginTop: 16,
            }}
          >
            <RevealBlock>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 20,
                      color: 'var(--white)',
                      marginBottom: 16,
                    }}
                  >
                    Propune un invitat
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'var(--grey-light)',
                      marginBottom: 16,
                    }}
                  >
                    Cunoști un profesor REI cu o poveste fascinantă, un alumni cu o traiectorie
                    neașteptată sau un expert din industrie care merită o conversație? Scrie-ne.
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 20,
                      color: 'var(--white)',
                      marginBottom: 16,
                    }}
                  >
                    Colaborări
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'var(--grey-light)',
                      marginBottom: 16,
                    }}
                  >
                    Dacă reprezinți o organizație, companie sau inițiativă cu valori comune, suntem
                    deschiși la parteneriate care au sens.
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--ff-display)',
                      fontSize: 20,
                      color: 'var(--white)',
                      marginBottom: 16,
                    }}
                  >
                    Echipa de producție
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'var(--grey-light)',
                      marginBottom: 16,
                    }}
                  >
                    Facultatea de Relații Economice Internaționale
                    <br />
                    ASE București
                  </p>
                </div>
                <div>
                  <div className="section-label" style={{ marginBottom: 16 }}>
                    Urmărește-ne
                  </div>
                  <SocialLinks />
                </div>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.2}>
              {sent ? (
                <div
                  style={{
                    padding: 48,
                    border: '1px solid var(--blue)',
                    background: 'oklch(0.48 0.22 252 / 0.06)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <div style={{ fontSize: 48 }}>✓</div>
                  <h2 className="display-md" style={{ color: 'var(--white)' }}>
                    Mesaj trimis!
                  </h2>
                  <p style={{ fontSize: 15, color: 'var(--grey-light)' }}>
                    Îți vom răspunde cât mai curând posibil.
                  </p>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setSent(false)}
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
                >
                  <div>
                    <label className="form-label">Tipul mesajului</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {TYPE_OPTIONS.map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          className={`filter-btn ${formData.type === opt.val ? 'active' : ''}`}
                          onClick={() =>
                            setFormData((f) => ({ ...f, type: opt.val }))
                          }
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div
                    className="r-grid-2col"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
                  >
                    <div>
                      <label className="form-label" htmlFor="contact-name">
                        Nume
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="form-input"
                        placeholder="Numele tău"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((f) => ({ ...f, name: e.target.value }))
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="contact-email">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        className="form-input"
                        placeholder="email@exemplu.ro"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((f) => ({ ...f, email: e.target.value }))
                        }
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-subject">
                      Subiect
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className="form-input"
                      placeholder="Despre ce dorești să vorbești"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData((f) => ({ ...f, subject: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-message">
                      Mesaj
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-input"
                      placeholder="Detalii..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((f) => ({ ...f, message: e.target.value }))
                      }
                      style={{ resize: 'vertical' }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    Trimite mesajul →
                  </button>
                </form>
              )}
            </RevealBlock>
          </div>
        </div>
      </section>
    </div>
  );
}
