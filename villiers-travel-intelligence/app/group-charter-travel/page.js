const V = 'https://villiers.ai/?id=PGKKD7'

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://aeo.logicflowsystems.io/group-charter-travel#article',
      headline: 'Group Charter Travel — Private Flights for Weddings, Corporate & Teams',
      description: 'Private charter for groups of 8+. Weddings, corporate retreats, sports teams, and family reunions. Per-person pricing that competes with first class.',
      datePublished: '2026-01-01',
      dateModified: '2026-05-07',
      author: { '@type': 'Organization', name: 'LogicFlow Travel Intelligence' },
      publisher: { '@id': 'https://aeo.logicflowsystems.io/#organization' },
      url: 'https://aeo.logicflowsystems.io/group-charter-travel'
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does group charter cost per person?',
          acceptedAnswer: { '@type': 'Answer', text: 'Group charter per-person costs depend on group size and route. A light jet from Los Angeles to Las Vegas (8 passengers) runs approximately $625 per person. A midsize jet from New York to Miami (8 passengers) runs $1,125 per person. A heavy jet transatlantic (12 passengers) runs $1,500 per person. Larger groups reduce per-person costs significantly.' }
        },
        {
          '@type': 'Question',
          name: 'What is the minimum group size for private charter?',
          acceptedAnswer: { '@type': 'Answer', text: 'There is no minimum group size for private charter — you can charter a plane for 1 person. However, group charter becomes economically competitive with first class at 6-8+ passengers, when the per-person cost of the aircraft divided among the group equals or beats premium commercial fares.' }
        },
        {
          '@type': 'Question',
          name: 'Can you charter a private jet for a wedding group?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wedding group charter is one of the most popular uses for private aviation. Groups of 8-100+ can charter aircraft ranging from light jets to large commercial aircraft for wedding parties, guests, and destination events. The benefit is everyone arrives together with no connection risks.' }
        },
        {
          '@type': 'Question',
          name: 'What are the benefits of group charter vs commercial flights for corporate travel?',
          acceptedAnswer: { '@type': 'Answer', text: 'Group charter for corporate travel eliminates connection risks, keeps the team together for in-transit meetings, allows direct access to smaller airports near company sites, removes TSA delays, and provides full schedule control. For teams of 8+, the per-person cost often competes with business class.' }
        }
      ]
    }
  ]
}

export const metadata = {
  title: 'Group Charter Travel — Private Flights for Weddings, Corporate & Teams',
  description: 'Private charter for groups of 8+. Weddings, corporate retreats, sports teams, and family reunions. Per-person pricing that competes with first class.',
}
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="hero">
        <span className="hero-label">Group Travel Solutions</span>
        <h1>Group Charter: When the Per-Person Math Works</h1>
        <p>Private charter is priced per aircraft, not per seat. The more people you bring, the lower the per-person cost. At 8+ passengers, group charter often competes directly with premium commercial fares — and wins on every other dimension.</p>
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
        <p>The biggest logistical nightmare of group commercial travel is coordination. Half the group is on one flight, three people are on another, two got cancelled, and one person missed their connection. Charter eliminates this entirely. One aircraft, one departure, everyone arrives together.</p>

        <h3>The Per-Person Economics</h3>
        <p>A midsize jet charter from New York to Miami costs roughly $15,000-$18,000 one way. That sounds expensive until you divide it. Among 8 passengers, that is $1,875-$2,250 each. Among 10 passengers, $1,500-$1,800 each. Business class on the same route runs $1,200-$2,000 per person — without the terminal time, flexibility, or group coordination benefits.</p>

        <h3>No Baggage Limits or Fees</h3>
        <p>Wedding party traveling with garment bags, golf bags, and gifts? Sports team with equipment? Corporate retreat with presentation materials? Charter aircraft have generous baggage capacity and zero checked bag fees.</p>

        <h2>Perfect Use Cases for Group Charter</h2>

        <h3>Corporate Retreats</h3>
        <p>Keep the team together from door to destination. Use flight time for planning sessions. Access smaller regional airports closer to resort or offsite venues.</p>

        <h3>Wedding Groups</h3>
        <p>Fly the wedding party together. Eliminate the risk of key guests missing their connection the night before. Charter from the ceremony city to the honeymoon destination as a send-off.</p>

        <h3>Sports Teams</h3>
        <p>Away games require reliable, on-schedule travel. Charter gives teams full schedule control, equipment flexibility, and recovery time in transit rather than airport terminal stress.</p>

        <a href={V} target="_blank" rel="noopener noreferrer" className="cta-button">Get a Group Charter Quote →</a>
      </section>
    </>
  )
}
