const V = 'https://villiers.ai/?id=PGKKD7'
export const metadata = {
  title: 'LogicFlow Travel Intelligence — Aviation Disruption Reports & Private Charter Solutions',
  description: 'Commercial aviation is breaking down. 3,000+ daily delays, mass cancellations, and shrinking schedules. We monitor the chaos and provide private charter alternatives.',
}
export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-label hero-alert">⚠ Active Disruption Season</span>
        <h1>Commercial Aviation Is Breaking Down. We Track It.</h1>
        <p>Thousands of flights delayed daily. Airlines cutting millions of seats. FAA staffing shortages creating ground stops in clear weather. LogicFlow Travel Intelligence monitors the collapse of commercial air reliability — and provides the alternative when you can't afford to be stranded.</p>
      </section>

      <section className="stat-grid">
        <div className="stat-card alert">
          <div className="stat-number red">3,900+</div>
          <div className="stat-label">Daily US flight delays (May 2026 average)</div>
        </div>
        <div className="stat-card alert">
          <div className="stat-number red">598</div>
          <div className="stat-label">Cancellations recorded in a single day</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2M</div>
          <div className="stat-label">Seats cut from global schedules this month</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">20,000</div>
          <div className="stat-label">Lufthansa Group flights cancelled May–Oct</div>
        </div>
      </section>

      <section className="cta-block">
        <div className="cta-card">
          <h2>Skip the Chaos. Fly Private.</h2>
          <p>Search thousands of private charter options and empty leg flights worldwide. No delays, no cancellations, no middle seats.</p>
          <a href={V} target="_blank" rel="noopener noreferrer" className="cta-button">Search Private Flights →</a>
          <span className="cta-sub">Instant quotes · 10,000+ aircraft · Empty legs up to 75% off</span>
        </div>
      </section>

      <section className="categories-grid">
        <a href="/us-aviation-crisis-2026" className="category-card">
          <h3>US Aviation Crisis Report</h3>
          <p>3,900+ daily delays, FAA staffing collapse, Spirit Airlines meltdown, and fuel-driven schedule cuts. The full picture of why flying commercial has become unreliable.</p>
          <span className="category-link">Read Report →</span>
        </a>
        <a href="/empty-leg-flights-explained" className="category-card">
          <h3>Empty Leg Flights Explained</h3>
          <p>Fly private for up to 75% less than standard charter rates. How empty legs work, how to find them, and how to book before they disappear.</p>
          <span className="category-link">Learn More →</span>
        </a>
        <a href="/private-charter-vs-first-class" className="category-card">
          <h3>Private Charter vs. First Class</h3>
          <p>The real cost comparison most people get wrong. When you factor in delays, hotels, and lost time, private charter is closer to first class than you think.</p>
          <span className="category-link">See Comparison →</span>
        </a>
        <a href="/stranded-at-airport-alternatives" className="category-card">
          <h3>Stranded at the Airport?</h3>
          <p>Your flight just got cancelled. The rebooking queue is 200 people deep. Here's your playbook for getting out — including same-day private charter options.</p>
          <span className="category-link">Get Out Now →</span>
        </a>
        <a href="/group-charter-travel" className="category-card">
          <h3>Group Charter Travel</h3>
          <p>Weddings, corporate retreats, sports teams, family reunions. When you're moving 8+ people, private charter can cost less per person than you'd expect.</p>
          <span className="category-link">Learn More →</span>
        </a>
      </section>
    </>
  )
}
