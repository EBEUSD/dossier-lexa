import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoHomeTop = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      return;
    }

    navigate("/");
  };

  const handleSectionNav = (sectionId) => (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `/#${sectionId}`);
      }
      return;
    }

    navigate(`/#${sectionId}`);
  };

  const isServicesRoute = location.pathname.startsWith("/servicios");

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} onClick={handleGoHomeTop}>
          <span className={styles.brandText}>lexa</span>
          <span className={styles.brandMark}>◜</span>
        </a>

        <nav className={styles.nav}>
          <a
            href="/#hero"
            onClick={handleGoHomeTop}
            className={location.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </a>

          <a
            href="/#about"
            onClick={handleSectionNav("about")}
            className={location.hash === "#about" && location.pathname === "/" ? styles.active : ""}
          >
            Sobre mí
          </a>

          <a
            href="/#services"
            onClick={handleSectionNav("services")}
            className={
              isServicesRoute || (location.hash === "#services" && location.pathname === "/")
                ? styles.active
                : ""
            }
          >
            Servicios
          </a>

          <a
            href="/#methodology"
            onClick={handleSectionNav("methodology")}
            className={
              location.hash === "#methodology" && location.pathname === "/" ? styles.active : ""
            }
          >
            Metodología
          </a>

          <a
            href="/#experience"
            onClick={handleSectionNav("experience")}
            className={
              location.hash === "#experience" && location.pathname === "/" ? styles.active : ""
            }
          >
            Experiencia
          </a>

          <a
            href="/#contact"
            onClick={handleSectionNav("contact")}
            className={
              location.hash === "#contact" && location.pathname === "/" ? styles.active : ""
            }
          >
            Contacto
          </a>
        </nav>

        <a href="/#contact" className={styles.cta} onClick={handleSectionNav("contact")}>
          Trabajemos juntos
          <span className={styles.arrow}>↗</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;