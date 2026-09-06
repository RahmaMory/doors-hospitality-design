import type { Metadata } from 'next';
import styles from './atelier.module.css';

export const metadata: Metadata = {
  title: 'The Atelier — Doors',
  description: 'A warm, editorial website direction for Doors hospitality design studio.',
};

const projects = [
  {
    number: '01',
    name: 'Pyramids View Residence',
    category: 'Serviced apartment · Giza',
    description:
      'A calm, light-filled base for short-stay guests, where warm timber, natural linen, and thoughtful storage make arrival feel effortless.',
    cover: '/images/space-01.jpg',
    gallery: ['/images/space-02.jpg', '/images/space-11.jpg'],
  },
  {
    number: '02',
    name: 'Garden Stay Suites',
    category: 'Boutique hospitality · Cairo',
    description:
      'A collection of boutique suites drawn around greenery, balancing privacy, generous shared moments, and an easy connection to the outdoors.',
    cover: '/images/space-07.jpg',
    gallery: ['/images/space-03.jpg', '/images/space-06.jpg'],
  },
  {
    number: '03',
    name: 'The Courtyard Apartment',
    category: 'Serviced living · New Cairo',
    description:
      'A refined serviced apartment built from stone, smoked glass, and warm timber—durable for daily turnover, yet personal in every detail.',
    cover: '/images/space-12.jpg',
    gallery: ['/images/space-04.jpg', '/images/space-08.jpg'],
  },
];

export default function AtelierPage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav} data-reveal="down">
        <a className={styles.wordmark} href="#top" aria-label="Doors home">DOORS</a>
        <nav aria-label="Atelier navigation">
          <a href="#work">Work</a>
          <a href="#about">Studio</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className={styles.switcher} href="/">All directions <span>↗</span></a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroTopline} data-reveal="down">
          <p>Hospitality interiors · Serviced stays · Styling</p>
          <p>Cairo, Egypt · Guest-first design</p>
        </div>
        <h1 data-reveal="left">Stays with<br /><em>a soul.</em></h1>
        <div className={styles.heroMedia} data-reveal="right">
          <img src="/images/space-10.jpg" alt="Warm serviced apartment interior designed by Doors" />
          <p>
            We design serviced apartments that feel effortless to arrive in,
            beautiful to live in, and difficult to forget.
          </p>
        </div>
        <p className={styles.heroBadge} data-reveal="up">Designed to check in.<br />Made to stay with you.</p>
        <a className={styles.scrollCue} href="#work" data-reveal="up">Explore selected work <span>↓</span></a>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.sectionHead} data-reveal="up">
          <p className={styles.kicker}>Selected projects</p>
          <p>2024—2026</p>
        </div>
        {projects.map((project) => (
          <article className={styles.project} key={project.name}>
            <img className={styles.projectCover} src={project.cover} alt={`${project.name} — ${project.category}`} loading="lazy" data-reveal={Number(project.number) % 2 ? 'left' : 'right'} />
            <div className={styles.projectTitle} data-reveal={Number(project.number) % 2 ? 'right' : 'left'}>
              <span>{project.number}</span>
              <h2>{project.name}</h2>
              <p>{project.category}</p>
            </div>
            <details className={styles.projectDetails} data-reveal="up">
              <summary>View project <span>＋</span></summary>
              <div className={styles.detailCopy}>
                <p>{project.description}</p>
                <span>Concept, spatial planning, FF&amp;E, styling &amp; guest experience</span>
              </div>
              <div className={styles.gallery}>
                {project.gallery.map((image, index) => (
                  <img src={image} alt={`${project.name} detail ${index + 1}`} loading="lazy" key={image} />
                ))}
              </div>
            </details>
          </article>
        ))}
      </section>

      <section className={styles.about} id="about">
        <div className={styles.sectionHead} data-reveal="up">
          <p className={styles.kicker}>Who we are</p>
          <p>Hospitality design studio</p>
        </div>
        <div className={styles.aboutGrid}>
          <h2 data-reveal="left">Stays that feel<br />considered, <em>never generic.</em></h2>
          <div className={styles.aboutCopy} data-reveal="right">
            <p>
              Doors is a Cairo-based hospitality design studio creating serviced
              apartments, boutique stays, and guest-ready interiors with a strong
              sense of place.
            </p>
            <p>
              Our philosophy is simple: design for the first impression, the hundredth
              stay, and every practical moment in between. The result is expressive,
              durable, and comfortable by design.
            </p>
          </div>
        </div>
        <div className={styles.services}>
          {['Hospitality Interiors', 'Serviced Apartment Concepts', 'FF&E & Styling', 'Guest Experience Design'].map((service, index) => (
            <div key={service} data-reveal="up" data-delay={String(index * 80)}><span>0{index + 1}</span><p>{service}</p><span>↗</span></div>
          ))}
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div className={styles.contactIntro} data-reveal="left">
          <p className={styles.kicker}>Start a conversation</p>
          <h2>Have a stay<br />in mind?</h2>
          <a href="mailto:hello@doors.design">hello@doors.design ↗</a>
          <div className={styles.socials}>
            <a href="#work">Selected work</a>
            <span>Cairo, Egypt</span>
          </div>
        </div>
        <form className={styles.form} data-reveal="right">
          <label>Name<input type="text" name="name" placeholder="Your name" /></label>
          <label>Email or phone<input type="text" name="contact" placeholder="How can we reach you?" /></label>
          <label>Tell us about your project<textarea name="message" rows={4} placeholder="A few details about your space..." /></label>
          <button type="button">Send enquiry <span>↗</span></button>
          <small>Tell us the location, number of units, and your ideal opening date.</small>
        </form>
      </section>

      <footer className={styles.footer} data-reveal="up">
        <span>Doors Hospitality Design</span><span>© 2026</span><a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
