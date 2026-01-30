import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: "-50% 0px -50% 0px",
        },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Hello! I'm Zainab Kashif</h2>

      <div style={styles.links}>
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              ...styles.link,
              ...(active === item ? styles.activeLink : {}),
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    background: "rgba(79, 70, 229, 0.08)", // dim violet
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 80px",
    zIndex: 1000,
    borderBottom: "1px solid rgba(79, 70, 229, 0.18)",
  },
  logo: {
    fontWeight: 700,
    fontSize: "24px",
    letterSpacing: "0.5px",
    color: "#312e81",
  },
  links: {
    display: "flex",
    gap: "30px",
  },
  link: {
    fontSize: "15px",
    color: "#312e81",
    textDecoration: "none",
    paddingBottom: "4px",
    transition: "all 0.2s ease",
  },
  activeLink: {
    color: "#4f46e5",
    borderBottom: "2px solid rgba(79,70,229,0.6)",
  },
};
