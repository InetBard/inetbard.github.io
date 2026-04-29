import { useEffect } from "react";
import avatar from './assets/images/pngtree-cartoon-character-hand-made-model-with-big-ears-png-image-7076952-96x96.png';
import portrait from './assets/images/project3.png';

import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { blogPosts, getPostBySlug } from "./data/posts";

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contacts", href: "/#contacts", isAnchor: true },
];

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(location.hash);

    if (element) {
      window.setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [location]);

  return (
    <div className="site-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <NavLink className="brand" to="/">
        <img
          src={avatar}
          alt="Avatar logo"
        />
        <span>AB</span>
      </NavLink>

      <nav className="nav">
        {navItems.map((item) =>
          item.isAnchor ? (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ) : (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ),
        )}
      </nav>

      <a
        className="button-primary"
        href="/cv/Full_Stack_Dev_Java_Alex_Bukhtiyarov.pdf"
        download="Alex_Bukhtiyarov_CV.pdf"
      >
        Download CV
      </a>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Fullstack Developer • Product Thinking • Architecture</p>
          <h1>
            Alex <span>Bukhtiyarov</span>
          </h1>
          <p className="hero-tagline">Brings ideas to life with code</p>
          <p className="hero-description">
            I design and build bold digital experiences with a clean engineering
            backbone, fast delivery mindset, and a taste for memorable interfaces.
          </p>

          <div className="hero-badges">
            <span>React Frontends</span>
            <span>Backend Systems</span>
            <span>Product Design</span>
          </div>

          <div className="hero-actions">
            <NavLink className="button-primary" to="/portfolio">
              Open Portfolio
            </NavLink>
            <a className="button-secondary" href="#contacts">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <img
              src={portrait}
              alt="Cyberpunk inspired portrait"
            />
          </div>
        </div>
      </section>

      <section className="section-grid" id="blog">
        <article className="info-panel wide-panel">
          <p className="panel-kicker">Approach</p>
          <h2>Preserving the concept, improving the experience</h2>
          <p>
            I build systems that work beyond demos — in real conditions. Focused
            on simplicity, reliability, and clean architecture, with attention
            to failure scenarios, security, and maintainability.
          </p>
        </article>

        <article className="info-panel">
          <p className="panel-kicker">Focus</p>
          <p>Enjoy solving problems, troubleshooting issues, and coming up with solutions in a timely manner.</p>
        </article>

       
      </section>

      <section className="contact-panel" id="contacts">
        <p className="panel-kicker">Contacts</p>
        <div className="contact-list">
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/alex-bukhtiyarov/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/alex-bukhtiyarov/
            </a>
          </p>
          <p>
            <strong>City:</strong> Calgary
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:inebard@gmail.com">inebard@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}

function PortfolioPage() {
  const projects = [
    {
      kicker: "Project 01",
      title: "FlavourWhizz",
      description:
        "FlavourWhizz is a food-focused digital product concept centered on discovery, flavor pairing, and a playful user experience. It is meant to make exploring dishes and combinations feel smart, personal, and visually engaging.",
      tags: ["Product Concept", "UX Direction", "Food Tech"],
      featured: true,
    },
    {
      kicker: "Project 02",
      title: "Menora ON",
      description:
        "A usage-based car insurance product for the Israeli market built around a mobile app and personalized kilometer packages. I worked on the backend logic that supported policy-related application flows behind the digital insurance experience.",
      tags: ["Backend Development", "Insurance", "Israel"],
    },
    {
      kicker: "Project 03",
      title: "TorLaKhatam",
      description:
        "A maintenance and enhancement project for an insurance agent request intake system built on IBM Domino. I worked with Java, JavaScript, @formula, HTML, CSS, and XPages to support ongoing business needs and extend the platform's functionality.",
      tags: ["IBM Domino", "Java", "Enterprise Systems"],
    },
    {
      kicker: "Project 04",
      title: "Mishpahug",
      description:
        "A custom website project for a private client focused on organizing family events. The work centered on building a practical, user-friendly web presence tailored to the client's event coordination needs.",
      tags: ["Client Project", "Web Development", "Family Events"],
    },
    {
      kicker: "Project 05",
      title: "Kazakhstan E-Document Systems",
      description:
        "Development and rollout of electronic document management systems at the national level in Kazakhstan. My role included development, implementation, technical and user documentation, and training for more than 5,000 end users using IBM Domino, Java, JavaScript, @formula, HTML, CSS, and XPages.",
      tags: ["GovTech", "IBM Domino", "5000+ Users"],
    },
  ];

  return (
    <section className="portfolio-page">
      <div className="portfolio-heading">
        <p className="eyebrow">Portfolio</p>
        <h1>Selected Work</h1>
        <p>
          A growing collection of products, interfaces, and experiments. For now,
          it highlights a mix of product, backend, enterprise, and public-sector work.
        </p>
      </div>

      <div className="portfolio-list">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project-card${project.featured ? " project-card-featured" : ""}`}
          >
            <div className="project-card-copy">
              <p className="panel-kicker">{project.kicker}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-preview">
              <div className="preview-screen">
                <div className="preview-glow" />
                <p>{project.title}</p>
                <span>{project.tags.join(" • ")}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogPage() {
  return (
    <section className="blog-page">
      <div className="portfolio-heading">
        <p className="eyebrow">Blog</p>
        <h1>Notes From Real Systems</h1>
        <p>
          Practical writing about architecture, backend design, reliability, and
          lessons learned from building software outside demo conditions.
        </p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <div className="blog-card-image">
              <img src={post.coverImage} alt={post.title} />
            </div>

            <div className="blog-card-body">
              <p className="panel-kicker">{post.category}</p>
              <h2>{post.title}</h2>
              <p className="blog-card-meta">
                {post.author} • {post.publishedAt} • {post.readTime}
              </p>
              <p>{post.excerpt}</p>
              <NavLink className="button-secondary" to={`/blog/${post.slug}`}>
                View Post
              </NavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="blog-post-page">
        <p className="panel-kicker">Blog</p>
        <h1>Post not found</h1>
        <p className="blog-post-intro">
          This article does not exist yet. You can add it in
          `src/data/posts.js`.
        </p>
      </section>
    );
  }

  return (
    <article className="blog-post-page">
      <p className="panel-kicker">{post.category}</p>
      <h1>{post.title}</h1>
      <p className="blog-post-meta">
        {post.author} • {post.publishedAt} • {post.readTime}
      </p>

      <div className="blog-post-hero">
        <img src={post.coverImage} alt={post.title} />
      </div>

      <div className="blog-post-content">
        {post.sections.map((section, index) => {
          if (section.type === "heading") {
            if (section.level === 3) {
              return <h3 key={`${section.content}-${index}`}>{section.content}</h3>;
            }

            return <h2 key={`${section.content}-${index}`}>{section.content}</h2>;
          }

          if (section.type === "paragraph") {
            return <p key={`${section.content}-${index}`}>{section.content}</p>;
          }

          if (section.type === "list") {
            return (
              <ul key={`list-${index}`}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }

          if (section.type === "code") {
            return (
              <pre key={`code-${index}`} className="code-block">
                <code>{section.content}</code>
              </pre>
            );
          }

          return null;
        })}
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Alex Bukhtiyarov. All rights reserved.</p>
    </footer>
  );
}

export default App;
