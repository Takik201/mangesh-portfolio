import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Rocket,
  Send,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Store,
  Terminal,
  Users,
  X,
  Zap
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const skillGroups = [
  {
    title: "Backend Engineering",
    icon: ServerCog,
    accent: "text-mint",
    items: ["C#", ".NET Core", "ASP.NET Core MVC", "Web API", "Entity Framework", "Microservices"]
  },
  {
    title: "Frontend Development",
    icon: MonitorSmartphone,
    accent: "text-aqua",
    items: ["ReactJS", "Angular", "Blazor", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Data & Cloud",
    icon: Database,
    accent: "text-saffron",
    items: ["SQL Server", "MySQL", "Azure", "AWS", "Docker", "CI/CD"]
  },
  {
    title: "Delivery & Tools",
    icon: Terminal,
    accent: "text-mint",
    items: ["Git", "GitHub", "Visual Studio", "VS Code", "Jira", "Agile Scrum"]
  }
];

const projects = [
  {
    title: "Global Schoolwear Ecommerce",
    role: "Amla Commerce",
    image: "/assets/project-global-schoolwear.png",
    description:
      "Currently contributing to the Global Schoolwear ecommerce project, a school-uniform shopping platform with school discovery, catalog browsing, and customer purchase flows.",
    stack: ["ReactJS", ".NET", "Ecommerce", "Responsive UI", "Catalog UX"],
    live: "https://www.globalschoolwear.com/",
    github: "#"
  },
  {
    title: "Institute Management System",
    role: "Extra Bits Software Solutions",
    image: "/assets/project-ims.png",
    description:
      "A scalable ASP.NET Core Web API platform for government vendor and training-center tracking under Skill India, with dashboards and automated SQL Server reporting.",
    stack: ["ASP.NET Core", "Angular", "SQL Server", "Azure DevOps", "CI/CD"],
    live: "https://sgrsgroup.org/",
    github: "#"
  },
  {
    title: "Interactive Learning Platform",
    role: "GRT Solutions",
    image: "/assets/project-edtech.png",
    description:
      "A cloud-based EdTech platform with modular APIs, role-based access, live sessions, assessments, quizzes, and React + TypeScript learner dashboards.",
    stack: [".NET Core", "React", "TypeScript", "SignalR", "SQL Server"],
    live: "#",
    github: "#"
  }
];

const experiences = [
  {
    company: "Amla Commerce",
    role: "Full Stack Developer",
    period: "Dec 2025 - Present",
    location: "Pune, IN",
    summary:
      "Working on Global Schoolwear, an ecommerce platform focused on school-uniform shopping experiences.",
    points: [
      "Contributing to storefront workflows, responsive UI improvements, catalog discovery, and ecommerce feature delivery.",
      "Collaborating across product and engineering to keep the shopping experience clean, scalable, and maintainable."
    ]
  },
  {
    company: "Extra Bits Software Solutions Pvt. Ltd.",
    role: "Software Developer",
    period: "Feb 2025 - Dec 2025",
    location: "Pune, IN",
    summary:
      "Built enterprise-scale solutions for government and private clients, including an Institute Management System for Skill India vendors.",
    points: [
      "Launched ASP.NET Core Web API architecture for real-time vendor and training-center tracking, reducing data sync delays by 40%.",
      "Improved reporting accuracy by 60% through automated data ingestion pipelines into SQL Server.",
      "Enhanced Angular UI responsiveness by 35% and reduced deployment time to under 10 minutes with Azure DevOps CI/CD."
    ]
  },
  {
    company: "GRT Solutions",
    role: "Full Stack Developer",
    period: "Jun 2022 - Feb 2025",
    location: "Pune, IN",
    summary:
      "Delivered e-learning and enterprise applications with full stack ownership across backend APIs and frontend dashboards.",
    points: [
      "Built a modular .NET Core Web API backend for courses, assessments, live sessions, and role-based access.",
      "Increased learner engagement by 25% with real-time quizzes, polls, and SignalR assessment logic.",
      "Reduced learner dashboard load time by 40% with a React + TypeScript interface and optimized SQL Server workflows."
    ]
  }
];

const credentials = [
  {
    title: "B.Sc. in Computer Science",
    detail: "BAMU University, Beed, IN",
    meta: "65.46%",
    icon: GraduationCap
  },
  {
    title: "Cloud & DevOps Practice",
    detail: "Azure, AWS, Docker, CI/CD",
    meta: "Production delivery",
    icon: Cloud
  },
  {
    title: "API & Microservices Delivery",
    detail: "REST API design, ASP.NET Core, SQL systems",
    meta: "Enterprise apps",
    icon: ShieldCheck
  }
];

const testimonials = [
  {
    quote:
      "Mangesh is a practical full stack developer who understands both backend reliability and frontend user experience.",
    name: "Project Lead",
    role: "Enterprise Software Team"
  },
  {
    quote:
      "He works with ownership, communicates clearly, and keeps improving the implementation until it is useful in production.",
    name: "Product Collaborator",
    role: "Agile Delivery"
  },
  {
    quote:
      "His mix of .NET, SQL, React, Angular, and deployment knowledge makes him strong across the whole delivery flow.",
    name: "Engineering Teammate",
    role: "Full Stack Team"
  }
];

const highlights = [
  { label: "Years experience", value: "3+" },
  { label: "Deployment time", value: "<10m" },
  { label: "Reporting accuracy", value: "+60%" },
  { label: "Load-time gains", value: "+40%" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    document.body.classList.toggle("nav-locked", menuOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Thanks, your message placeholder is ready to connect to a backend or email service.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-frost">
      <div className="mesh-grid pointer-events-none fixed inset-0 z-0" />
      <Header active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <Contact formStatus={formStatus} onSubmit={handleSubmit} />
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-ink/80">
        <div className="section-shell flex flex-col gap-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {currentYear} Mangesh Takik. Built with ReactJS and Tailwind CSS.</p>
          <a className="font-bold text-mint transition hover:text-aqua" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

function Header({ active, menuOpen, setMenuOpen }) {
  return (
    <header id="top" className="sticky top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-2xl">
      <nav className="section-shell flex h-[72px] items-center justify-between gap-4" aria-label="Primary navigation">
        <a className="flex items-center gap-3 font-black" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-mint/35 bg-mint/12 font-mono text-sm text-mint shadow-glow">
            MT
          </span>
          <span className="hidden sm:inline">Mangesh Takik</span>
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/6 text-frost md:hidden"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          className={`fixed left-4 right-4 top-20 grid gap-2 rounded-lg border border-white/12 bg-night/96 p-3 shadow-panel transition md:static md:flex md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100"
          }`}
        >
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={item.href}
                className={`rounded-lg px-4 py-3 text-sm font-bold transition md:py-2 ${
                  isActive ? "bg-white/10 text-frost" : "text-slate-300 hover:bg-white/8 hover:text-frost"
                }`}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="section-shell grid min-h-[calc(90svh-72px)] items-center gap-7 pb-8 pt-7 sm:gap-10 sm:pb-12 sm:pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-16">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-4 py-2 text-sm font-extrabold text-mint">
          <Sparkles size={16} />
          Full Stack Developer in Pune
        </div>
        <h1 className="max-w-4xl text-balance text-5xl font-black leading-[1.02] text-frost sm:text-6xl lg:text-7xl">
          Mangesh Takik
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:hidden">
          I build scalable .NET + React applications. Currently at Amla Commerce on Global Schoolwear.
        </p>
        <p className="mt-6 hidden max-w-2xl text-lg leading-8 text-slate-300 sm:block sm:text-xl">
          I build secure, scalable web applications with .NET Core, ReactJS, Angular, SQL Server, Azure, and clean API design.
          Currently working at Amla Commerce on the Global Schoolwear ecommerce platform.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-mint px-4 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#47f0bc] sm:px-5 sm:text-base"
            href="#projects"
          >
            <Layers3 size={18} />
            View Projects
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/12 bg-white/7 px-4 text-sm font-black text-frost transition hover:-translate-y-0.5 hover:border-aqua/45 hover:bg-aqua/10 sm:px-5 sm:text-base"
            href="#contact"
          >
            <Send size={18} />
            Contact Me
          </a>
          <a
            className="hidden min-h-12 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/7 px-5 font-black text-frost transition hover:-translate-y-0.5 hover:border-saffron/45 hover:bg-saffron/10 sm:inline-flex"
            href="/assets/mangesh-takik-resume.pdf"
            download
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        <div className="mt-9 hidden grid-cols-2 gap-3 sm:grid sm:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="quiet-panel rounded-lg p-4">
              <p className="font-mono text-2xl font-black text-frost">{item.value}</p>
              <p className="mt-1 text-xs font-bold text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[340px] lg:ml-auto lg:mr-0 lg:max-w-[430px]">
        <div className="glass reveal-card rounded-lg p-3 shadow-panel">
          <img
            className="aspect-[5/6] w-full rounded-lg object-cover"
            src="/assets/profile-image.png"
            alt="Stylized placeholder portrait for Mangesh Takik"
          />
        </div>
        <div className="absolute -bottom-5 left-4 right-4 rounded-lg border border-white/12 bg-ink/90 p-4 shadow-panel backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase text-mint">Mangesh Takik</p>
              <p className="mt-1 font-extrabold">Software Engineer</p>
            </div>
            <BriefcaseBusiness  className="text-saffron" size={30} />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24" id="about">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-start">
        <div>
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">A full stack developer who likes clean systems and calm delivery.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            I am Mangesh Takik, a Full Stack Developer from Pune with 3+ years of experience building scalable applications
            across .NET Core, C#, ASP.NET Core Web API, ReactJS, Angular, SQL Server, Azure, and CI/CD workflows.
          </p>
          <p>
            My work has covered ecommerce, government vendor management, and cloud-based EdTech systems, where I care about
            reliable APIs, responsive UI, clear reporting, and maintainable architecture.
          </p>
          <p>
            I enjoy learning quickly, solving tricky implementation problems, and turning business requirements into software
            that teams can actually ship and support.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell section-pad" id="skills">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">A stack built for APIs, dashboards, ecommerce, and deployment.</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.title} className="glass reveal-card rounded-lg p-6">
              <div className={`mb-5 grid h-12 w-12 place-items-center rounded-lg bg-white/8 ${group.accent}`}>
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-black">{group.title}</h3>
              <ul className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-300">
                    <CheckCircle2 className="mt-0.5 flex-none text-mint" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-shell section-pad" id="projects">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Selected work with real delivery impact.</h2>
        </div>
        <a className="inline-flex items-center gap-2 font-black text-mint transition hover:text-aqua" href="#contact">
          Work with me <ArrowRight size={18} />
        </a>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="glass reveal-card overflow-hidden rounded-lg">
            <img className="aspect-[16/10] w-full object-cover" src={project.image} alt={`${project.title} screenshot`} />
            <div className="p-6">
              <p className="text-sm font-black text-mint">{project.role}</p>
              <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs font-extrabold text-mint">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-black">
                <a className="inline-flex items-center gap-2 text-slate-200 transition hover:text-mint" href={project.github} target="_blank" rel="noreferrer">
                  <Code2 size={17} />
                  GitHub
                </a>
                <a className="inline-flex items-center gap-2 text-slate-200 transition hover:text-aqua" href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell section-pad" id="experience">
      <p className="section-kicker">Work Experience</p>
      <h2 className="section-title">From enterprise systems to ecommerce storefronts.</h2>
      <div className="timeline-line relative mt-10 grid gap-7 pl-8">
        {experiences.map((job) => (
          <article key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -left-[2.04rem] top-6 h-5 w-5 rounded-full border-4 border-ink bg-mint shadow-glow" />
            <div className="glass rounded-lg p-6">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-2xl font-black">{job.role}</h3>
                  <p className="mt-1 font-extrabold text-mint">{job.company}</p>
                </div>
                <div className="grid gap-2 text-sm font-bold text-slate-300 sm:grid-cols-2 lg:text-right">
                  <span className="inline-flex items-center gap-2 lg:justify-end">
                    <CalendarDays size={16} /> {job.period}
                  </span>
                  <span className="inline-flex items-center gap-2 lg:justify-end">
                    <MapPin size={16} /> {job.location}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-slate-300">{job.summary}</p>
              <ul className="mt-5 grid gap-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <Zap className="mt-1 flex-none text-saffron" size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-shell section-pad" id="education">
      <p className="section-kicker">Education & Certifications</p>
      <h2 className="section-title">Computer science foundation with practical cloud and API delivery.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {credentials.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="glass reveal-card rounded-lg p-6">
              <Icon className="text-mint" size={32} />
              <h3 className="mt-5 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
              <p className="mt-4 inline-flex rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-xs font-black text-saffron">
                {item.meta}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-shell section-pad" id="testimonials">
      <p className="section-kicker">Testimonials</p>
      <h2 className="section-title">Placeholder quotes you can replace with real recommendations.</h2>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.quote} className="glass reveal-card rounded-lg p-6">
            <BadgeCheck className="text-mint" size={28} />
            <blockquote className="mt-5 text-lg font-semibold leading-8 text-slate-200">"{item.quote}"</blockquote>
            <figcaption className="mt-8">
              <strong className="block text-frost">{item.name}</strong>
              <span className="text-sm text-slate-400">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact({ formStatus, onSubmit }) {
  return (
    <section className="section-shell section-pad" id="contact">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title">Have a role, project, or product idea? Let us talk.</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
        <form className="glass rounded-lg p-6" onSubmit={onSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black">
              Name
              <input className="min-h-12 rounded-lg border border-white/12 bg-ink/75 px-4 text-slate-100 outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10" name="name" placeholder="Your name" required />
            </label>
            <label className="grid gap-2 text-sm font-black">
              Email
              <input className="min-h-12 rounded-lg border border-white/12 bg-ink/75 px-4 text-slate-100 outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10" name="email" type="email" placeholder="you@example.com" required />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-black">
            Message
            <textarea className="min-h-40 resize-y rounded-lg border border-white/12 bg-ink/75 px-4 py-3 text-slate-100 outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10" name="message" placeholder="Tell me about your project or opportunity" required />
          </label>
          <button className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-mint px-5 font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#47f0bc]" type="submit">
            <Mail size={18} />
            Send Message
          </button>
          <p className="mt-4 min-h-6 text-sm font-bold text-saffron" role="status" aria-live="polite">
            {formStatus}
          </p>
        </form>

        <aside className="glass rounded-lg p-6">
          <h3 className="text-2xl font-black">Mangesh Takik</h3>
          <p className="mt-3 text-slate-300">Pune, India</p>
          <div className="mt-6 grid gap-3">
            <a className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 px-4 py-3 font-bold text-slate-200 transition hover:border-mint/40 hover:text-mint" href="mailto:mangeshtakik09@gmail.com">
              <Mail size={18} />
              mangeshtakik2001@gmail.com
            </a>
            <a className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 px-4 py-3 font-bold text-slate-200 transition hover:border-aqua/40 hover:text-aqua" href="tel:+919545750023">
              <Phone size={18} />
              +91 9545750023
            </a>
            <a className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 px-4 py-3 font-bold text-slate-200 transition hover:border-saffron/40 hover:text-saffron" href="https://www.linkedin.com/in/mangesh-takik-427073217/" target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={18} />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 px-4 py-3 font-bold text-slate-200 transition hover:border-mint/40 hover:text-mint" href="#" target="_blank" rel="noreferrer">
              <Code2 size={18} />
              GitHub
            </a>
          </div>
          <a className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-mint/30 bg-mint/10 px-5 font-black text-mint transition hover:-translate-y-0.5 hover:bg-mint/15" href="/assets/mangesh-takik-resume.pdf" download>
            <Download size={18} />
            Download Resume
          </a>
          <div className="mt-6 rounded-lg border border-white/10 bg-ink/50 p-4">
            <div className="flex items-center gap-3">
              <Users className="text-aqua" size={22} />
              <p className="font-black">Languages</p>
            </div>
            <p className="mt-3 text-sm text-slate-300">English, Hindi, Marathi</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default App;
