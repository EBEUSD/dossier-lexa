import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";
import { fadeUp, fadeLeft, fadeRight } from "../../utils/motion";

function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.leftDecor} />
        <div className={styles.rightGlow} />

        <div className={styles.container}>
          <motion.div
            className={styles.topRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div className={styles.left} variants={fadeRight} custom={0.05}>
              <span className={styles.eyebrow}>Sobre mí</span>
              <h2 className={styles.title}>Sobre mí</h2>

              <p className={styles.description}>
                Soy estudiante avanzada de la Licenciatura en Psicología en la UCSF y
                tengo aspiraciones de dedicarme profesionalmente a la psicología
                deportiva. Trabajo desde un enfoque cognitivo-conductual, aplicándolo
                a contextos de alta exigencia y rendimiento competitivo.
              </p>

              <p className={styles.description}>
                Desde hace años me desarrollo en entornos de alto rendimiento, donde
                la precisión, la disciplina y la consistencia son la base de todo. A lo
                largo de ese recorrido ocupé roles de liderazgo, coordinando equipos y
                procesos con un estándar de trabajo riguroso y sostenido.
              </p>

              <p className={styles.description}>
                Mi objetivo es acompañar procesos reales: no solo intervenir en un
                momento puntual, sino ayudar a construir claridad mental, estabilidad y
                estructuras que puedan sostenerse bajo presión, tanto en players como
                en equipos y staff.
              </p>
            </motion.div>

            <motion.div className={styles.quoteWrap} variants={fadeLeft} custom={0.12}>
              <div className={styles.quoteLine} />
              <blockquote className={styles.quote}>
                <span className={styles.quoteMarkTop}>“</span>
                <p>
                  No se trata de motivarte más,
                  <br />
                  sino de entrenar tu mente para
                  <br />
                  rendir cuando más importa.
                </p>
                <span className={styles.quoteMarkBottom}>”</span>
              </blockquote>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.cardsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.article className={styles.card} variants={fadeUp} custom={0.08}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3C8.134 3 5 6.134 5 10c0 2.033.867 3.863 2.25 5.142V19a2 2 0 0 0 2 2h1.25a1.75 1.75 0 0 0 3.5 0H15a2 2 0 0 0 2-2v-3.858A6.965 6.965 0 0 0 19 10c0-3.866-3.134-7-7-7Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 10.25c.9-.9 1.55-.9 2.45 0s1.55.9 2.45 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className={styles.cardContent}>
                <h3>Enfoque cognitivo-conductual</h3>
                <p>Herramientas prácticas, aplicadas a contextos reales de exigencia.</p>
              </div>
            </motion.article>

            <motion.article className={styles.card} variants={fadeUp} custom={0.16}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M16.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM3.5 20.5a4.5 4.5 0 0 1 8.188-2.58M12.312 17.92A4.5 4.5 0 0 1 20.5 20.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={styles.cardContent}>
                <h3>Trabajo con players, equipos y staff</h3>
                <p>Del seguimiento individual a la construcción de dinámicas colectivas.</p>
              </div>
            </motion.article>

            <motion.article className={styles.card} variants={fadeUp} custom={0.24}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3.5 18.5 6v5.12c0 4.392-2.727 7.87-6.5 9.38-3.773-1.51-6.5-4.988-6.5-9.38V6L12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9.5 12 1.7 1.7L14.8 10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={styles.cardContent}>
                <h3>Procesos sostenibles bajo presión</h3>
                <p>Claridad, estructura y estabilidad para rendir cuando más importa.</p>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;