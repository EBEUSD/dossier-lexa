import { motion } from "framer-motion";
import {
  HiOutlineChartBar,
  HiOutlineClipboardList,
  HiOutlineLightBulb,
  HiOutlineRefresh,
} from "react-icons/hi";
import styles from "./MethodologySection.module.css";
import { fadeUp, fadeRight } from "../../utils/motion";

const steps = [
  {
    number: "01",
    icon: <HiOutlineClipboardList />,
    title: "Evaluación inicial",
    description:
      "Analizamos el contexto, los objetivos y los principales desafíos actuales.",
  },
  {
    number: "02",
    icon: <HiOutlineLightBulb />,
    title: "Plan personalizado",
    description:
      "Definimos prioridades, focos de trabajo y herramientas según la necesidad del proceso.",
  },
  {
    number: "03",
    icon: <HiOutlineChartBar />,
    title: "Intervención aplicada",
    description:
      "Trabajamos con sesiones, psicoeducación y recursos concretos llevados a la práctica.",
  },
  {
    number: "04",
    icon: <HiOutlineRefresh />,
    title: "Seguimiento y ajuste",
    description:
      "Medimos avances, revisamos bloqueos y ajustamos el proceso para sostener resultados.",
  },
];

const tags = ["Individual", "Grupal", "Online", "Seguimiento continuo"];

function MethodologySection() {
  return (
    <section id="methodology" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.topArc} />
        <div className={styles.topArcPoint} />
        <div className={styles.branchDecor} />

        <div className={styles.container}>
          <motion.div
            className={styles.headingBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div variants={fadeRight} custom={0.04}>
              <span className={styles.eyebrow}>Metodología</span>
              <h2 className={styles.title}>Metodología</h2>
              <p className={styles.description}>
                Trabajo con procesos claros y personalizados para acompañar el
                rendimiento mental, emocional y competitivo de players, equipos y staff.
              </p>
            </motion.div>
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
                custom={0.08 + index * 0.06}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.iconWrap}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className={styles.tagsRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                className={styles.tag}
                variants={fadeUp}
                custom={0.1 + index * 0.04}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MethodologySection;