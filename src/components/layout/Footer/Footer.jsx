import { FaDiscord, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topLine} />

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <a href="#hero" className={styles.brand}>
              <span className={styles.brandText}>lexa</span>
              <span className={styles.brandLeaf}>◜</span>
            </a>

            <p className={styles.brandDescription}>
              Psicología aplicada y coaching mental
              <br />
              para esports y alto rendimiento.
            </p>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.colTitle}>Navegación</span>

            <div className={styles.linksGrid}>
              <div className={styles.linkGroup}>
                <a href="#hero">Inicio</a>
                <a href="#about">Sobre mí</a>
                <a href="#services">Servicios</a>
                <a href="#methodology">Metodología</a>
              </div>

              <div className={styles.linkGroup}>
                <a href="#experience">Experiencia</a>
                <a href="#contact">Contacto</a>
              </div>
            </div>
          </div>

          <div className={styles.contactCol}>
            <span className={styles.colTitle}>Contacto</span>

            <a href="mailto:hola@lexa.coach" className={styles.contactItem}>
              <HiOutlineMail />
              <span>hola@lexa.coach</span>
            </a>

            <a
             /*  href="https://discord.com"
              target="_blank" */
              rel="noreferrer"
              className={styles.contactItem}
            >
              <FaDiscord />
              <span>.lexxy505</span>
            </a>
          </div>

          <div className={styles.socialCol}>
            <span className={styles.colTitle}>Sígueme</span>

            <div className={styles.socials}>
           {/*    <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className={styles.socialBtn}
              >
                <FaDiscord />
              </a> */}

              <a
                href="https://x.com/lexa505"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className={styles.socialBtn}
              >
                <RiTwitterXLine />
              </a>

             {/*  <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={styles.socialBtn}
              >
                <FaInstagram />
              </a> */}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Lexa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;