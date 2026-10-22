const skillGroups = [
  { title: 'Programming & web', skills: ['Python', 'C++', 'HTML', 'CSS'] },
  { title: 'Design & development', skills: ['Figma', 'Unity', 'Unreal Engine'] },
  { title: 'Working with others', skills: ['Team management', 'Presentations', 'GitHub'] },
]

const projects = [
  {
    name: 'Planet 69',
    type: 'Web development',
    description:
      'A website for finding games at lower prices, built with HTML, CSS, and JavaScript.',
  },
  {
    name: 'OpenSea marketplace concept',
    type: 'UI design',
    description: 'An NFT marketplace website concept designed in Figma.',
  },
  {
    name: 'Evil Cube',
    type: 'Game development',
    description: 'A game project created in the Unity Engine.',
  },
  {
    name: 'Phishing attack recreation',
    type: 'Security project',
    description: 'Contributed to recreating phishing attacks.',
  },
]

const certifications = [
  'HackerRank: Python for Problem Solving and Advanced Python',
  'Pearson MePro: Level 9',
  'MATLAB: Onramp, Deep Learning, Computer Vision, Object-Oriented Onramp, and Electrical Circuits',
  'Infosys Springboard: Computer Architecture, Design and Analysis of Algorithms, and UML Diagrams',
  'Google Cloud Skills Boost: Introduction to Generative AI Learning Path',
  'NPTEL: Programming in Java',
]

function User() {
  return (
    <div className="content-page">
      <section className="intro-section">
        <p className="eyebrow">THINGS I’VE LEARNED AND MADE</p>
        <h1>Skills &amp; projects</h1>
        <p className="lead">
          A mix of coding, design, and game development—plus a few projects
          where I’ve had the chance to try those skills out.
        </p>
      </section>

      <section className="resume-section" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2 id="skills-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">A FEW PERSONAL PROJECTS</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-item" key={project.name}>
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="certifications-title">
        <div className="section-heading">
          <p className="eyebrow">COURSES &amp; CERTIFICATIONS</p>
          <h2 id="certifications-title">Certifications</h2>
        </div>
        <ul className="certification-list">
          {certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default User
