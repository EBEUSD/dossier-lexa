import { motion } from "framer-motion";
import styles from "./ContactSection.module.css";
import { fadeUp, fadeRight, fadeLeft } from "../../utils/motion";

function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.arc} />
        <div className={styles.arcPoint} />

        <div className={styles.container}>
          <motion.div
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className={styles.left} variants={fadeRight} custom={0.04}>
              <span className={styles.eyebrow}>Contacto</span>
              <h2 className={styles.title}>
                Trabajemos <span>juntos.</span>
              </h2>
              <p className={styles.description}>
                Da el siguiente paso y transforma tu mentalidad
                <br />
                en tu mayor ventaja competitiva.
              </p>

              <div className={styles.actions}>
                <a
                  href="mailto:tuemail@correo.com"
                  className={styles.actionBtn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.actionIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M4 7.5 12 13l8-5.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="3.5"
                        y="5"
                        width="17"
                        height="14"
                        rx="2.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  Enviar correo
                </a>

             {/*    <a
                  href="https://discord.com"
                  className={styles.actionBtn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.actionIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M8 17c3 1.5 5 1.5 8 0"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.2 7.8c2.9-1.4 6.7-1.4 9.6 0 .9 1.4 1.6 2.9 2 4.5-.7 1.5-1.8 2.9-3.2 4-1-.2-1.9-.6-2.8-1.1l.7-.5M10.5 14.7l.7.4c-.8.5-1.8.9-2.8 1.1-1.4-1.1-2.5-2.5-3.2-4 .4-1.6 1.1-3.1 2-4.5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.4 12.1h.01M14.6 12.1h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  Discord
                </a> */}

                <a
                  href="https://x.com/lexa505"
                  className={styles.actionBtn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.actionIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 5h3.1l4 5.3L16.6 5H19l-5.7 6.7L19 19h-3.1l-4.2-5.5L7 19H4.6l5.9-7L5 5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Escribir en X
                </a>
              </div>

              <div className={styles.footNote}>
                <span className={styles.noteIcon}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3.5 18.5 6v5.12c0 4.392-2.727 7.87-6.5 9.38-3.773-1.51-6.5-4.988-6.5-9.38V6L12 3.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Confidencialidad garantizada en cada proceso.
              </div>
            </motion.div>

            <motion.div className={styles.divider} variants={fadeUp} custom={0.12} />

            <motion.div className={styles.right} variants={fadeLeft} custom={0.14}>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
                      <path
                        d="M12 7.8v4.6l3 1.8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>Sesiones online</h3>
                    <p>Individuales o grupales</p>
                  </div>
                </li>

                <li className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M6 8.5h12M8 5.5h8M8.5 12.5h7M9.5 16.5h5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <rect
                        x="4.5"
                        y="4.5"
                        width="15"
                        height="15"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>Horarios flexibles</h3>
                    <p>Adaptados a tu rutina y competencias</p>
                  </div>
                </li>

                <li className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 20s6-3.2 6-8.5a3.5 3.5 0 0 0-6-2.3 3.5 3.5 0 0 0-6 2.3C6 16.8 12 20 12 20Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>Hablamos tu idioma</h3>
                    <p>ES - EN</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;