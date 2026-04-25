import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineUserGroup,
} from "react-icons/hi";
import styles from "./ExperienceSection.module.css";
import { fadeUp, fadeRight, fadeLeft } from "../../utils/motion";

const experienceItems = [
  {
    period: "jul25–sep25",
    title: "Raven’s",
    subtitle: "Mental & performance coach",
    icon: <HiOutlineShieldCheck />,
    points: ["Mod & staff", "Entrevistas y clasificación de archivos", "Coach"],
  },
  {
    period: "jul25–sep25",
    title: "Radiant Shadows",
    subtitle: "Trabajo competitivo",
    icon: <HiOutlineUserGroup />,
    points: ["Trabajos integradores", "Sesiones individuales"],
  },
  {
    period: "oct25–abr26",
    title: "Aconis Main",
    subtitle: "Mental & performance coach",
    icon: <HiOutlineStar />,
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
    subtitle: "Mental & performance coach",
    icon: <HiOutlineChartBar />,
    points: [
      "Clases de psicoeducación",
      "Seguimiento de players",
      "Participación en preparación para torneos",
      "Resolución de conflictos",
    ],
  },
  {
    period: "oct25–abr26",
    title: "Aconis Academy",
    subtitle: "Mental & performance coach",
    icon: <HiOutlineAcademicCap />,
    points: [
      "Clases de psicoeducación",
      "Seguimiento de players",
      "Sesiones individuales",
      "Actividades integradoras",
    ],
  },
  {
    period: "oct25–abr26",
    title: "Aconis Soulfire",
    subtitle: "Mental & performance coach",
    icon: <HiOutlineAcademicCap />,
    points: [
      "Clases de psicoeducación",
      "Seguimiento de players",
      "Participación en preparación para torneos",
      "Resolución de conflictos",
    ],
  },
  {
    period: "dic25–actualidad",
    title: "Storm of Thorns (LAN)",
    subtitle: "Mental & performance coach",
    icon: <HiOutlineUserGroup />,
    points: [
      "Clases de psicoeducación",
      "Seguimiento de players",
      "Actividades integradoras",
      "Clases teóricas y prácticas",
      "Sesiones individuales y grupales",
      "Resolución de conflictos",
    ],
  },
];

function ExperienceSection() {
  const viewportRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [translateX, setTranslateX] = useState(0);

  const gap = cardsPerView === 1 ? 10 : 16;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 760) {
        setCardsPerView(1);
      } else if (width <= 1100) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, experienceItems.length - cardsPerView),
    [cardsPerView]
  );

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    const updateTranslate = () => {
      if (!viewportRef.current) return;

      const viewportWidth = viewportRef.current.offsetWidth;
      const cardWidth =
        cardsPerView === 1
          ? viewportWidth
          : (viewportWidth - gap * (cardsPerView - 1)) / cardsPerView;

      setTranslateX(currentIndex * (cardWidth + gap));
    };

    updateTranslate();
    window.addEventListener("resize", updateTranslate);

    return () => window.removeEventListener("resize", updateTranslate);
  }, [currentIndex, cardsPerView, gap]);

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
                Experiencia acompañando players, equipos y staff en procesos
                competitivos, sesiones individuales, trabajo grupal y preparación
                para torneos.
              </p>
            </motion.div>

            <motion.div className={styles.controls} variants={fadeLeft} custom={0.08}>
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
                disabled={currentIndex >= maxIndex}
                aria-label="Siguiente"
              >
                →
              </button>
            </motion.div>
          </motion.div>

          <div className={styles.viewport} ref={viewportRef}>
            <motion.div
              className={styles.track}
              animate={{ x: -translateX }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {experienceItems.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  className={styles.card}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  custom={0.08 + index * 0.04}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.period}>{item.period}</span>
                    <span className={styles.dot} />
                  </div>

                  <div className={styles.iconWrap}>{item.icon}</div>

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
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dotBtn} ${
                    currentIndex === index ? styles.dotBtnActive : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir a grupo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;