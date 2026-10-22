import { Link } from 'react-router'

function Home() {
  return (
    <div className="home-page">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">COMPUTER SCIENCE &amp; ENGINEERING</p>
          <h1>Hi, I’m Mukesh.</h1>
          <p className="hero-description">
            I’m a tech-minded student who enjoys turning ideas into things
            people can use. I’m especially interested in web design, Figma,
            and game development.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/about">
              A little about me
            </Link>
            <a
              className="text-link"
              href="mailto:mukeshbhoopalan@gmail.com"
            >
              Say hello
            </a>
          </div>
        </div>

        <aside className="contact-card" aria-label="Contact information">
          <div className="avatar" aria-hidden="true">MB</div>
          <p className="contact-name">Mukesh B</p>
          <a href="mailto:mukeshbhoopalan@gmail.com">
            mukeshbhoopalan@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-b-4b26122a4"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/MukeshB77" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </aside>
      </section>

      <section className="home-highlights" aria-labelledby="highlights-title">
        <div className="highlights-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I’VE BEEN UP TO</p>
            <h2 id="highlights-title">Learning by making</h2>
          </div>
          <Link className="text-link" to="/user">See projects and skills</Link>
        </div>

        <div className="highlights-grid">
          <article className="highlight-card">
            <p className="highlight-label">WEB</p>
            <h3>Planet 69</h3>
            <p>A game-shopping website built with HTML, CSS, and JavaScript.</p>
          </article>
          <article className="highlight-card">
            <p className="highlight-label">DESIGN</p>
            <h3>OpenSea concept</h3>
            <p>An NFT marketplace concept designed in Figma.</p>
          </article>
          <article className="highlight-card">
            <p className="highlight-label">GAME DEVELOPMENT</p>
            <h3>Evil Cube</h3>
            <p>A game project made with the Unity Engine.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
