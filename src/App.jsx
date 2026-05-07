import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "./assets/dhanashree.jpg";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("home");

  const projects = [
    {
      title: "Cloud-Based Sales Analytics Pipeline",
      desc: "End-to-end cloud ETL pipeline processing 50,000+ records using AWS and Docker with automated KPI reporting.",
      tech: "Python, AWS S3, EC2, Docker, Pandas",
      github: "https://github.com/Dhanashree-pogade/cloud-data-analysis-pipeline.git",
    },
    {
      title: "AI-Powered Customer Support Chatbot",
      desc: "NLP-based chatbot with sentiment analysis and intent classification achieving 87% accuracy.",
      tech: "Python, NLP, Scikit-learn, TF-IDF, Tkinter",
      github: "https://github.com/Dhanashree-pogade/chatbot.git",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "home";

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 150) current = sec;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (id, label) => (
    <a
      href={`#${id}`}
      className={`hover:text-cyan-400 transition ${
        active === id ? "text-cyan-400 font-bold" : ""
      }`}
    >
      {label}
    </a>
  );

  const cardStyle =
    "p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 transition";

  return (
    <div
      className={
        dark
          ? "bg-black text-white min-h-screen scroll-smooth"
          : "bg-white text-black min-h-screen scroll-smooth"
      }
    >

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-5 sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <h1 className="text-xl font-bold">Dhanashree Pogade</h1>

        <div className="flex gap-5 text-sm items-center">
          {navItem("home", "Home")}
          {navItem("about", "About")}
          {navItem("skills", "Skills")}
          {navItem("projects", "Projects")}
          {navItem("contact", "Contact")}

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border border-white/20 rounded hover:scale-105 transition"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      >
        {/* Glow background */}
        <div className="absolute w-80 h-80 bg-cyan-500 blur-3xl opacity-20 rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-purple-500 blur-3xl opacity-20 rounded-full bottom-10 right-10 animate-pulse"></div>

        {/* PROFILE IMAGE */}
        <motion.img
          src={profile}
          alt="Dhanashree Pogade"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg object-cover mb-5 z-10"
        />

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold z-10"
        >
          Dhanashree Pogade
        </motion.h1>

        {/* TAGLINE */}
        <p className="mt-3 text-lg opacity-80 z-10">
          Data Science Graduate | AI-ML Enthusiast | Data Analyst Aspirant
        </p>

        {/* SOCIAL CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 z-10">

          <a href="https://github.com/Dhanashree-pogade" target="_blank" className={cardStyle}>
            🐙 GitHub
          </a>

          <a href="https://www.linkedin.com/in/dhanashree-pogade-551761228/" target="_blank" className={cardStyle}>
            💼 LinkedIn
          </a>

          <a href="mailto:dhanashreepogade7@gmail.com" className={cardStyle}>
            📧 Email
          </a>

          <a href="/resume.pdf" download className={cardStyle}>
            📄 Resume
          </a>

        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4 z-10">
          <a
            href="#contact"
            className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            Connect
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto opacity-80">
          Results-driven B.Tech Data Science graduate with hands-on experience
          in ML, AI, and cloud systems. Built real-world pipelines and models
          with strong accuracy and scalability.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="p-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {["Python | SQL | Pandas", "Power BI | Excel | Visualization", "AWS | Docker | Git"].map(
            (s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={cardStyle}
              >
                {s}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="p-16">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/30"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 opacity-80">{p.desc}</p>
              <p className="mt-2 text-sm opacity-60">{p.tech}</p>

              <a
                href={p.github}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 border border-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-black transition"
              >
                View Code
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="p-16 text-center">
        <h2 className="text-3xl font-bold">Let’s Connect</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className={cardStyle}>📧 dhanashreepogade7@gmail.com</div>
          <div className={cardStyle}>🐙 GitHub: Dhanashree-pogade</div>
          <div className={cardStyle}>💼 LinkedIn Profile</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-sm opacity-60">
        Built with React + Tailwind | Designed for impact 🚀
      </footer>

    </div>
  );
}