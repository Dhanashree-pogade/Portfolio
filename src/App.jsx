import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("home");

  const projects = [
    {
      title: "Cloud-Based Sales Analytics Pipeline",
      desc: "End-to-end cloud ETL pipeline processing 50,000+ records using AWS and Docker with automated KPI reporting.",
      tech: "Python, AWS S3, EC2, Docker, Pandas",
      github: "https://github.com/Dhanashree-pogade/cloud-data-analysis-pipeline.git",
      live: ""
    },
    {
      title: "AI-Powered Customer Support Chatbot",
      desc: "NLP-based chatbot with sentiment analysis and intent classification achieving 87% accuracy.",
      tech: "Python, NLP, Scikit-learn, TF-IDF, Tkinter",
      github: "https://github.com/Dhanashree-pogade/chatbot.git",
      live: ""
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
      className={`hover:text-blue-400 transition ${active === id ? "text-blue-400 font-bold" : ""}`}
    >
      {label}
    </a>
  );

  return (
    <div className={dark ? "bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen scroll-smooth" : "bg-gradient-to-br from-white via-gray-100 to-white text-black min-h-screen scroll-smooth"}>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-5 sticky top-0 z-50 backdrop-blur-md bg-opacity-40 border-b">
        <h1 className="text-xl font-bold tracking-wide">Dhanashree Pogade</h1>

        <div className="flex gap-5 text-sm items-center">
          {navItem("home", "Home")}
          {navItem("about", "About")}
          {navItem("skills", "Skills")}
          {navItem("projects", "Projects")}
          {navItem("contact", "Contact")}

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded hover:scale-105 transition"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 relative">

        <div className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-30 rounded-full top-20 left-20 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-500 blur-3xl opacity-30 rounded-full bottom-20 right-20 animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold z-10"
        >
          Dhanashree Pogade
        </motion.h1>

        <p className="mt-3 text-lg opacity-80 z-10">
          Data Science Graduate | AI-ML Enthusiast | Data Analyst Aspirant
        </p>

        <div className="flex gap-5 mt-4 text-sm z-10">
          <a href="https://github.com/Dhanashree-pogade" target="_blank" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="hover:text-blue-400">LinkedIn</a>
          <a href="mailto:dhanashreepogade7@gmail.com" className="hover:text-blue-400">Email</a>
        </div>

        <div className="mt-6 flex gap-4 z-10">
          <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded hover:scale-105 transition">
            Connect
          </a>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 border rounded flex items-center gap-2"
          >
            📄 Download Resume
          </motion.a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-14 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto opacity-80">
            Results-driven B.Tech Data Science graduate with strong ML, AI, and cloud experience.
            Built real-world systems reducing manual work by up to 60% and achieving 95%+ accuracy.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="p-14 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Python | SQL | Pandas",
            "Power BI | Excel | Visualization",
            "AWS | Docker | Git"
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-xl border bg-white/5 backdrop-blur-md"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="p-14">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-xl border bg-white/5 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 opacity-80">{p.desc}</p>
              <p className="mt-2 text-sm opacity-60">{p.tech}</p>

              <div className="flex gap-3 mt-4">
                <a href={p.github} target="_blank" className="px-3 py-1 border rounded hover:bg-blue-600 transition">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="p-14 text-center">
        <h2 className="text-3xl font-bold">Let’s Connect</h2>

        <div className="mt-4 flex flex-col gap-2">
          <a href="mailto:dhanashreepogade7@gmail.com" className="hover:text-blue-400">Email</a>
          <a href="https://github.com/Dhanashree-pogade" target="_blank" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/dhanashree-pogade-551761228/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-5 text-center text-sm opacity-60">
        Built with React + Tailwind | Deployed on Netlify
      </footer>

    </div>
  );
}
