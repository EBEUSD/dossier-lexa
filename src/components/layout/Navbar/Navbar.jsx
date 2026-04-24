import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const goToHomeTop = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
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
      }
      return;
    }

    navigate(`/#${sectionId}`);
  };

  const isHome = location.pathname === "/";
  const isServicesRoute = location.pathname.startsWith("/servicios");

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} onClick={goToHomeTop}>
          <span className={styles.brandText}>lexa</span>
          <span className={styles.brandMark}>◜</span>
        </a>

        <nav className={styles.nav}>
          <a
            href="/"
            onClick={goToHomeTop}
            className={isHome && !location.hash ? styles.active : ""}
          >
            Inicio
          </a>

          <a
            href="/#about"
            onClick={goToSection("about")}
            className={isHome && location.hash === "#about" ? styles.active : ""}
          >
            Sobre mí
          </a>

          <a
            href="/#services"
            onClick={goToSection("services")}
            className={
              isServicesRoute || (isHome && location.hash === "#services")
                ? styles.active
                : ""
            }
          >
            Servicios
          </a>

          <a
            href="/#methodology"
            onClick={goToSection("methodology")}
            className={isHome && location.hash === "#methodology" ? styles.active : ""}
          >
            Metodología
          </a>

          <a
            href="/#experience"
            onClick={goToSection("experience")}
            className={isHome && location.hash === "#experience" ? styles.active : ""}
          >
            Experiencia
          </a>

          <a
            href="/#contact"
            onClick={goToSection("contact")}
            className={isHome && location.hash === "#contact" ? styles.active : ""}
          >
            Contacto
          </a>
        </nav>

        <div className={styles.actions}>
          <a href="/#contact" className={styles.cta} onClick={goToSection("contact")}>
            Trabajemos juntos
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
        <a
          href="/"
          onClick={goToHomeTop}
          className={isHome && !location.hash ? styles.activeMobile : ""}
        >
          Inicio
        </a>

        <a
          href="/#about"
          onClick={goToSection("about")}
          className={isHome && location.hash === "#about" ? styles.activeMobile : ""}
        >
          Sobre mí
        </a>

        <a
          href="/#services"
          onClick={goToSection("services")}
          className={
            isServicesRoute || (isHome && location.hash === "#services")
              ? styles.activeMobile
              : ""
          }
        >
          Servicios
        </a>

        <a
          href="/#methodology"
          onClick={goToSection("methodology")}
          className={isHome && location.hash === "#methodology" ? styles.activeMobile : ""}
        >
          Metodología
        </a>

        <a
          href="/#experience"
          onClick={goToSection("experience")}
          className={isHome && location.hash === "#experience" ? styles.activeMobile : ""}
        >
          Experiencia
        </a>

        <a
          href="/#contact"
          onClick={goToSection("contact")}
          className={isHome && location.hash === "#contact" ? styles.activeMobile : ""}
        >
          Contacto
        </a>
      </div>
    </header>
  );
}

export default Navbar;