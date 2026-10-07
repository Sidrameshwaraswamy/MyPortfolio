import "./App.css";

type Skill = {
  icon: string;
  title: string;
  items: string;
};

type Project = {
  name: string;
  tag: string;
  desc: string;
  stack: string[];
};

type Social = {
  name: string;
  sub: string;
  icon: string;
  href: string;
};

const skills: Skill[] = [
  {
    icon: "</>",
    title: "Backend Engineering",
    items:
      "Python · FastAPI · Java · Spring Boot · REST APIs · Microservices · Kafka",
  },
  {
    icon: "DB",
    title: "Frontend & Data",
    items:
      "React · TypeScript · PostgreSQL · MySQL · MongoDB · Tailwind CSS",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    items:
      "AWS · Docker · Kubernetes · GitHub Actions · CI/CD · Git",
  },
  {
    icon: "AI",
    title: "AI & Quality",
    items:
      "Generative AI · LLMs · Scikit-learn · PyTest · API Testing · Automation",
  },
];

const projects: Project[] = [
  {
    name: "Yathartha LIMS",
    tag: "Full-Stack · FastAPI · React",
    desc:
      "Calibration laboratory platform for job, sample, test and result workflows with environmental validations and certificate generation.",
    stack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "PyTest"],
  },
  {
    name: "SmartForecast",
    tag: "AI/ML · Forecasting",
    desc:
      "EV demand forecasting platform combining machine-learning and time-series models with interactive dashboards and containerized deployment.",
    stack: [
      "Python",
      "Random Forest",
      "ARIMA",
      "Flask",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    name: "Data Center BMS",
    tag: "Industrial IoT · Niagara",
    desc:
      "Engineering and commissioning work across multi-site data centers with BACnet/Modbus integration, alarms, histories, graphics and MQTT workflows.",
    stack: ["Niagara N4", "BACnet", "Modbus", "MQTT", "JACE"],
  },
  {
    name: "Banking Services",
    tag: "Backend · Java",
    desc:
      "Spring Boot banking application covering customers, accounts and transactions through clean REST endpoints and persistence layers.",
    stack: ["Java", "Spring Boot", "JPA", "Hibernate", "REST"],
  },
];

const socials: Social[] = [
  {
    name: "GitHub",
    sub: "View my code",
    icon: "GH",
    href: "https://github.com/Sidrameshwaraswamy",
  },
  {
    name: "LinkedIn",
    sub: "Connect with me",
    icon: "in",
    href: "https://www.linkedin.com/in/sidramappab/",
  },
  {
    name: "Email",
    sub: "Start a conversation",
    icon: "✉",
    href: "mailto:sidramappasiddu777@gmail.com",
  },
];

