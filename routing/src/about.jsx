function About() {
  return (
    <div className="content-page">
      <section className="intro-section">
        <p className="eyebrow">ABOUT ME</p>
        <h1>Curious, creative,<br />and always learning.</h1>
        <p className="lead">
          I’m a Computer Science and Engineering student with a steady academic
          record and a real interest in technology. I like working through
          problems, designing for the web, and learning how games are made.
          I’m also comfortable working with a team and helping keep a project
          moving.
        </p>
      </section>

      <section className="education-section" aria-labelledby="education-title">
        <div className="section-heading">
          <p className="eyebrow">WHERE I’VE STUDIED</p>
          <h2 id="education-title">Education</h2>
        </div>
        <div className="education-list">
          <article className="education-item">
            <div>
              <h3>Computer Science and Engineering</h3>
              <p>SA Engineering College · 2024–present</p>
              <p>CGPA 9.0 through the 4th semester</p>
            </div>
          </article>
          <article className="education-item">
            <div>
              <h3>Higher Secondary Education</h3>
              <p>SMS Vimal Matric Hr. Sec. School</p>
              <p>Biology and Mathematics</p>
            </div>
          </article>
        </div>
      </section>

      <section className="interests-section" aria-labelledby="interests-title">
        <div className="section-heading">
          <p className="eyebrow">OUTSIDE THE CLASSROOM</p>
          <h2 id="interests-title">A few things I enjoy</h2>
        </div>
        <ul className="interest-list">
          <li>Cricket</li>
          <li>Gym</li>
          <li>Drawing</li>
          <li>Games</li>
          <li>Watching shows</li>
        </ul>
      </section>
    </div>
  )
}

export default About
