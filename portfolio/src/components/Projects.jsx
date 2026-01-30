import { motion } from "framer-motion";

const projects = [
  {
    title: "Calculator Web Application",
    description:
      "A responsive calculator built using HTML, CSS, and JavaScript with a clean and intuitive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/Zainab-bora/HZSoftwareSolutions_Calculator_zainab",
    live: "https://hz-software-solutions-calculator-za.vercel.app/",
  },
  {
    title: "Moodware 2.0",
    description:
      "A mood tracking and journaling Android application focused on mental wellness and user experience.",
    tech: ["Kotlin", "Android Studio", "UI Design"],
    github: "https://github.com/Zainab-bora/Moodware",
    live: "https://github.com/Zainab-bora/Moodware/releases/tag/MoodwareAppApk",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and frontend-focused design decisions.",
    tech: ["React", "Framer Motion", "CSS"],
    github:
      "https://github.com/Zainab-bora/Zainab_Portfolio_HZsoftwaresolutions",
    live: "https://zainab-portfolio-tau.vercel.app/",
  },
  {
    title: "Billo – Invoice Generator",
    description:
      "A simple invoice generation tool designed with a strong focus on usability and clean layouts.",
    tech: ["UI/UX", "Product Design", "Web"],
    live: "https://get-paid-faster-with-billo.my.canva.site/billo-freelance-invoice-generator",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            whileHover={{
              y: -8,
              boxShadow: "0 18px 40px rgba(79,70,229,0.15)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={styles.card}
          >
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>

            <div style={styles.tech}>
              {project.tech.map((item, i) => (
                <span key={i} style={styles.tag}>
                  {item}
                </span>
              ))}
            </div>

            <div style={styles.actions}>
              {project.github && (
                <a href={project.github} style={styles.link}>
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} style={styles.linkSecondary}>
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
const styles = {
  section: {
    padding: "80px 80px",
    background:
      "linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%), radial-gradient(600px at 80% 20%, rgba(79,70,229,0.12), transparent 60%)",
  },
  heading: {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "48px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "linear-gradient(180deg, rgba(79,70,229,0.05), #ffffff 65%)",
    borderRadius: "18px",
    padding: "32px",
    border: "1px solid rgba(79,70,229,0.25)",
    boxShadow: "0 12px 30px rgba(79,70,229,0.08)",
    transition: "all 0.25s ease",
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#312e81",
    marginBottom: "12px",
  },
  description: {
    fontSize: "15px",
    color: "#374151",
    lineHeight: 1.6,
    marginBottom: "16px",
  },
  tech: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "20px",
  },
  tag: {
    fontSize: "12px",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(79,70,229,0.08)",
    color: "#4f46e5",
  },
  actions: {
    display: "flex",
    gap: "16px",
  },
  link: {
    fontSize: "14px",
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: 500,
  },
  linkSecondary: {
    fontSize: "14px",
    color: "#6b7280",
    textDecoration: "none",
  },
};
