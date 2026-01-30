import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <p style={styles.transitionText}>Want to build something together?</p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={styles.card}
      >
        <h2 style={styles.heading}>Let’s Connect</h2>

        <p style={styles.text}>
          I’m open to internships, collaboration opportunities, and frontend
          projects. Feel free to reach out.
        </p>

        <div style={styles.icons}>
          <motion.a
            href="mailto:zainabkashif29142005@gmail.com"
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgba(79,70,229,0.12)",
            }}
            style={styles.icon}
            aria-label="Email"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://github.com/Zainab-bora"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgba(79,70,229,0.12)",
            }}
            style={styles.icon}
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/zainab-kashif-585561265/"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgba(79,70,229,0.12)",
            }}
            style={styles.icon}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </motion.a>
        </div>
        <p style={styles.hint}>Reach me via email or socials</p>
      </motion.div>
    </section>
  );
}
const styles = {
  section: {
    padding: "80px 80px 120px",
    background: "linear-gradient(180deg, #f3f4f6 0%, #ffffff 100%)",
  },
  card: {
    maxWidth: "720px",
    margin: "0 auto",
    textAlign: "center",
    padding: "48px",
    borderRadius: "24px",
    background: "linear-gradient(180deg, rgba(79,70,229,0.06), #ffffff 70%)",
    border: "1.5px solid rgba(79,70,229,0.25)",
    boxShadow: "0 20px 45px rgba(79,70,229,0.15)",
  },
  heading: {
    fontSize: "34px",
    fontWeight: 700,
    color: "#312e81",
    marginBottom: "16px",
  },
  text: {
    fontSize: "16px",
    color: "#374151",
    lineHeight: 1.7,
    marginBottom: "36px",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "22px",
    marginTop: "32px",
  },

  icon: {
    width: "46px",
    height: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "1.5px solid rgba(79,70,229,0.35)",
    color: "#4f46e5",
    fontSize: "18px",
    textDecoration: "none",
    transition: "all 0.25s ease",
  },
  hint: {
    marginTop: "16px",
    fontSize: "13px",
    color: "rgba(79,70,229,0.55)",
  },
  transitionText: {
    textAlign: "center",
    fontSize: "18px",
    color: "rgba(79,70,229,0.55)",
    margin: "32px 0 16px",
  },
};
