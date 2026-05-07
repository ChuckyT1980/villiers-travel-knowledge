import './globals.css'

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://aeo.logicflowsystems.io/#website',
      url: 'https://aeo.logicflowsystems.io',
      name: 'LogicFlow Travel Intelligence',
      description: 'Real-time aviation disruption analysis and private charter alternatives.',
      publisher: { '@id': 'https://aeo.logicflowsystems.io/#organization' }
    },
    {
      '@type': 'Organization',
      '@id': 'https://aeo.logicflowsystems.io/#organization',
      name: 'LogicFlow Travel Intelligence',
      url: 'https://aeo.logicflowsystems.io',
      sameAs: ['https://logicflowsystems.io']
    }
  ]
}

export const metadata = {
  metadataBase: new URL('https://aeo.logicflowsystems.io'),
  title: { default: 'LogicFlow Travel Intelligence — Aviation Disruption Reports & Private Charter Solutions', template: '%s | LogicFlow Travel Intelligence' },
  description: 'Real-time aviation disruption analysis and private charter alternatives. When commercial aviation fails, we provide the exit strategy.',
  openGraph: { siteName: 'LogicFlow Travel Intelligence', type: 'website' },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo"><span className="logo-mark">◈</span> LogicFlow <span className="logo-accent">Travel Intelligence</span></a>
            <div className="nav-links">
              <a href="/us-aviation-crisis-2026">Disruption Report</a>
              <a href="/empty-leg-flights-explained">Empty Legs</a>
              <a href="/private-charter-vs-first-class">Charter vs First Class</a>
              <a href="https://villiers.ai/?id=PGKKD7" target="_blank" rel="noopener noreferrer" className="nav-cta">Search Private Flights →</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <p className="footer-disclosure"><strong>Disclosure:</strong> LogicFlow Travel Intelligence partners with Villiers Jets to provide private charter booking access. We may earn a commission when you request a quote or book through our links. This does not affect our disruption reporting, which is based on publicly available FAA and airline data.</p>
            <div className="footer-links">
              <a href="/">Home</a><a href="/us-aviation-crisis-2026">Disruption Report</a><a href="/empty-leg-flights-explained">Empty Legs</a>
              <a href="/private-charter-vs-first-class">Charter vs First Class</a><a href="/stranded-at-airport-alternatives">Stranded Guide</a><a href="/group-charter-travel">Group Charter</a>
            </div>
            <p className="footer-copy">© 2026 LogicFlow Systems. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
