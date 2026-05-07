const V = 'https://villiers.ai/?id=PGKKD7'
export const metadata = {
  title: 'Group Charter Travel — Private Flights for Weddings, Corporate & Teams',
  description: 'Private charter for groups of 8+. Weddings, corporate retreats, sports teams, and family reunions. Per-person pricing that competes with first class.',
}
export default function Page() {
  return (
    <>
      <section className="hero">
        <span className="hero-label">Group Travel Solutions</span>
        <h1>Group Charter: When the Per-Person Math Works</h1>
        <p>Private charter is priced per aircraft, not per seat. The more people you bring, the lower the per-person cost. At 8+ passengers, group charter often competes directly with premium commercial fares — while eliminating every headache of coordinating group commercial travel.</p>
      </section>

      <section className="stat-grid">
        <div className="stat-card"><div className="stat-number">$625</div><div className="stat-label">Per person: 8 passengers on a light jet (LA→Vegas)</div></div>
        <div className="stat-card"><div className="stat-number">$1,125</div><div className="stat-label">Per person: 8 passengers on midsize jet (NY→Miami)</div></div>
        <div className="stat-card"><div className="stat-number">$1,500</div><div className="stat-label">Per person: 12 passengers on heavy jet (NY→London)</div></div>
        <div className="stat-card"><div className="stat-number">0</div><div className="stat-label">Missed connections when the whole group flies together</div></div>
      </section>

      <section className="content-section">
        <h2>Why Groups Should Consider Charter</h2>

        <h3>Everyone Arrives Together</h3>
        <p>The biggest logistical nightmare of group commercial travel is coordination. Half the group is on one flight, three people are on another, two got cancelled, and one person missed their connection. With charter, your entire group departs and arrives together. No one is stranded. No one is late. The event starts when everyone is there — and everyone is there on time.</p>

        <h3>The Per-Person Economics</h3>
        <p>A midsize jet charter from New York to Miami costs roughly $15,000-$18,000 one way. That sounds expensive until you divide it. Among 8 passengers, that's $1,875-$2,250 each. Among 10 passengers on a super-midsize jet, it drops further. Now compare that to last-minute commercial first class tickets for a group of 10 — which could easily run $1,200-$1,800 per person — and the gap shrinks dramatically, while the experience is incomparably better.</p>

        <h3>No Baggage Limits or Fees</h3>
        <p>Wedding party traveling with garment bags, golf bags, and gifts? Sports team with equipment? Corporate retreat with presentation materials? Charter aircraft have generous baggage capacity and no per-bag fees. Your group brings what they need without Tetris-packing into carry-on dimensions.</p>

        <h2>Perfect Use Cases for Group Charter</h2>

        <h3>Destination Weddings</h3>
        <p>The wedding party, close family, or VIP guests travel together in style. Depart on your schedule, arrive together, start celebrating immediately. No "we're stuck at O'Hare" texts. For destination weddings where the travel IS part of the experience, a private charter sets the tone from the moment the group boards.</p>

        <h3>Corporate Retreats & Off-Sites</h3>
        <p>When your company is flying 8-15 people to a retreat, the per-person charter cost is a rounding error on the overall event budget. The benefits are tangible: productive time on the aircraft (private jets have wifi and meeting-capable seating), team bonding during travel, and zero risk of key attendees being stranded by commercial delays.</p>

        <h3>Sports Teams</h3>
        <p>Teams traveling to tournaments or away games need to arrive together, on time, with equipment. Commercial travel for a 15-person team with gear is a logistical nightmare of checked bags, multiple bookings, and prayer that nothing gets delayed. Charter solves every one of these problems in a single booking.</p>

        <h3>Family Reunions & Multi-Generation Travel</h3>
        <p>Traveling with elderly family members, young children, and everyone in between? Commercial airports are exhausting for multi-generational groups. Private terminals have no lines, no crowds, and the aircraft door is steps from the car. For large family trips where comfort and simplicity matter, group charter transforms the travel experience for every generation.</p>
      </section>

      <section className="cta-block">
        <div className="cta-card">
          <h2>Get a Group Charter Quote</h2>
          <p>Tell us your route, dates, and group size. Receive quotes from multiple operators to find the best fit for your group.</p>
          <a href={V} target="_blank" rel="noopener noreferrer" className="cta-button">Request Group Quote →</a>
          <span className="cta-sub">Free quotes · Compare operators · No commitment</span>
        </div>
      </section>
    </>
  )
}
