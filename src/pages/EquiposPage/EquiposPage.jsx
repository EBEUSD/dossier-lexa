import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineChatAlt2,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUsers,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./EquiposPage.module.css";
import { fadeUp, fadeLeft, fadeRight } from "../../utils/motion";

const workItems = [
  {
    icon: <HiOutlineUsers />,
    title: "Cohesión grupal",
    description:
      "Un equipo alineado que se entiende, se apoya y compite como una unidad.",
  },
  {
    icon: <HiOutlineChatAlt2 />,
    title: "Comunicación efectiva",
    description:
      "Conversaciones más claras para mejorar decisiones, confianza y ejecución.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Confianza competitiva",
    description:
      "Mentalidad colectiva sólida para rendir bajo presión y sostener el nivel.",
  },
  {
    icon: <HiOutlineAcademicCap />,
    title: "Cultura de trabajo",
    description:
      "Hábitos, valores y dinámicas que ordenan el día a día del roster.",
  },
];

const processItems = [
  {
    number: "01",
    icon: <HiOutlineUsers />,
    title: "Diagnóstico",
    description:
      "Analizo la dinámica del equipo, su contexto actual y los desafíos principales.",
  },
  {
    number: "02",
    icon: <HiOutlineSparkles />,
    title: "Plan personalizado",
    description:
      "Diseñamos un plan a medida con objetivos claros, medibles y realistas.",
  },
  {
    number: "03",
    icon: <HiOutlineChatAlt2 />,
    title: "Intervención",
    description:
      "Trabajo en sesiones grupales e individuales con foco práctico y aplicado.",
  },
  {
    number: "04",
    icon: <HiOutlineChartBar />,
    title: "Seguimiento y ajuste",
    description:
      "Medimos progreso, detectamos bloqueos y ajustamos el proceso cuando hace falta.",
  },
];

const includeItems = [
  "Sesiones grupales e individuales",
  "Herramientas prácticas aplicables",
  "Materiales y recursos de trabajo",
  "Reporte de progreso y recomendaciones",
];

const resultItems = [
  {
    icon: <HiOutlineSparkles />,
    title: "Claridad grupal",
    description:
      "Roles, prioridades y objetivos compartidos para avanzar en la misma dirección.",
  },
  {
    icon: <HiOutlineChatAlt2 />,
    title: "Mejor comunicación",
    description:
      "Interacciones más útiles que fortalecen la confianza y la toma de decisiones.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Procesos sostenibles",
    description:
      "Estructuras de trabajo que mantienen el rendimiento en el tiempo.",
  },
];

function EquiposPage() {
  return (
    <section className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.glowTop} />
        <div className={styles.glowBottom} />

        <div className={styles.container}>
          <motion.header
            className={styles.hero}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeRight} custom={0.04}>
              <Link to="/" className={styles.backLink}>
                ← Volver a Servicios
              </Link>
            </motion.div>

           {/*  <motion.span
              className={styles.eyebrow}
              variants={fadeUp}
              custom={0.08}
            >
              Servicio 01
            </motion.span> */}

            <motion.h1 className={styles.title} variants={fadeUp} custom={0.12}>
              Equipos
            </motion.h1>

            <motion.p
              className={styles.description}
              variants={fadeUp}
              custom={0.16}
            >
              Acompaño a equipos y rosters para fortalecer la cohesión,
              mejorar la comunicación y sostener un rendimiento más estable
              bajo presión.
            </motion.p>
          </motion.header>

          <div className={styles.contentStack}>
            <section className={styles.overviewGrid}>
              <motion.div
                className={styles.panel}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.18 }}
              >
                <motion.div
                  className={styles.sectionHeader}
                  variants={fadeRight}
                  custom={0.04}
                >
                  <h2 className={styles.sectionTitle}>
                    Qué trabajo <span>con equipos</span>
                  </h2>
                  <p className={styles.sectionText}>
                    Intervengo sobre los pilares que más impactan en el
                    funcionamiento diario y competitivo del roster.
                  </p>
                </motion.div>

                <div className={styles.workGrid}>
                  {workItems.map((item, index) => (
                    <motion.article
                      key={item.title}
                      className={styles.workCard}
                      variants={fadeUp}
                      custom={0.08 + index * 0.06}
                    >
                      <div className={styles.iconBox}>{item.icon}</div>
                      <div className={styles.cardContent}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className={styles.panel}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.18 }}
              >
                <motion.div
                  className={styles.sectionHeader}
                  variants={fadeLeft}
                  custom={0.04}
                >
                  <h2 className={styles.sectionTitle}>
                    Cómo es el <span>proceso</span>
                  </h2>
                  <p className={styles.sectionText}>
                    Un recorrido claro, simple y adaptable a la realidad de cada
                    equipo.
                  </p>
                </motion.div>

                <div className={styles.processList}>
                  {processItems.map((item, index) => (
                    <motion.article
                      key={item.number}
                      className={styles.processItem}
                      variants={fadeUp}
                      custom={0.08 + index * 0.06}
                    >
                      <div className={styles.processNumber}>{item.number}</div>
                      <div className={styles.processIcon}>{item.icon}</div>
                      <div className={styles.processContent}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </section>

            <motion.section
              className={styles.includeSection}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                className={styles.sectionHeaderCompact}
                variants={fadeRight}
                custom={0.04}
              >
                <h2 className={styles.sectionTitle}>
                  Qué <span>incluye</span>
                </h2>
              </motion.div>

              <div className={styles.includeGrid}>
                {includeItems.map((item, index) => (
                  <motion.div
                    key={item}
                    className={styles.includeTag}
                    variants={fadeUp}
                    custom={0.08 + index * 0.05}
                  >
                    <span className={styles.includeCheck}>✓</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className={styles.resultsSection}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                className={styles.sectionHeader}
                variants={fadeRight}
                custom={0.04}
              >
                <h2 className={styles.sectionTitle}>
                  Qué puede <span>mejorar</span>
                </h2>
                <p className={styles.sectionText}>
                  El foco está puesto en que el equipo funcione mejor, compita
                  con más claridad y sostenga procesos sanos.
                </p>
              </motion.div>

              <div className={styles.resultsGrid}>
                {resultItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className={styles.resultCard}
                    variants={fadeUp}
                    custom={0.08 + index * 0.06}
                  >
                    <div className={styles.iconBox}>{item.icon}</div>
                    <div className={styles.cardContent}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            <motion.section
              className={styles.ctaCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                className={styles.ctaLeft}
                variants={fadeRight}
                custom={0.04}
              >
                <div className={styles.ctaIcon}>
                  <HiOutlineAcademicCap />
                </div>

                <div className={styles.ctaContent}>
                  <h2>
                    ¿Listo para <span>potenciar a tu equipo?</span>
                  </h2>
                  <p>
                    Agendemos una reunión y diseñemos un proceso acorde a las
                    necesidades reales de tu roster.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.ctaRight}
                variants={fadeLeft}
                custom={0.08}
              >
                <a href="#contact" className={styles.ctaButton}>
                  Agendar una reunión
                  <span>↗</span>
                </a>
                <p className={styles.ctaNote}>Confidencialidad garantizada.</p>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquiposPage;