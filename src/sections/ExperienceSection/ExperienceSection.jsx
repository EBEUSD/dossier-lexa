import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ExperienceSection.module.css";
import { fadeUp, fadeRight } from "../../utils/motion";

const experienceItems = [
  {
    period: "jul25–sep25",
    title: "Raven’s",
    subtitle: "Mental & performance coach",
    points: [
      "Mod & staff",
      "Entrevistas y clasificación de archivos",
      "Coach",
    ],
  },
  {
    period: "jul25–sep25",
    title: "Radiant Shadows",
    subtitle: "Trabajo competitivo",
    points: [
      "Trabajos integradores",
      "Sesiones individuales",
    ],
  },
  {
    period: "oct25–abr26",
    title: "Aconis Esports Main",
    subtitle: "Mental & performance coach",
    points: [
      "Clases de psicoeducación",
      "Seguimiento de players",
      "Sesiones individuales",
      "Actividades integradoras",
    ],
  },
  {
    period: "oct25–abr26",
    title: "Aconis Ignis",
    subtitle: "Trabajo con roster y staff",
    points: [
      "Participación en preparación para torneos",
      "Resolución de conflictos",
      "Mod & staff",
    ],
  },
  {
    period: "oct25–abr26",
    title: "Aconis Academy / Soulfire",
    subtitle: "Desarrollo competitivo",
    points: [
      "Clases teóricas y prácticas",
      "Seguimiento individual",
      "Construcción de hábitos competitivos",
    ],
  },
  {
    period: "dic25–now",
    title: "Storm of Thorns (LAN)",
    subtitle: "Mental & performance coach",
    points: [
      "Clases de psicoeducación",
      "Seguimiento de players",
      "Actividades integradoras",
      "Staff",
      "Resolución de conflictos",
    ],
  },
];

function ExperienceSection() {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 760) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 1100) {
        setItemsPerView(2);
      } else if (window.innerWidth <= 1380) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(experienceItems.length - itemsPerView, 0);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex]);

  const maxIndex = Math.max(experienceItems.length - itemsPerView, 0);

  const pages = useMemo(() => {
    const total = Math.max(experienceItems.length - itemsPerView + 1, 1);
    return Array.from({ length: total }, (_, i) => i);
  }, [itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.leftDecor} />
        <div className={styles.rightGlow} />

        <div className={styles.container}>
          <motion.div
            className={styles.topRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className={styles.headingBlock} variants={fadeRight} custom={0.04}>
              <span className={styles.eyebrow}>Experiencia</span>
              <h2 className={styles.title}>Experiencia</h2>
              <p className={styles.description}>
                Años acompañando a personas y equipos
                <br />
                a rendir al máximo bajo presión.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.carouselWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            <div className={styles.trackOuter}>
              <motion.div
                className={styles.track}
                animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {experienceItems.map((item, index) => (
                  <motion.article
                    key={`${item.title}-${index}`}
                    className={styles.card}
                    variants={fadeUp}
                    custom={0.08 + index * 0.04}
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.period}>{item.period}</span>
                      <span className={styles.periodDot} />
                    </div>

                    <div className={styles.iconWrap}>
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

                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardSubtitle}>{item.subtitle}</p>

                    <ul className={styles.pointsList}>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            <div className={styles.bottomNav}>
              <div className={styles.dots}>
                {pages.map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={`${styles.dot} ${currentIndex === page ? styles.activeDot : ""}`}
                    onClick={() => setCurrentIndex(page)}
                    aria-label={`Ir a slide ${page + 1}`}
                  />
                ))}
              </div>

              <div className={styles.controls}>
                <button
                  type="button"
                  className={styles.controlBtn}
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Anterior"
                >
                  ←
                </button>

                <button
                  type="button"
                  className={styles.controlBtn}
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  aria-label="Siguiente"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;