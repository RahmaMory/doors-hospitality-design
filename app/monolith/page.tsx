import type { Metadata } from 'next';
import styles from './monolith.module.css';

export const metadata: Metadata = {
  title: 'Monolith — Doors',
  description: 'A bold, architectural website direction for Doors hospitality design studio.',
};

const projects = [
  {
    code: 'DRS—021',
    name: 'Pyramids / Stay',
    category: 'Hospitality interior',
    year: '2026',
    cover: '/images/space-03.jpg',
    gallery: ['/images/space-07.jpg', '/images/space-12.jpg'],
    description: 'A serviced residence that frames the view and turns shadow, timber, and natural light into a memorable guest ritual.',
  },
  {
    code: 'DRS—018',
    name: 'Frame / Suite',
    category: 'Serviced apartment',
    year: '2025',
    cover: '/images/space-04.jpg',
    gallery: ['/images/space-08.jpg', '/images/space-11.jpg'],
    description: 'A flexible short-stay interior reduced to strong planes and durable materials, then softened by art, light, and tactile detail.',
  },
  {
    code: 'DRS—015',
    name: 'Courtyard No. 5',
    category: 'Boutique stay',
    year: '2024',
    cover: '/images/space-06.jpg',
    gallery: ['/images/space-01.jpg', '/images/space-10.jpg'],
    description: 'A boutique guest stay organized around shade and gathering, where contemporary volumes meet a warm, grounded palette.',
  },
];

export default function MonolithPage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.nav}>
        <a className={styles.brand} href="#top">DOORS<small>Hospitality design</small></a>
        <nav aria-label="Monolith navigation">
          <a href="#projects">Projects</a><a href="#practice">Practice</a><a href="#contact">Contact</a>
        </nav>
        <a href="/" className={styles.back}>03 directions <span>↗</span></a>
      </header>

      <section className={styles.hero}>
        <img src="/images/space-03.jpg" alt="Black contemporary house set among mature trees" />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy} data-reveal="left">
          <p>Serviced apartments / Hotel stays / Guest experience</p>
          <h1>Form follows<br /><span>feeling.</span></h1>
          <div className={styles.heroFoot}>
            <p>We turn hospitality briefs into distinctive, durable spaces guests want to return to.</p>
            <a href="#projects">Selected work <span>↓</span></a>
          </div>
        </div>
        <div className={styles.heroIndex} data-reveal="right"><span>GUEST</span><strong>01</strong><span>FIRST</span></div>
      </section>

      <section className={styles.projects} id="projects">
        <header className={styles.sectionTitle} data-reveal="up">
          <p>Selected stays</p><h2>Built ideas.</h2><span>2024—26</span>
        </header>
        {projects.map((project, index) => (
          <article className={styles.project} key={project.code}>
            <div className={styles.projectInfo} data-reveal={index % 2 ? 'right' : 'left'}>
              <span>{project.code}</span>
              <p>{project.category} / {project.year}</p>
              <h3>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
            <img className={styles.projectImage} src={project.cover} alt={`${project.name} project`} loading="lazy" data-reveal={index % 2 ? 'left' : 'right'} />
            <details className={styles.projectDetails}>
              <summary><span>Open case study</span><b>{String(index + 1).padStart(2, '0')} ↗</b></summary>
              <div className={styles.projectGallery}>
                {project.gallery.map((image, galleryIndex) => (
                  <figure key={image}>
                    <img src={image} alt={`${project.name} detail ${galleryIndex + 1}`} loading="lazy" />
                    <figcaption>{project.code} / Detail {galleryIndex + 1}</figcaption>
                  </figure>
                ))}
              </div>
            </details>
          </article>
        ))}
      </section>

      <section className={styles.practice} id="practice">
        <div className={styles.practiceLead} data-reveal="left">
          <p>Our practice</p>
          <h2>We design the<br />space between<br /><span>arrival & return.</span></h2>
        </div>
        <div className={styles.practiceBody} data-reveal="right">
          <p className={styles.statement}>
            Doors is a hospitality design studio focused on serviced apartments,
            boutique stays, and guest-ready interiors. We begin with the guest journey,
            then make every spatial and material decision work harder.
          </p>
          <div className={styles.disciplines}>
            {[
              ['01', 'Hospitality Concepts', 'Positioning to spatial story'],
              ['02', 'Interior Design', 'Serviced apartments & suites'],
              ['03', 'FF&E', 'Furniture, lighting & bespoke details'],
              ['04', 'Styling', 'Guest-ready finishing & art direction'],
            ].map(([number, name, note], index) => (
              <div key={number} data-reveal="up" data-delay={String(index * 70)}><span>{number}</span><strong>{name}</strong><p>{note}</p></div>
            ))}
          </div>
          <div className={styles.metrics} data-reveal="up">
            <div><strong>01</strong><span>Guest-first thinking</span></div>
            <div><strong>02</strong><span>Detail-led delivery</span></div>
            <div><strong>03</strong><span>Built for real stays</span></div>
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <header data-reveal="up"><p>New business / collaborations</p><span>Cairo · Egypt</span></header>
        <div className={styles.contactGrid}>
          <div data-reveal="left">
            <h2>Let’s make<br />a stay <em>iconic.</em></h2>
            <a className={styles.email} href="mailto:hello@doors.design">hello@doors.design ↗</a>
          </div>
          <form className={styles.form} data-reveal="right">
            <label><span>01 / Name</span><input name="name" placeholder="Your name" /></label>
            <label><span>02 / Email or phone</span><input name="contact" placeholder="Your contact" /></label>
            <label><span>03 / Project</span><textarea name="message" placeholder="Tell us about the brief" rows={3} /></label>
            <button type="button">Submit enquiry <span>↗</span></button>
            <small>Share the location, number of units, and target opening date.</small>
          </form>
        </div>
      </section>

      <footer className={styles.footer} data-reveal="up">
        <strong>DOORS®</strong>
        <div><a href="#projects">Projects</a><a href="mailto:hello@doors.design">Email</a></div>
        <p>© 2026 / All rights reserved</p>
        <a href="#top">Top ↑</a>
      </footer>
    </main>
  );
}
