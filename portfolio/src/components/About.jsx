import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.container}
      >
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.text}>
          I’m a Software Engineering student currently transitioning into
          frontend development, with hands-on experience building clean,
          responsive web and mobile interfaces using HTML, CSS, JavaScript, and
          React.
        </p>

        <p style={styles.text}>
          Alongside web development, I’ve built a full Android application using
          Kotlin, handling UI design, navigation, and application logic from
          scratch.
        </p>

        <p style={styles.text}>
          I also have a strong foundation in project management and agile
          practices, which helps me approach development in a structured and
          goal-oriented way.
        </p>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 80px",
    background:
      "linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%), radial-gradient(600px at 80% 20%, rgba(79,70,229,0.12), transparent 60%)",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    borderLeft: "3px solid rgba(79,70,229,0.15)",
    paddingLeft: "24px",
  },
  heading: {
    fontSize: "34px",
    fontWeight: 700,
    marginBottom: "24px",
  },
  text: {
    fontSize: "16px",
    lineHeight: 1.8,
    color: "#374151",
    marginBottom: "18px",
    textAlign: "justify",
    textJustify: "inter-word",
    hyphens: "auto",
  },
};
