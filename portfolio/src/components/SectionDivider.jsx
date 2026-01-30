import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div style={styles.wrapper}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={styles.text}
      >
        Zainab Kashif · Frontend Developer · Zainab Kashif · Frontend Developer
        · Zainab Kashif · Frontend Developer · Zainab Kashif · Frontend
        Developer · Zainab Kashif · Frontend Developer · Zainab Kashif ·
        Frontend Developer · Zainab Kashif · Frontend Developer · Zainab Kashif
        · Frontend Developer
      </motion.div>
    </div>
  );
}

const styles = {
  wrapper: {
    overflow: "hidden",
    background: "rgba(79,70,229,0.05)",
    padding: "16px 0",
  },
  text: {
    whiteSpace: "nowrap",
    fontSize: "14px",
    fontWeight: 500,
    color: "rgba(79,70,229,0.4)",
  },
};
