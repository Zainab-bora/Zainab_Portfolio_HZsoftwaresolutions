import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Mobile",
    skills: ["Kotlin", "Android Studio"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Jira", "Figma", "Canva"],
  },
  {
    title: "Project & Agile",
    skills: ["Project Management", "Scrum", "Agile Methodologies"],
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>

      <div style={styles.grid}>
        {skillGroups.map((group, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                boxShadow: "0 14px 30px rgba(79,70,229,0.18)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setActiveIndex(isOpen ? null : index)}
              style={{
                ...styles.card,
                borderColor: isOpen
                  ? "rgba(79,70,229,0.8)"
                  : "rgba(79,70,229,0.25)",
              }}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{group.title}</h3>
                <span
                  style={{
                    ...styles.indicator,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▾
                </span>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={styles.list}
                  >
                    {group.skills.map((skill, i) => (
                      <li key={i} style={styles.skill}>
                        {skill}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      <p style={styles.hint}>Click a category to view skills</p>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 80px",
    background:
      "linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%), radial-gradient(600px at 80% 20%, rgba(79,70,229,0.12), transparent 60%)",
  },
  heading: {
    fontSize: "34px",
    fontWeight: 700,
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
    alignItems: "start",
  },
  card: {
    background: "linear-gradient(180deg, rgba(79,70,229,0.04), white 60%)",
    borderRadius: "16px",
    padding: "20px 24px",
    border: "1.5px solid rgba(79,70,229,0.25)",
    borderTop: "4px solid rgba(79,70,229,0.6)",
    cursor: "pointer",
    overflow: "hidden",
    transition: "box-shadow 0.25s ease, transform 0.25s ease",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#312e81",
  },
  indicator: {
    fontSize: "18px",
    color: "#4f46e5",
    transition: "transform 0.25s ease",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "16px",
    overflow: "hidden",
  },
  skill: {
    fontSize: "15px",
    color: "#374151",
    marginBottom: "8px",
  },
  hint: {
    marginTop: "24px",
    fontSize: "13px",
    color: "rgba(79,70,229,0.5)",
    textAlign: "center",
  },
};