function App() {
  return (
    <div className="portfolio">
      {/* ================= NAVIGATION ================= */}
      <header className="floatingNav">
        <nav className="navLinks" aria-label="Main navigation">
          <a className="active" href="#home">
            Home
          </a>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero heroNew">
          <div className="heroGlow heroGlowOne" />
          <div className="heroGlow heroGlowTwo" />

          <div className="profileWrapper">
            <img
              className="profileImage"
              src="/profile.jpg"
              alt="Sidramappa B"
            />
          </div>

          <div className="roleBadge">
            <span className="dot" />
            <span>Software Engineer · Full-Stack · AI</span>
          </div>

          <h1 className="heroTitle">
            Hi, I'm{" "}
            <span className="gradientName">
              Sidramappa
            </span>

            <span className="wave" aria-hidden="true">
              👋
            </span>
          </h1>

          <h2 className="heroSubtitle">
            I build software that solves real-world problems.
          </h2>

          <p className="heroDescription">
            Software Engineer with nearly 2 years of experience building
            scalable web applications, REST APIs and intelligent products using{" "}
            <strong>
              Python, Java, FastAPI, Spring Boot, React and PostgreSQL.
            </strong>
          </p>

          <div className="heroButtons">
            <a className="primary heroButton" href="#projects">
              Explore my work
              <span aria-hidden="true">→</span>
            </a>

            <a
              className="secondary heroButton"
              href="/Sidramappa_Resume.pdf"
              download
            >
              <span aria-hidden="true">↓</span>
              Resume
            </a>
          </div>

          <div className="quick heroQuick">
            <span>📍 Bengaluru, India</span>
            <span>💼 Software Engineer</span>
            <span className="available">
              <i />
              Open to opportunities
            </span>
          </div>

          <a
            className="scrollDown"
            href="#about"
            aria-label="Scroll to about section"
          >
            <span>Scroll</span>
            <span className="scrollArrow">↓</span>
          </a>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="kicker">ABOUT ME</div>

          <div className="split">
            <h2>
              Engineering reliable products,
              <br />
              from idea to deployment.
            </h2>

            <div className="aboutCopy">
              <p>
                My work spans backend services, modern frontend applications,
                relational databases, cloud deployment and AI-assisted product
                development.
              </p>

              <p>
                I enjoy turning business requirements into clean, maintainable
                software and taking ownership across development, testing,
                debugging and deployment.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section">
          <div className="kicker">WHAT I WORK WITH</div>

          <h2>Technical toolkit</h2>

          <div className="skillGrid">
            {skills.map((skill) => (
              <article
                className="skill hoverJump"
                key={skill.title}
              >
                <div className="icon" aria-hidden="true">
                  {skill.icon}
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.items}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section">
          <div className="sectionHead">
            <div>
              <div className="kicker">
                SELECTED WORK
              </div>

              <h2>Projects I've built</h2>
            </div>

            <span className="muted">
              Real engineering. Practical impact.
            </span>
          </div>

          <div className="projectGrid">
            {projects.map((project, index) => (
              <article
                className="project hoverJump"
                key={project.name}
              >
                <div className="projectTop">
                  <div className="projectNum">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="tag">
                    {project.tag}
                  </div>
                </div>

                <h3>{project.name}</h3>

                <p>{project.desc}</p>

                <div className="chips">
                  {project.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section">
          <div className="kicker">
            EXPERIENCE
          </div>

          <h2>Where I've contributed</h2>

          <article className="experience hoverJump">
            <div className="timelineDot" />

            <div className="expDate">
              2024 — 2026
            </div>

            <div className="experienceContent">
              <h3>Software Engineer</h3>

              <h4>
                AIML SolutionsNow LLP · Bengaluru
              </h4>

              <p>
                Built and tested full-stack software across LIMS, forecasting
                and industrial/data-center systems.
              </p>

              <p>
                Developed REST APIs, React interfaces, PostgreSQL data models,
                validations and automated tests while supporting deployment and
                production workflows.
              </p>

              <div className="chips">
                <span>Python</span>
                <span>FastAPI</span>
                <span>Java</span>
                <span>React</span>
                <span>PostgreSQL</span>
                <span>PyTest</span>
              </div>
            </div>
          </article>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="section contact"
        >
          <div className="kicker">
            LET'S CONNECT
          </div>

          <h2>
            Have an opportunity or
            <br />
            <span className="gradientName">
              an interesting problem?
            </span>
          </h2>

          <p className="contactDescription">
            I'm interested in Software Engineer, Full-Stack, Backend and
            AI-augmented engineering opportunities.
          </p>

          <div className="socialGrid">
            {socials.map((social) => {
              const isExternal =
                social.href.startsWith("http");

              return (
                <a
                  className="socialCard hoverJump"
                  href={social.href}
                  target={
                    isExternal
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    isExternal
                      ? "noopener noreferrer"
                      : undefined
                  }
                  key={social.name}
                >
                  <span
                    className="socialIcon"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </span>

                  <div>
                    <b>{social.name}</b>
                    <span>{social.sub}</span>
                  </div>

                  <span
                    className="externalArrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <span>© 2026 Sidramappa B.</span>

        <span>
          Designed &amp; built with React + TypeScript.
        </span>
      </footer>
    </div>
  );
}

export default App;