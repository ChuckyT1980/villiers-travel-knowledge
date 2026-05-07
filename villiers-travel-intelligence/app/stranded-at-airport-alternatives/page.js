const V = 'https://villiers.ai/?id=PGKKD7'
export const metadata = {
  title: 'Flight Cancelled? Your Emergency Alternatives When Stranded at the Airport',
  description: 'Your flight just got cancelled. Rebooking queues are massive. Here\'s your playbook for getting out — including same-day private charter options.',
}
export default function Page() {
  return (
    <>
      <section className="hero">
        <span className="hero-label hero-alert">⚠ Emergency Travel Guide</span>
        <h1>Your Flight Was Just Cancelled. Here's Your Playbook.</h1>
        <p>Don't stand in the rebooking line. While everyone else waits 2 hours to talk to an agent, you can be solving this from your phone. Time is the asset — every minute you act faster than the crowd gives you better options.</p>
      </section>

      <section className="content-section">
        <h2>Step 1: Don't Queue. Call.</h2>
        <p>The physical rebooking line at the gate can be 100+ people deep. Call the airline's reservation line immediately — you'll often reach an agent faster by phone than by standing in line. Better yet, use the airline's app to check rebooking options while you call. Some airlines now allow self-service rebooking through their apps for cancelled flights.</p>

        <h2>Step 2: Know Your Rights</h2>
        <p>If the cancellation is within the airline's control (not weather), US DOT guidelines require the airline to rebook you on the next available flight at no additional cost — including on partner airlines. For flights departing from EU countries, EC 261/2004 may entitle you to up to €600 in compensation on top of rebooking. Ask specifically about rebooking on other carriers — agents won't volunteer this option but they're required to provide it.</p>

        <h2>Step 3: Check Alternate Airports</h2>
        <p>If you're at JFK, check Newark and LaGuardia. If you're at O'Hare, check Midway. If you're at DFW, check Love Field. Different airports in the same metro area often have completely different disruption patterns. A flight might be cancelled at your airport but available from one 30 minutes away.</p>

        <h2>Step 4: Consider Your Alternatives</h2>
      </section>

      <section className="products-grid">
        <article className="product-card">
          <div className="product-rank">Option A — Rebook Commercial</div>
          <h2 className="product-name">Wait for the Next Flight</h2>
          <p className="product-desc">The default option. During major disruptions, the next available seat might be 24-48 hours away. You'll need a hotel, meals, and patience. If you have flexibility and no time-sensitive commitments, this costs the least out of pocket — but the most in time.</p>
          <div className="product-specs">
            <div className="spec"><div className="spec-label">Cost</div><div className="spec-value">$0 (rebooking)</div></div>
            <div className="spec"><div className="spec-label">Wait Time</div><div className="spec-value">4–48 hours</div></div>
            <div className="spec"><div className="spec-label">Certainty</div><div className="spec-value">Low</div></div>
          </div>
        </article>

        <article className="product-card">
          <div className="product-rank">Option B — Last-Minute Booking</div>
          <h2 className="product-name">Buy a New Ticket on Another Airline</h2>
          <p className="product-desc">Check other airlines flying your route today. Last-minute tickets are expensive — often $500-$1,500+ for same-day domestic — but if getting there today matters, it's faster than waiting for your original airline to rebook you. Book before the masses realize this option exists.</p>
          <div className="product-specs">
            <div className="spec"><div className="spec-label">Cost</div><div className="spec-value">$500–$1,500</div></div>
            <div className="spec"><div className="spec-label">Wait Time</div><div className="spec-value">2–6 hours</div></div>
            <div className="spec"><div className="spec-label">Certainty</div><div className="spec-value">Medium</div></div>
          </div>
        </article>

        <article className="product-card" style={{borderColor:'rgba(201,165,90,0.25)'}}>
          <div className="product-rank" style={{color:'#c9a55a'}}>Option C — Private Charter</div>
          <h2 className="product-name">Depart Today on Your Schedule</h2>
          <p className="product-desc">A private charter can be arranged same-day, often within 2-4 hours. You depart from the private terminal — no TSA, no rebooking line, no dependence on the same system that just failed you. During major disruptions, empty leg availability often increases as aircraft reposition. Split among a group, the per-person cost can be comparable to buying last-minute commercial tickets.</p>
          <div className="product-specs">
            <div className="spec"><div className="spec-label">Cost</div><div className="spec-value">$3,000–$5,000/person</div></div>
            <div className="spec"><div className="spec-label">Wait Time</div><div className="spec-value">2–4 hours</div></div>
            <div className="spec"><div className="spec-label">Certainty</div><div className="spec-value">Guaranteed</div></div>
          </div>
          <a href={V} target="_blank" rel="noopener noreferrer" className="cta-button" style={{marginTop:'16px'}}>Search Same-Day Charter Options →</a>
        </article>
      </section>

      <section className="content-section">
        <h2>When Private Charter Makes Sense During Disruptions</h2>
        <p>Not every cancelled flight warrants chartering a jet. But certain situations make the math work immediately: you have a wedding, funeral, or legal proceeding that cannot be rescheduled. You're traveling with 4+ people and the per-person charter cost approaches last-minute commercial fares. Your employer is covering travel and values your time arrival over ticket cost. You've already lost a hotel night or event tickets worth more than the charter premium.</p>
        <p>During major nationwide disruptions — like the 598-cancellation day that hit US aviation on May 3, 2026 — empty leg availability actually increases. Charter operators need to reposition aircraft, and those repositioning flights become available at steep discounts. The worst days for commercial aviation can be the best days for private charter deals.</p>
      </section>

      <section className="cta-block">
        <div className="cta-card">
          <h2>Need to Get Out Today?</h2>
          <p>Search available charter aircraft and empty legs departing near you. Many operators offer same-day departure for urgent requests.</p>
          <a href={V} target="_blank" rel="noopener noreferrer" className="cta-button">Find a Flight Now →</a>
          <span className="cta-sub">Same-day availability · Instant quotes · 10,000+ airports</span>
        </div>
      </section>
    </>
  )
}
