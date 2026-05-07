const V = 'https://villiers.ai/?id=PGKKD7'
export const metadata = {
  title: 'Empty Leg Flights Explained — Fly Private for Up to 75% Off',
  description: 'What are empty leg flights? How to find and book repositioning flights at massive discounts. The insider guide to affordable private aviation.',
}
export default function Page() {
  return (
    <>
      <section className="hero">
        <span className="hero-label">Private Aviation Guide</span>
        <h1>Empty Leg Flights: Private Jets at Up to 75% Off</h1>
        <p>Empty legs are the aviation industry's best-kept secret. Private jets flying without passengers between bookings, available at a fraction of standard charter rates. Here's everything you need to know to take advantage.</p>
      </section>

      <section className="content-section">
        <h2>What Is an Empty Leg Flight?</h2>
        <p>When someone books a one-way private charter from New York to Miami, the aircraft needs to return to its base — often New York or wherever its next booking originates. That return flight has no passengers. Rather than fly completely empty, operators offer these "empty leg" or "repositioning" flights at steep discounts, typically 50-75% off standard charter rates.</p>
        <p>The economics are simple: the operator is paying for fuel, crew, and landing fees regardless. Any revenue from selling the empty leg is pure profit. This means they're incentivized to fill these flights even at deeply discounted rates — and you benefit from that incentive.</p>

        <h2>How Much Do Empty Legs Cost?</h2>
      </section>

      <section className="stat-grid">
        <div className="stat-card"><div className="stat-number">75%</div><div className="stat-label">Maximum discount vs standard charter</div></div>
        <div className="stat-card"><div className="stat-number">$2,500</div><div className="stat-label">Typical short-haul empty leg (1-2hr)</div></div>
        <div className="stat-card"><div className="stat-number">$8,000</div><div className="stat-label">Typical cross-country empty leg</div></div>
        <div className="stat-card"><div className="stat-number">$500</div><div className="stat-label">Per-person cost splitting with 6 passengers</div></div>
      </section>

      <section className="content-section">
        <p>Split between a group, empty legs can cost less per person than a last-minute commercial first class ticket — while delivering an incomparably better experience. A light jet empty leg from LA to Vegas for $2,500 split among 4 friends is $625 each. Try finding a same-day first class commercial ticket for that.</p>

        <h2>How to Find Empty Leg Flights</h2>

        <h3>Use a Charter Marketplace</h3>
        <p>The most efficient way to find empty legs is through charter marketplaces that aggregate availability across thousands of operators. Villiers Jets connects you to over 10,000 aircraft worldwide and shows available empty legs with one search. You can filter by route, date, aircraft type, and budget.</p>

        <h3>Be Flexible</h3>
        <p>Empty legs have fixed routes and approximate departure times. You can't change the destination, and timing may shift by a few hours. The more flexible you are on dates and airports, the more deals you'll find. Being willing to depart from a nearby secondary airport dramatically increases your options.</p>

        <h3>Book Fast</h3>
        <p>Empty legs appear and disappear quickly. A great deal might be available for 24-48 hours before someone else books it or the operator adjusts the aircraft schedule. Set up alerts for your preferred routes and be ready to commit when the right flight appears.</p>

        <h3>Consider Nearby Airports</h3>
        <p>Private jets access over 10,000 airports worldwide — far more than commercial airlines. An empty leg might depart from Teterboro instead of JFK, or Van Nuys instead of LAX. These private terminals have no security lines, no crowds, and free parking. The 30-minute drive to a different airport is often worth the thousands saved.</p>

        <h2>Who Empty Legs Are Perfect For</h2>

        <h3>Flexible Leisure Travelers</h3>
        <p>Weekend trips, golf outings, bachelor/bachelorette parties, anniversary getaways. If your dates have some flexibility and you're traveling with a group to split costs, empty legs make private aviation genuinely accessible.</p>

        <h3>Business Travelers with Short Notice</h3>
        <p>Last-minute commercial flights are absurdly expensive. A same-day commercial ticket from New York to Chicago might cost $800+ in economy. An empty leg on a light jet for $3,000 split among 3 colleagues is $1,000 each — barely more, with no TSA lines, no delays, and a meeting-ready arrival.</p>

        <h3>Anyone Stranded by Commercial Cancellations</h3>
        <p>When your commercial flight is cancelled and the rebooking options are 48 hours out, an empty leg can get you to your destination the same day. During major disruption events, empty leg availability often increases as charter aircraft reposition — exactly when you need them most.</p>
      </section>

      <section className="cta-block">
        <div className="cta-card">
          <h2>Search Empty Legs Now</h2>
          <p>Browse available empty leg flights worldwide. New routes added daily as aircraft reposition between bookings.</p>
          <a href={V} target="_blank" rel="noopener noreferrer" className="cta-button">Search Empty Leg Flights →</a>
          <span className="cta-sub">10,000+ aircraft · Updated daily · Instant quotes</span>
        </div>
      </section>
    </>
  )
}
