import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        ...styles.bloom,
        left: pos.x,
        top: pos.y,
      }}
      animate={{
        scale: [1, 1.08, 1],
        borderRadius: ["45% 55% 60% 40%", "55% 45% 40% 60%", "45% 55% 60% 40%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const styles = {
  bloom: {
    position: "fixed",
    width: "26px",
    height: "26px",
    background: "rgba(79,70,229,0.28)",
    filter: "blur(12px)",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 9998,
  },
};
