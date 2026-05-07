const V = 'https://villiers.ai/?id=PGKKD7'
export const metadata = {
  title: 'Private Charter vs First Class — The Real Cost Comparison',
  description: 'Private charter is closer to first class pricing than you think — especially when you factor in delays, hotels, and lost time. See the real numbers.',
}
export default function Page() {
  return (
    <>
      <section className="hero">
        <span className="hero-label">Cost Analysis</span>
        <h1>Private Charter vs. First Class: The Math Most People Get Wrong</h1>
        <p>Everyone assumes private charter is 10x the cost of first class. The real gap is much smaller — especially in 2026 when commercial "first class" increasingly means delayed departures, lost bags, and missed connections.</p>
      </section>

      <section className="content-section">
        <h2>The Ticket Price Isn't the Full Cost</h2>
        <p>When comparing private charter to first class, most people look at the ticket price alone. That's the wrong comparison. The true cost of commercial travel includes everything the ticket price doesn't cover — and in 2026, those hidden costs are massive.</p>

        <h2>New York to Miami: A Real Comparison</h2>
      </section>

      <section className="products-grid">
        <article className="product-card">
          <div className="product-rank">Commercial First Class</div>
          <h2 className="product-name">The Visible Cost</h2>
          <div className="product-specs">
            <div className="spec"><div className="spec-label">Ticket</div><div className="spec-value">$650–$1,200</div></div>
            <div className="spec"><div className="spec-label">Airport Time</div><div className="spec-value">2.5+ hours</div></div>
            <div className="spec"><div className="spec-label">Flight Time</div><div className="spec-value">3 hours</div></div>
            <div className="spec"><div className="spec-label">Total Door-to-Door</div><div className="spec-value">6–8 hours</div></div>
          </div>
          <p className="product-desc">You arrive 2 hours early. Security takes 30-45 minutes. You wait at the gate. The flight boards 40 minutes before departure. You sit on the tarmac. You land, wait for the gate, wait for bags, wait for ground transport. If everything goes perfectly — which in 2026 it often doesn't — you've spent 6-8 hours door to door for a 3-hour flight.</p>
        </article>

        <article className="product-card">
          <div className="product-rank">When It Goes Wrong (30% of the time in 2026)</div>
          <h2 className="product-name">The Hidden Cost</h2>
          <div className="product-specs">
            <div className="spec"><div className="spec-label">Delay Average</div><div className="spec-value">2–6 hours</div></div>
            <div className="spec"><div className="spec-label">Hotel (if cancelled)</div><div className="spec-value">$200–$400</div></div>
            <div className="spec"><div className="spec-label">Meals</div><div className="spec-value">$50–$100</div></div>
            <div className="spec"><div className="spec-label">Lost Productivity</div><div className="spec-value">$500–$2,000</div></div>
          </div>
          <p className="product-desc">Your flight is delayed 4 hours. Or cancelled entirely. The rebooking puts you on tomorrow morning's flight. Now you need a hotel near the airport ($300), dinner ($50), and you've lost an entire evening or workday. If you were flying to a meeting, that meeting is gone. If it was a vacation, that's a day of your limited PTO burned at LaGuardia.</p>
        </article>

        <article className="product-card" style={{borderColor:'rgba(201,165,90,0.25)'}}>
          <div className="product-rank" style={{color:'#c9a55a'}}>Private Charter (Light Jet)</div>
          <h2 className="product-name">The Complete Picture</h2>
          <div className="product-specs">
            <div className="spec"><div className="spec-label">Charter Cost</div><div className="spec-value">$12,000–$18,000</div></div>
            <div className="spec"><div className="spec-label">Per Person (4 pax)</div><div className="spec-value">$3,000–$4,500</div></div>
            <div className="spec"><div className="spec-label">Airport Time</div><div className="spec-value">15 minutes</div></div>
            <div className="spec"><div className="spec-label">Total Door-to-Door</div><div className="spec-value">3.5 hours</div></div>
          </div>
          <p className="product-desc">You arrive at the private terminal 15 minutes before departure. No lines, no security theater, no boarding groups. Your bags go straight from your car to the aircraft. You depart on your schedule. You land and your car is waiting on the tarmac. Door to door in 3.5 hours, guaranteed. Split among 4 travelers, the per-person cost starts overlapping with what first class actually costs when things go wrong commercially.</p>
        </article>
      </section>

      <section className="content-section">
        <h2>When Charter Makes Financial Sense</h2>

        <h3>Groups of 4 or More</h3>
        <p>Private charter pricing is per aircraft, not per seat. A light jet that costs $15,000 split among 6 passengers is $2,500 each. That's within range of last-minute first class tickets — with an incomparably better experience and zero disruption risk.</p>

        <h3>Time-Sensitive Travel</h3>
        <p>If missing your arrival time costs more than the charter — a business deal, a legal proceeding, a medical appointment, a once-in-a-lifetime event — the charter pays for itself in reliability alone. Commercial aviation in 2026 cannot guarantee your arrival time. Private charter can.</p>

        <h3>Routes with Poor Commercial Service</h3>
        <p>Not every city pair has good direct commercial flights. A trip from Sacramento to Aspen commercially requires connections, adds 4-6 hours, and risks missed connections. A direct charter flight is 2.5 hours with zero connection risk. When the commercial routing is bad, charter becomes competitive on total time cost even before factoring in disruption risk.</p>

        <h3>Empty Legs: The Equalizer</h3>
        <p>Empty leg flights at 50-75% off standard charter rates can bring private aviation to within striking distance of premium commercial fares. An empty leg from New York to Miami for $5,000 split among 4 people is $1,250 each — comparable to a full-fare first class ticket, but with private terminal access, no delays, and zero chance of cancellation.</p>
      </section>

      <section className="cta-block">
        <div className="cta-card">
          <h2>Get a Real Quote. Compare for Yourself.</h2>
          <p>Search charter and empty leg pricing for your specific route. The numbers might surprise you.</p>
          <a href={V} target="_blank" rel="noopener noreferrer" className="cta-button">Get Instant Charter Quotes →</a>
          <span className="cta-sub">Free quotes · No commitment · Compare options side by side</span>
        </div>
      </section>
    </>
  )
}
