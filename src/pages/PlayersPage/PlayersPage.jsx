import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUser,
} from "react-icons/hi";
import { RiFocus2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./PlayersPage.module.css";
import { fadeUp, fadeLeft, fadeRight } from "../../utils/motion";

const focusTags = [
  { icon: <RiFocus2Line />, label: "Foco" },
  { icon: <HiOutlineShieldCheck />, label: "Presión" },
  { icon: <HiOutlineUser />, label: "Confianza" },
  { icon: <HiOutlineAcademicCap />, label: "Hábitos" },
];

const helpItems = [
  {
    icon: <HiOutlineShieldCheck />,
    title: "Gestión de presión",
    description:
      "Aprendemos a mantener la calma y tomar mejores decisiones en momentos clave.",
  },
  {
    icon: <HiOutlineUser />,
    title: "Confianza competitiva",
    description:
      "Construimos seguridad interna para rendir al máximo sin depender del resultado.",
  },
  {
    icon: <RiFocus2Line />,
    title: "Enfoque y consistencia",
    description:
      "Entrenamos tu atención y disciplina para sostener tu mejor versión cada día.",
  },
  {
    icon: <HiOutlineAcademicCap />,
    title: "Hábitos de alto desempeño",
    description:
      "Integramos rutinas y hábitos mentales que potencian tu rendimiento a largo plazo.",
  },
];

const processItems = [
  {
    number: "01",
    title: "Evaluación inicial",
    description:
      "Conocemos tu contexto, objetivos y desafíos mentales actuales.",
  },
  {
    number: "02",
    title: "Plan personalizado",
    description:
      "Diseñamos un plan a tu medida con estrategias y herramientas prácticas.",
  },
  {
    number: "03",
    title: "Entrenamiento mental",
    description:
      "Sesiones individuales enfocadas en desarrollar habilidades clave.",
  },
  {
    number: "04",
    title: "Seguimiento y ajuste",
    description:
      "Medimos tu progreso y ajustamos el plan para asegurar resultados.",
  },
];

const idealItems = [
  {
    icon: <HiOutlineAcademicCap />,
    title: "Tryouts y selecciones",
    description:
      "Llegá mentalmente preparado y destacá cuando más importa.",
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Competencias clave",
    description:
      "Mantené la calma, el foco y la confianza en cada partida.",
  },
  {
    icon: <HiOutlineLightBulb />,
    title: "Bloqueos o bajones",
    description:
      "Superá momentos de duda, frustración o falta de motivación.",
  },
];

const resultItems = [
  {
    icon: <HiOutlineSparkles />,
    title: "Mayor claridad mental",
    description: "Tomás mejores decisiones con seguridad.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Estabilidad emocional",
    description: "Gestionás tus emociones y rendís mejor.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Rendimiento sostenible",
    description: "Construís hábitos que impulsan tu crecimiento.",
  },
];

function PlayersPage() {
  return (
    <section className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.glowTop} />
        <div className={styles.glowBottom} />
        <div className={styles.topArc} />
        <div className={styles.topArcDot} />
        <div className={styles.rightLeaf} />

        <div className={styles.container}>
          <motion.header className={styles.hero} initial="hidden" animate="visible">
            <motion.div className={styles.heroLeft} variants={fadeRight} custom={0.04}>
              <Link to="/" className={styles.backLink}>
                ← Volver a Servicios
              </Link>

              <span className={styles.eyebrow}>Servicio 02</span>
              <h1 className={styles.title}>Players</h1>
              <p className={styles.description}>
                Acompañamiento individual para fortalecer tu mente,
                mejorar tu rendimiento y competir con confianza.
              </p>

              <div className={styles.tagsRow}>
                {focusTags.map((tag) => (
                  <div key={tag.label} className={styles.tag}>
                    <span className={styles.tagIcon}>{tag.icon}</span>
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.header>

          <div className={styles.contentStack}>
            <section className={styles.mainGrid}>
              <motion.div
                className={styles.panel}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.18 }}
              >
                <motion.div className={styles.sectionHeader} variants={fadeRight} custom={0.04}>
                  <h2 className={styles.sectionTitle}>
                    En qué te <span>ayudo</span>
                  </h2>
                </motion.div>

                <div className={styles.helpGrid}>
                  {helpItems.map((item, index) => (
                    <motion.article
                      key={item.title}
                      className={styles.helpCard}
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
                <motion.div className={styles.sectionHeader} variants={fadeLeft} custom={0.04}>
                  <h2 className={styles.sectionTitle}>
                    Cómo <span>trabajamos</span>
                  </h2>
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
              className={styles.panel}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.18 }}
            >
              <motion.div className={styles.sectionHeader} variants={fadeRight} custom={0.04}>
                <h2 className={styles.sectionTitle}>
                  Ideal <span>para</span>
                </h2>
              </motion.div>

              <div className={styles.idealGrid}>
                {idealItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className={styles.idealCard}
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
              className={styles.resultBar}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {resultItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={styles.resultItem}
                  variants={fadeUp}
                  custom={0.08 + index * 0.05}
                >
                  <div className={styles.resultIcon}>{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </motion.section>

            <motion.section
              className={styles.ctaCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div className={styles.ctaLeft} variants={fadeRight} custom={0.04}>
                <div className={styles.ctaIcon}>
                  <HiOutlineSparkles />
                </div>

                <div className={styles.ctaContent}>
                  <h2>
                    Vamos a potenciar <span>tu mejor versión.</span>
                  </h2>
                  <p>Agendá tu sesión y empezá a entrenar tu mente con propósito.</p>
                </div>
              </motion.div>

              <motion.div className={styles.ctaRight} variants={fadeLeft} custom={0.08}>
                <a href="#contact" className={styles.primaryBtn}>
                  <span className={styles.btnIcon}>
                    <HiOutlineAcademicCap />
                  </span>
                  Agendar sesión
                </a>

                <a href="#methodology" className={styles.secondaryBtn}>
                  Ver metodología
                  <span>↗</span>
                </a>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayersPage;