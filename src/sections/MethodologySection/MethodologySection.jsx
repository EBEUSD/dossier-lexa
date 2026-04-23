import { motion } from "framer-motion";
import styles from "./MethodologySection.module.css";
import { fadeUp, fadeRight } from "../../utils/motion";

const steps = [
  {
    number: "01",
    title: "Evaluación inicial",
    description:
      "Analizamos tu situación actual, objetivos y desafíos para entender tu punto de partida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5c1.48 0 2.68 1.2 2.68 2.68 0 .23-.03.45-.08.66a2.9 2.9 0 0 1 2.84 2.9c0 .44-.1.85-.28 1.22a2.92 2.92 0 0 1 1.9 2.73A2.92 2.92 0 0 1 16.14 17c-.2 0-.39-.02-.57-.06.05.2.08.42.08.64A2.58 2.58 0 0 1 13.07 20H10.9a2.58 2.58 0 0 1-2.58-2.58c0-.22.03-.43.08-.64-.18.04-.37.06-.57.06A2.92 2.92 0 0 1 4.9 13.7c0-1.2.73-2.23 1.78-2.67a2.9 2.9 0 0 1 2.56-4.19c.09 0 .18 0 .27.01A2.68 2.68 0 0 1 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 8.5v7M8.8 12H15.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plan personalizado",
    description:
      "Diseñamos un plan a tu medida con estrategias mentales y herramientas prácticas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 12 16.5 7.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16.5 7.5h-3.2M16.5 7.5v3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12a2.2 2.2 0 1 0 0 .01V12Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Entrenamiento",
    description:
      "Trabajamos en sesiones individuales o grupales con enfoque aplicado y práctico.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M5 20a7 7 0 0 1 14 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Implementación",
    description:
      "Integramos las estrategias en tu día a día y en la competencia.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 16.5 8 12.5l3 3 5.5-6 3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 9.5h3v3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Seguimiento y ajuste",
    description:
      "Medimos tu progreso y ajustamos el plan para asegurar resultados sostenibles.",
    icon: (
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
    ),
  },
];

function MethodologySection() {
  return (
    <section id="methodology" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.topArc} />
        <div className={styles.topArcPoint} />
        <div className={styles.branchDecor}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className={styles.container}>
          <motion.div
            className={styles.headingBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.span className={styles.eyebrow} variants={fadeRight} custom={0.04}>
              Metodología
            </motion.span>

            <motion.h2 className={styles.title} variants={fadeRight} custom={0.1}>
              Metodología
            </motion.h2>

            <motion.p className={styles.description} variants={fadeRight} custom={0.16}>
              Un proceso claro y personalizado para transformar
              <br />
              tu mentalidad y tu rendimiento en el juego y en la vida.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.stepsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                className={styles.stepCard}
                variants={fadeUp}
                custom={0.08 + index * 0.08}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.iconWrap}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MethodologySection;