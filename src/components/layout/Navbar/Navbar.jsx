import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const HOME_SECTIONS = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "services", label: "Servicios" },
  { id: "methodology", label: "Metodología" },
  { id: "experience", label: "Experiencia" },
  { id: "contact", label: "Contacto" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const isHome = location.pathname === "/";
  const isServicesRoute = location.pathname.startsWith("/servicios");

  const currentActive = useMemo(() => {
    if (isServicesRoute) return "services";
    if (!isHome) return "";
    if (location.hash) return location.hash.replace("#", "");
    return activeSection;
  }, [activeSection, isHome, isServicesRoute, location.hash]);

  useEffect(() => {
    if (!isHome) return;

    const sections = HOME_SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScrollFallback = () => {
      const scrollY = window.scrollY + 140;
      let current = "hero";

      for (const { id } of HOME_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) current = id;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollFallback, { passive: true });
    handleScrollFallback();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollFallback);
    };
  }, [isHome]);

  const closeMenu = () => setIsOpen(false);

  const goToHomeTop = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      setActiveSection("hero");
      return;
    }

    navigate("/");
  };

  const goToSection = (sectionId) => (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `/#${sectionId}`);
        setActiveSection(sectionId);
      }
      return;
    }

    navigate(`/#${sectionId}`);
  };

  const getNavClass = (sectionId) => (currentActive === sectionId ? styles.active : "");
  const getMobileNavClass = (sectionId) =>
    currentActive === sectionId ? styles.activeMobile : "";

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} onClick={goToHomeTop}>
          <span className={styles.brandText}>lexa</span>
          <span className={styles.brandMark}>◜</span>
        </a>

        <nav className={styles.nav}>
          <a href="/" onClick={goToHomeTop} className={getNavClass("hero")}>
            Inicio
          </a>

          <a href="/#about" onClick={goToSection("about")} className={getNavClass("about")}>
            Sobre mí
          </a>

          <a
            href="/#services"
            onClick={goToSection("services")}
            className={getNavClass("services")}
          >
            Servicios
          </a>

          <a
            href="/#methodology"
            onClick={goToSection("methodology")}
            className={getNavClass("methodology")}
          >
            Metodología
          </a>

          <a
            href="/#experience"
            onClick={goToSection("experience")}
            className={getNavClass("experience")}
          >
            Experiencia
          </a>

          <a
            href="/#contact"
            onClick={goToSection("contact")}
            className={getNavClass("contact")}
          >
            Contacto
          </a>
        </nav>

        <div className={styles.actions}>
          <a href="/#contact" className={styles.cta} onClick={goToSection("contact")}>
            Trabajemos juntas
            <span className={styles.arrow}>↗</span>
          </a>

          <button
            type="button"
            className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <a href="/" onClick={goToHomeTop} className={getMobileNavClass("hero")}>
          Inicio
        </a>

        <a href="/#about" onClick={goToSection("about")} className={getMobileNavClass("about")}>
          Sobre mí
        </a>

        <a
          href="/#services"
          onClick={goToSection("services")}
          className={getMobileNavClass("services")}
        >
          Servicios
        </a>

        <a
          href="/#methodology"
          onClick={goToSection("methodology")}
          className={getMobileNavClass("methodology")}
        >
          Metodología
        </a>

        <a
          href="/#experience"
          onClick={goToSection("experience")}
          className={getMobileNavClass("experience")}
        >
          Experiencia
        </a>

        <a
          href="/#contact"
          onClick={goToSection("contact")}
          className={getMobileNavClass("contact")}
        >
          Contacto
        </a>
      </div>
    </header>
  );
}

export default Navbar;