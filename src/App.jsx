import profile from "./assets/dhanashree.jpg"

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-cyan-400">
          Dhanashree.
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-24">

        {/* Left Content */}
        <div className="text-center md:text-left max-w-2xl">

          <h2 className="text-5xl font-bold leading-tight">
            Hi, I'm
            <span className="text-cyan-400"> Dhanashree Pogade</span>
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Aspiring Data Analyst & AI/ML Enthusiast passionate about
            machine learning, cloud technologies, data analytics,
            and solving real-world business problems.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">

            <a
              href="https://github.com/"
              target="_blank"
              className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* Profile Image */}
        <div>

          <img
            src={profile}
            alt="Dhanashree"
            className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
          />

        </div>

      </section>


      {/* About */}
      <section id="about" className="px-10 py-20">

        <h3 className="text-3xl font-bold text-cyan-400 mb-6">
          About Me
        </h3>

        <p className="text-slate-300 leading-8 max-w-4xl">
          Results-driven B.Tech Data Science graduate with hands-on
          experience in machine learning, NLP, AWS cloud solutions,
          and data analytics. Passionate about solving real-world
          business problems using data-driven insights and scalable
          AI solutions.
        </p>

      </section>


      {/* Skills */}
      <section id="skills" className="px-10 py-20 bg-slate-900">

        <h3 className="text-3xl font-bold text-cyan-400 mb-10">
          Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            'Python',
            'SQL',
            'Machine Learning',
            'Power BI',
            'AWS',
            'Docker',
            'Pandas',
            'Data Analytics'
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-5 rounded-2xl text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="px-10 py-20">

        <h3 className="text-3xl font-bold text-cyan-400 mb-10">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

            <h4 className="text-2xl font-bold mb-4">
              Cloud-Based Sales Analytics Pipeline
            </h4>

            <p className="text-slate-300 leading-7">
              Built a cloud-based analytics pipeline using AWS,
              Docker, Python, and ETL workflows for automated
              reporting and business KPI analysis.
            </p>

          </div>


          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

            <h4 className="text-2xl font-bold mb-4">
              AI-Powered Customer Support Chatbot
            </h4>

            <p className="text-slate-300 leading-7">
              Developed an NLP-based chatbot using TF-IDF,
              sentiment analysis, and machine learning for
              intelligent automated responses.
            </p>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="px-10 py-20 bg-slate-900 text-center">

        <h3 className="text-3xl font-bold text-cyan-400 mb-6">
          Contact
        </h3>

        <p className="text-slate-300 mb-4">
          dhanashreepogade7@gmail.com
        </p>

        <p className="text-slate-300 mb-8">
          Maharashtra, India
        </p>

        <button className="bg-cyan-500 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition">
          Let's Connect
        </button>

      </section>


      {/* Footer */}
      <footer className="text-center py-6 border-t border-slate-800 text-slate-500">
        © 2026 Dhanashree Pogade
      </footer>

    </div>
  )
}

export default App