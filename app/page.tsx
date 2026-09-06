import Image from 'next/image';
import WhatsAppContactForm from './whatsapp-contact-form';

const concepts = [
  {
    href: '/atelier',
    number: '01',
    name: 'The Atelier',
    note: 'Editorial · Warm · Refined',
    image: '/images/space-01.jpg',
    reveal: 'left',
  },
  {
    href: '/monolith',
    number: '02',
    name: 'Monolith',
    note: 'Architectural · Bold · Dark',
    image: '/images/space-04.jpg',
    reveal: 'up',
  },
  {
    href: '/canvas',
    number: '03',
    name: 'Living Canvas',
    note: 'Artistic · Playful · Human',
    image: '/images/space-06.jpg',
    reveal: 'right',
  },
];

const services = [
  ['01', 'Hospitality concepts', 'A distinctive visual and spatial story for every stay.'],
  ['02', 'Interior design', 'Guest-ready serviced apartments, suites, and boutique properties.'],
  ['03', 'FF&E and styling', 'Furniture, lighting, art, materials, and every finishing layer.'],
  ['04', 'Guest experience', 'Arrival, movement, comfort, durability, and memorable details.'],
];

const locations = [
  {
    city: 'New Cairo',
    type: 'Design studio',
    address: 'First Settlement · Cairo, Egypt',
    hours: 'Sunday—Thursday · 10:00—18:00',
    map: 'https://maps.google.com/?q=New+Cairo,+Egypt',
  },
  {
    city: 'Central Cairo',
    type: 'Meeting space',
    address: 'Zamalek · Cairo, Egypt',
    hours: 'By appointment',
    map: 'https://maps.google.com/?q=Zamalek,+Cairo,+Egypt',
  },
  {
    city: 'North Coast',
    type: 'Seasonal site office',
    address: 'Sahel · Egypt',
    hours: 'Summer projects · By appointment',
    map: 'https://maps.google.com/?q=North+Coast,+Egypt',
  },
];

