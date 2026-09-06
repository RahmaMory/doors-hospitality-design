import type { Metadata } from 'next';
import styles from './canvas.module.css';

export const metadata: Metadata = {
  title: 'Living Canvas — Doors',
  description: 'A playful, artistic website direction for Doors hospitality design studio.',
};

const projects = [
  {
    name: 'Soft Check-In',
    category: 'Serviced apartment · Giza',
    color: 'apricot',
    cover: '/images/space-10.jpg',
    gallery: ['/images/space-02.jpg', '/images/space-01.jpg'],
    description: 'A sun-washed guest apartment layered with woven pieces, warm timber, and intuitive details that make settling in feel instant.',
  },
  {
    name: 'The Blue Suite',
    category: 'Styling & FF&E · Cairo',
    color: 'blue',
    cover: '/images/space-09.jpg',
    gallery: ['/images/space-11.jpg', '/images/space-05.jpg'],
    description: 'A playful hospitality study in color, symmetry, and the small details that make a temporary stay feel unmistakably personal.',
  },
  {
    name: 'Open Stay',
    category: 'Boutique hospitality · Cairo',
    color: 'green',
    cover: '/images/space-06.jpg',
    gallery: ['/images/space-07.jpg', '/images/space-03.jpg'],
    description: 'Indoor and outdoor rooms flow into one another, giving guests space to arrive, retreat, work, and gather.',
  },
  {
    name: 'Line & Light Residence',
    category: 'Serviced living · New Cairo',
    color: 'sand',
    cover: '/images/space-12.jpg',
    gallery: ['/images/space-04.jpg', '/images/space-08.jpg'],
    description: 'A precise, gallery-like serviced residence made welcoming through daylight, timber grain, art, and generous proportions.',
  },
];

export default function CanvasPage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.nav} data-reveal="down">
        <a href="#top" className={styles.brand}>doors<span>✦</span></a>
        <nav aria-label="Living Canvas navigation">
          <a href="#work">Work</a><a href="#studio">Studio</a><a href="#hello">Say hello</a>
        </nav>
        <a href="/" className={styles.all}>All directions ↗</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText} data-reveal="left">
          <p>Hospitality design studio · Cairo</p>
          <h1>Good stays<br />make every trip<br /><em>more alive.</em></h1>
          <a href="#work">Come inside <span>↓</span></a>
        </div>
        <div className={styles.heroCollage} data-reveal="right">
          <div className={styles.sun} aria-hidden="true" />
          <img className={styles.heroMain} src="/images/space-02.jpg" alt="Bright warm living room filled with plants and art" />
          <img className={styles.heroDetail} src="/images/space-10.jpg" alt="Textural interior detail" />
          <div className={styles.heroStamp}><span>Made for memorable stays</span><b>CAI<br />EGY</b></div>
        </div>
        <p className={styles.marginNote} data-reveal="down">Serviced stays / Suites / Styling / Guest stories</p>
      </section>

      <section className={styles.marquee} aria-label="Studio philosophy" data-reveal="up">
        <div className={styles.marqueeTrack}>
          <p>Guest-first spaces <span>✦</span> Everyday wonder <span>✦</span> Made to return to <span>✦</span></p>
          <p aria-hidden="true">Guest-first spaces <span>✦</span> Everyday wonder <span>✦</span> Made to return to <span>✦</span></p>
        </div>
      </section>

      <section className={styles.work} id="work">
        <header className={styles.sectionHeader} data-reveal="up">
          <div><span>01</span><p>Selected work</p></div>
          <h2>A few stays<br />we <em>love.</em></h2>
          <p>Every project is a conversation between the guest, the place, and the story worth returning to.</p>
        </header>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <article className={`${styles.project} ${styles[project.color]}`} key={project.name} data-reveal={index % 2 ? 'right' : 'left'} data-delay={String((index % 2) * 90)}>
              <div className={styles.imageFrame}>
                <img src={project.cover} alt={`${project.name} — ${project.category}`} loading="lazy" />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className={styles.cardTitle}><div><h3>{project.name}</h3><p>{project.category}</p></div><span>↗</span></div>
              <details className={styles.details}>
                <summary>Peek into the project <span>＋</span></summary>
                <p>{project.description}</p>
                <div>
                  {project.gallery.map((image, galleryIndex) => (
                    <img src={image} alt={`${project.name} view ${galleryIndex + 1}`} loading="lazy" key={image} />
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.studio} id="studio">
        <div className={styles.studioArt} data-reveal="left">
          <img src="/images/space-05.jpg" alt="A calm, layered hospitality interior by Doors" loading="lazy" />
          <span className={styles.blueDot} aria-hidden="true" />
          <p>Guest<br /><strong>first</strong></p>
        </div>
        <div className={styles.studioCopy} data-reveal="right">
          <span className={styles.sectionNumber}>02 / The studio</span>
          <h2>Serious about stays.<br /><em>Curious about every detail.</em></h2>
          <p>
            Doors is a Cairo-based hospitality design studio shaping serviced apartments,
            boutique suites, and guest-ready interiors. We mix local character with a
            contemporary eye, creating stays that feel relaxed, expressive, and easy to run.
          </p>
          <blockquote>“A memorable stay begins before the guest puts down their key.”</blockquote>
          <div className={styles.servicePills}>
            {['Hospitality concepts', 'Interiors', 'FF&E', 'Styling', 'Guest experience'].map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
      </section>

      <section className={styles.hello} id="hello">
        <div className={styles.helloLead} data-reveal="left">
          <span>03 / Let’s talk</span>
          <h2>There’s a new<br />stay to <em>shape.</em></h2>
          <p>Tell us what you’re imagining. We’d love to hear about the location, the guests, and the feeling you want them to take home.</p>
          <div><a href="mailto:hello@doors.design">hello@doors.design</a><a href="#work">Selected work ↗</a></div>
        </div>
        <form className={styles.form} data-reveal="right">
          <label>Hello, my name is<input name="name" placeholder="Your name" /></label>
          <label>You can reach me at<input name="contact" placeholder="Email or phone" /></label>
          <label>I’d love to talk about<textarea name="message" placeholder="Your project, idea, or space..." rows={3} /></label>
          <button type="button">Send a note <span>↗</span></button>
          <small>We usually reply within two business days.</small>
        </form>
      </section>

    </main>
  );
}
