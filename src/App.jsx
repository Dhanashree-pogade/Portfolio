import { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

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

  return (
    <div className={dark ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-5 shadow-md">
        <h1 className="text-xl font-bold">Dhanashree Pogade</h1>

        <div className="flex gap-4 items-center">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Dhanashree Pogade
        </motion.h1>

        <p className="mt-3 text-lg opacity-80">
          Data Science Graduate | AI-ML Enthusiast | Data Analyst Aspirant
        </p>

        <p className="mt-2 text-sm opacity-60">
          Yavatmal, Maharashtra | dhanashreepogade7@gmail.com | 7385291331
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-6 flex gap-4">
          <a
            href="#contact"
            className="px-5 py-2 bg-blue-600 text-white rounded"
          >
            Connect
          </a>

          {/* DOWNLOAD RESUME BUTTON WITH ICON + ANIMATION */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 border rounded"
          >
            {/* Download Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14"
              />
            </svg>

            Download Resume
          </motion.a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-10 text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 max-w-3xl mx-auto opacity-80">
          Results-driven B.Tech Data Science graduate (2025, CGPA: 8.75/10) with hands-on experience
          in machine learning models, data automation tools, and cloud-based solutions.
          Achieved 95%+ model accuracy during internship processing 10,000+ security records.
          Built 3+ end-to-end projects reducing manual reporting effort by up to 60%.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="p-10 text-center">
        <h2 className="text-3xl font-bold">Technical Skills</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">Python, Pandas, NumPy, Scikit-learn, SQL</div>
          <div className="border p-4 rounded">Power BI, Excel, Matplotlib, Seaborn</div>
          <div className="border p-4 rounded">AWS (EC2, S3, ELB), Docker, Git, Linux</div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Internship Experience</h2>

        <div className="mt-6 border p-5 rounded-xl">
          <h3 className="text-xl font-bold">Data Science Intern - Codtech IT Solutions</h3>
          <p className="opacity-70">Mar 2025 – Jun 2025</p>

          <ul className="mt-3 list-disc ml-6 space-y-2">
            <li>Processed 10,000+ security records using Python & SQL, reducing 30% inconsistencies.</li>
            <li>Built ML anomaly detection models achieving 95% accuracy.</li>
            <li>Automated EDA reporting, reducing manual analysis time by 50%.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-5 border rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 opacity-80">{p.desc}</p>
              <p className="mt-2 text-sm opacity-60">{p.tech}</p>

              <div className="flex gap-3 mt-4">
                <a href={p.github} target="_blank" className="px-3 py-1 border rounded">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">Education</h2>
        <p className="mt-4">
          B.Tech Data Science - Ajeenkya D Y Patil University (CGPA: 8.75)
        </p>
        <p>HSC - 83.33%</p>
      </section>

      {/* CERTIFICATIONS */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">Certifications</h2>
        <p className="mt-4">Infosys Springboard: Python, SQL, Data Visualization, Database</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4">Email: dhanashreepogade7@gmail.com</p>
        <p>Phone: 7385291331</p>
        <p>Location: Yavatmal, Maharashtra</p>
      </section>

      {/* FOOTER */}
      <footer className="p-5 text-center text-sm opacity-60">
        Built with React + Tailwind | Deployed on Netlify
      </footer>

    </div>
  );
}
