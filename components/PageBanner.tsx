interface PageBannerProps {
  title?: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div
      className="page-banner"
      style={{
        position: 'relative',
        width: '100%',
        height: 220,
        overflow: 'hidden',
        background: 'var(--ink)',
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
            'linear-gradient(to bottom, oklch(0.06 0.01 252 / 0.3) 0%, oklch(0.06 0.01 252 / 0.6) 60%, oklch(0.06 0.01 252 / 0.98) 100%)',
        }}
      />
      {title && (
        <div
          className="page-banner-text"
          style={{ position: 'absolute', bottom: 24, left: 40, right: 40, zIndex: 1 }}
        >
          <div
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: 'var(--blue-bright)',
              textTransform: 'uppercase',
              marginBottom: 4,
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: 'var(--white)',
              lineHeight: 1,
              letterSpacing: '0.02em',
            }}
          >
            {title}
          </div>
        </div>
      )}
    </div>
  );
}
