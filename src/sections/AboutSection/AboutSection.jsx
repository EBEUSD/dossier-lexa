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
  Soy psicóloga especializada en la mente competitiva. Trabajo desde un enfoque
  cognitivo-conductual para ayudarte a rendir con claridad, gestionar la presión
  y sostener tu mejor versión en el tiempo.
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
                <p>Herramientas prácticas, basadas en evidencia.</p>
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
                <p>De lo individual a lo colectivo, con objetivos claros.</p>
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
                <p>Resultados que se mantienen cuando el juego se vuelve real.</p>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;