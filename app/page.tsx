const concepts = [
  {
    href: '/atelier',
    number: '01',
    name: 'The Atelier',
    note: 'Editorial · Warm · Refined',
    image: '/images/space-01.jpg',
  },
  {
    href: '/monolith',
    number: '02',
    name: 'Monolith',
    note: 'Architectural · Bold · Dark',
    image: '/images/space-04.jpg',
  },
  {
    href: '/canvas',
    number: '03',
    name: 'Living Canvas',
    note: 'Artistic · Playful · Human',
    image: '/images/space-06.jpg',
  },
];

export default function Home() {
  return (
    <main className="concept-hub">
      <nav className="hub-nav" aria-label="Primary navigation">
        <span className="hub-brand">DOORS</span>
        <span className="hub-meta">Website design directions · 2026</span>
      </nav>

      <header className="hub-intro">
        <p className="eyebrow">Hospitality design · Three directions</p>
        <h1>Every door opens to a feeling.</h1>
        <p className="hub-lede">
          Three distinct digital directions for Doors—a studio shaping serviced
          apartments and hotel stays that guests remember.
        </p>
      </header>

      <div className="hub-promise" aria-label="Doors design philosophy">
        <span>Guest-first spaces</span>
        <span>Operationally considered</span>
        <span>Made to be remembered</span>
      </div>

      <section className="concept-grid" aria-label="Design concepts">
        {concepts.map((concept) => (
          <a className="concept-card" href={concept.href} key={concept.href}>
            <div className="concept-image-wrap">
              <img src={concept.image} alt="" className="concept-image" />
              <span className="concept-number">{concept.number}</span>
              <span className="concept-open" aria-hidden="true">↗</span>
            </div>
            <div className="concept-copy">
              <h2>{concept.name}</h2>
              <p>{concept.note}</p>
            </div>
          </a>
        ))}
      </section>

      <footer className="hub-footer">
        <span>Click any direction to explore the full website.</span>
        <span>Designed for stays · Made to be remembered</span>
      </footer>
    </main>
  );
}
