import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={styles.hero}>
      {/* Background Shapes */}
      <motion.div
        style={{ ...styles.blob, ...styles.blobOne }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ ...styles.blob, ...styles.blobTwo }}
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.content}
      >
        <span style={styles.tag}>Frontend Developer Intern</span>

        <h1 style={styles.heading}>
          I Design & Build
          <br />
          <span style={styles.highlight}>Clean, Modern Interfaces</span>
        </h1>

        <p style={styles.subtext}>
          Software Engineering student focused on frontend development, crafting
          responsive web and mobile experiences using React, JavaScript, and
          thoughtful UI design.
        </p>

        <div style={styles.actions}>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={styles.primaryBtn}
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={styles.secondaryBtn}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    padding: "70px 80px",
    background:
      "linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%), radial-gradient(600px at 80% 20%, rgba(79,70,229,0.12), transparent 60%)",
  },
  /*  Blobs */
  blob: {
    position: "absolute",
    width: "280px",
    height: "280px",
    borderRadius: "50%",
    background: "rgba(79,70,229,0.15)",
    filter: "blur(60px)",
    zIndex: 0,
  },
  blobOne: {
    top: "10%",
    right: "5%",
  },
  blobTwo: {
    top: "45%",
    right: "25%",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: "700px",
  },
  tag: {
    display: "inline-block",
    marginBottom: "20px",
    padding: "6px 14px",
    fontSize: "13px",
    fontWeight: 500,
    color: "#4f46e5",
    background: "rgba(79,70,229,0.1)",
    borderRadius: "999px",
  },
  heading: {
    fontSize: "52px",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "20px",
  },
  highlight: {
    color: "#4f46e5",
  },
  subtext: {
    fontSize: "17px",
    color: "#374151",
    maxWidth: "600px",
  },
  actions: {
    marginTop: "40px",
    display: "flex",
    gap: "16px",
  },
  primaryBtn: {
    padding: "12px 28px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "12px 28px",
    background: "transparent",
    color: "#111827",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    fontSize: "15px",
    cursor: "pointer",
  },
};
