// Portfolio.jsx - GitHub Links Added to Projects + Education Section

import React, { useState } from "react";
import { motion } from "framer-motion";

const sections = ["About", "Education", "Skills", "Achievements", "Workshops", "Projects"];

const skills = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
  { category: "Backend", items: ["Java", "Spring Boot", "Flask", "Python"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook", "AWS SageMaker"] }
];

const education = [
  {
    degree: "Bachelor of Engineering in Information Science and Engineering",
    institution: "Bangalore Institute of Technology (BIT)",
    location: "Bangalore, India",
    duration: "2022 – 2026",
    grade: "9.2 CGPA (Till 7th Semester)",
    highlights: [
      "Amazon Scholar, Deutsche Bank Scholar, IET Finalist",
      "Projects in ML, Java, Spring Boot and Full Stack Development"
    ]
  },
  {
    degree: "XII std-PCMB (CBSE)",
    institution: "Jawahar Navodaya Vidyalaya",
    location: "Hassan, India",
    duration: "2020– 2022",
    grade: "88%",
    highlights: [
      "Top Performer in Computer Science",
      "Class Representative and Volunteer in Technical Events"
    ]
  }
];

const achievements = [
  { title: "Amazon Scholarship Winner", image: "/amazon.jpg" },
  { title: "Deutsche Bank Scholar 2024", image: "/deutsche.jpg" },
  { title: "Finalist – IET India Scholarship 2025", image: "/iet.jpg" },
  { title: "Aspire Leaders Program (Harvard-founded) Fellow", image: "/aspire.jpg" },
  { title: "Speaker – Prayaas Collective Conference", image: "/prayaas.jpg" }
];

const workshops = [
  { title: "Infosys #IamFutureReady Program Graduate", image: "/infosys.jpg" },
  { title: "Women in STEM Summit – 3M", image: "/3M.jpg" },
  { title: "Thomson Reuters AI/ML Workshop Participant", image: "/TR.jpg" }
];

const projects = [
  { title: "YouTube Clone", image: "/download.png", tech: "React, Redux, Tailwind, Firebase", description: "A feature-rich YouTube clone app with video playback, search, categories, and Firebase backend.", github: "https://github.com/gunashreebh/youtube-clone" },
  { title: "Hospital Management System", image: "/hospital.png", tech: "Java, MySQL, JDBC", description: "A DBMS-based hospital system to manage patients, billing, staff, and appointments.", github: "https://github.com/gunashreebh/hospital-management" },
  { title: "Course Recommendation System", image: "/recommendation-system.webp", tech: "Flask, Java, MySQL, JS, HTML/CSS", description: "AI-powered recommendation system for sustainable engineering careers with personalized filters and voice input.", github: "https://github.com/gunashreebh/course-recommendation" },
  { title: "Stress Predictor - MTMKL", image: "/stress-level-high-stress-indicator-scale-speedometer-showing-stress-point-maximal-stress_849264-496.avif", tech: "Flask, Python, ML, Matplotlib", description: "Predicts daily student stress levels using MTMKL model and displays results in an interactive dashboard.", github: "https://github.com/gunashreebh/stress-predictor" },
  { title: "Restock Dashboard (Walmart Hackathon)", image: "/rmnmhb4i3ab7noa0kph0.jpg", tech: "Spring Boot, Thymeleaf, MySQL", description: "A smart inventory and restocking solution with color-coded alerts and supply chain management UI.", github: "https://github.com/gunashreebh/restock-dashboard" }
];

export default function Portfolio() {
  const [active, setActive] = useState("About");

  const renderSection = () => {
    switch (active) {
      case "Skills":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white text-black p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 underline underline-offset-4 decoration-pink-500">{skill.category}</h3>
                <ul className="list-disc list-inside">
                  {skill.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        );
      case "Education":
        return (
          <div className="space-y-8 mt-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white text-black p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-1 font-serif text-center text-gray-800">{edu.degree}</h3>
                <p className="text-sm text-gray-700 text-center">{edu.institution}, {edu.location}</p>
                <p className="text-sm italic text-gray-600 text-center">{edu.duration}</p>
                <p className="text-sm font-semibold mt-2 text-center text-indigo-700">📈 {edu.grade}</p>
              </motion.div>
            ))}
          </div>
        );
      case "Achievements":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-4">
                  <h3 className="font-bold text-lg text-center">{item.title}</h3>
                </div>
                <img src={item.image} alt={item.title} className="w-full h-auto object-contain bg-white" />
              </motion.div>
            ))}
          </div>
        );
      case "Workshops":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {workshops.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-4">
                  <h3 className="font-bold text-lg text-center">{item.title}</h3>
                </div>
                <img src={item.image} alt={item.title} className="w-full h-auto object-contain bg-white" />
              </motion.div>
            ))}
          </div>
        );
      case "Projects":
        return (
          <div className="grid gap-8 md:grid-cols-2 mt-6">
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-black rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-center">{proj.title}</h3>
                </div>
                <img src={proj.image} alt={proj.title} className="w-full h-auto object-contain bg-white" />
                <div className="p-4 pt-0">
                  <p className="text-sm mb-2">{proj.description}</p>
                  <p className="text-xs text-gray-700"><strong>Tech:</strong> {proj.tech}</p>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline block mt-2"
                  >
                    🔗 View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return (
          <section className="text-center mb-10">
            <motion.img src="/gunashree.jpg" alt="Gunashree B H" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-white" />
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl font-bold">Gunashree B H</motion.h1>
            <p className="text-lg mt-2 text-gray-300">Software Developer | Full Stack | Java & AI Enthusiast</p>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400">
              Passionate about building intelligent systems and scalable applications. Experienced in backend development, full stack projects, and AI/ML solutions. Always eager to learn and contribute to impactful software innovations.
            </p>
          </section>
        );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-10 font-sans flex flex-col justify-between">
      <div>
        <nav className="flex justify-center gap-4 mb-10 flex-wrap">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setActive(sec)}
              className={`px-4 py-2 border border-white rounded-full transition font-medium tracking-wide ${
                active === sec ? "bg-white text-black" : "hover:bg-white hover:text-black"
              }`}
            >
              {sec}
            </button>
          ))}
        </nav>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {renderSection()}
        </motion.div>
      </div>

      <footer className="mt-20 text-center text-gray-400 border-t border-gray-700 pt-6">
        <p>📧 gunashreebh2004@gmail.com | 📱 +91-9591713697</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/gunashreebh" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
          <a href="https://linkedin.com/in/gunashree-b-h" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          <a href="mailto:gunashreebh2004@gmail.com">✉️ Email</a>
        </div>
        <p className="mt-2">© {new Date().getFullYear()} Gunashree B H</p>
      </footer>
    </main>
  );
}