export default function Home() {
  return (
    <main className="concept-hub" id="top">
      <nav className="hub-nav" aria-label="Primary navigation" data-reveal="down">
        <a className="hub-brand" href="#top" aria-label="Doors home">DOORS</a>
        <div className="hub-links">
          <a href="#directions">Directions</a>
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="hub-meta">Hospitality design · Cairo</span>
      </nav>

      <header className="hub-intro">
        <p className="eyebrow" data-reveal="left">Hospitality design · Three directions</p>
        <h1 data-reveal="up">Every door opens to a feeling.</h1>
        <p className="hub-lede" data-reveal="right">
          Three distinct digital directions for Doors—a studio shaping serviced
          apartments and hotel stays that guests remember.
        </p>
      </header>

      <div className="hub-promise" aria-label="Doors design philosophy" data-reveal="up">
        <span>Guest-first spaces</span>
        <span>Operationally considered</span>
        <span>Made to be remembered</span>
      </div>

      <section className="hub-directions" id="directions">
        <header className="hub-section-head" data-reveal="up">
          <div><span>01</span><p>Choose a creative direction</p></div>
          <p>Each concept is a complete website experience with its own mood, typography, and visual rhythm.</p>
        </header>
        <div className="concept-grid" aria-label="Design concepts">
          {concepts.map((concept, index) => (
            <a
              className="concept-card"
              href={concept.href}
              key={concept.href}
              data-reveal={concept.reveal}
              data-delay={String(index * 90)}
            >
              <div className="concept-image-wrap">
                <Image
                  src={concept.image}
                  alt={`${concept.name} website direction for Doors`}
                  className="concept-image"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <span className="concept-number">{concept.number}</span>
                <span className="concept-open" aria-hidden="true">↗</span>
              </div>
              <div className="concept-copy">
                <h2>{concept.name}</h2>
                <p>{concept.note}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="hub-about" id="about">
        <div className="hub-about-image" data-reveal="left">
          <Image
            src="/images/space-10.jpg"
            alt="Warm hospitality interior by Doors"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <span>Thoughtful stays<br />start here.</span>
        </div>
        <div className="hub-about-copy" data-reveal="right">
          <span className="hub-section-label">02 / Who we are</span>
          <h2>We design places that guests want to return to.</h2>
          <p>
            Doors is a hospitality design studio creating serviced apartments,
            boutique stays, and guest-ready interiors. We connect character,
            comfort, and commercial thinking in one considered experience.
          </p>
          <p>
            From the first concept to the final styling layer, every decision is
            made around how a guest arrives, lives, rests, and remembers the space.
          </p>
          <div className="hub-stats">
            <div><strong>01</strong><span>Guest-first thinking</span></div>
            <div><strong>02</strong><span>Detail-led delivery</span></div>
            <div><strong>03</strong><span>Built for real stays</span></div>
          </div>
        </div>
      </section>

      <section className="hub-services" aria-labelledby="services-title">
        <header className="hub-section-head" data-reveal="up">
          <div><span>03</span><p>What we do</p></div>
          <h2 id="services-title">From first thought<br />to final touch.</h2>
        </header>
        <div className="service-grid">
          {services.map(([number, title, content], index) => (
            <article data-reveal="up" data-delay={String(index * 80)} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{content}</p>
              <b aria-hidden="true">↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="hub-locations" id="locations" aria-labelledby="locations-title">
        <header className="locations-intro" data-reveal="left">
          <span className="hub-section-label">04 / Our locations</span>
          <h2 id="locations-title">Close to every project.</h2>
          <p>Sample locations shown for the concept presentation. Final office details will be added once confirmed.</p>
          <span className="demo-badge">Demo data</span>
        </header>
        <div className="location-list" data-reveal="right">
          {locations.map((location, index) => (
            <article key={location.city} data-reveal="right" data-delay={String(index * 90)}>
              <span>0{index + 1}</span>
              <div>
                <p>{location.type}</p>
                <h3>{location.city}</h3>
                <address>{location.address}</address>
                <small>{location.hours}</small>
              </div>
              <a href={location.map} target="_blank" rel="noreferrer" aria-label={`View ${location.city} area on Google Maps`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="hub-contact" id="contact">
        <div className="hub-contact-copy" data-reveal="left">
          <span className="hub-section-label">05 / Start a conversation</span>
          <h2>Have a stay<br />in mind?</h2>
          <p>Tell us about the place, number of units, location, and the feeling you want guests to take home.</p>
          <div className="contact-details">
            <div><span>Email</span><strong>hello@doors-studio.com</strong></div>
            <div><span>Phone</span><strong>+20 100 000 0000</strong></div>
            <div><span>Instagram</span><strong>@doors.design.studio</strong></div>
          </div>
          <span className="demo-badge">Demo contact details</span>
        </div>
        <div className="hub-form-wrap" data-reveal="right">
          <WhatsAppContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-cta" data-reveal="left">
          <div>
            <span>Have a hospitality project in mind?</span>
            <h2>Let&apos;s open the<br />next door.</h2>
          </div>
          <a href="#contact">Start a project <span aria-hidden="true">↗</span></a>
        </div>

        <div className="site-footer-wordmark" aria-label="Doors" data-reveal="up">DOORS</div>

        <div className="site-footer-grid">
          <div data-reveal="up">
            <p>Explore</p>
            <a href="#directions">Directions</a>
            <a href="#about">About us</a>
            <a href="#locations">Locations</a>
            <a href="#contact">Contact</a>
          </div>
          <div data-reveal="up" data-delay="70">
            <p>Creative directions</p>
            <a href="/atelier">The Atelier</a>
            <a href="/monolith">Monolith</a>
            <a href="/canvas">Living Canvas</a>
          </div>
          <div data-reveal="up" data-delay="140">
            <p>Contact</p>
            <a href="mailto:hello@doors-studio.com">hello@doors-studio.com</a>
            <a href="tel:+201000000000">+20 100 000 0000</a>
            <a href="#contact">WhatsApp</a>
          </div>
          <div data-reveal="up" data-delay="210">
            <p>Studios</p>
            <span>New Cairo · Design studio</span>
            <span>Zamalek · Meeting space</span>
            <span>North Coast · Seasonal</span>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>Doors Hospitality Design · Cairo, Egypt</span>
          <span>Concept presentation · 2026</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
