import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineChatAlt2,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./StaffPage.module.css";
import { fadeUp, fadeLeft, fadeRight } from "../../utils/motion";

const heroStats = [
  {
    icon: <HiOutlineAcademicCap />,
    text: "Acompañamiento especializado",
  },
  {
    icon: <HiOutlineUserGroup />,
    text: "Enfoque práctico y confidencial",
  },
  {
    icon: <HiOutlineShieldCheck />,
    text: "Resultados sostenibles en el tiempo",
  },
];

const workItems = [
  {
    icon: <HiOutlineAcademicCap />,
    title: "Liderazgo del staff",
    description:
      "Fortalecemos el rol del cuerpo técnico para liderar con claridad, coherencia y criterio.",
  },
  {
    icon: <HiOutlineChatAlt2 />,
    title: "Comunicación interna",
    description:
      "Mejoramos la comunicación entre miembros del staff y su vínculo con el equipo.",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Gestión de conflictos",
    description:
      "Abordamos tensiones y diferencias para convertirlas en acuerdos más funcionales.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Sostén del rendimiento",
    description:
      "Diseñamos hábitos y rutinas que sostienen el foco, la energía y el desempeño colectivo.",
  },
];

const processItems = [
  {
    number: "01",
    icon: <HiOutlineSparkles />,
    title: "Diagnóstico inicial",
    description:
      "Entendemos el contexto, objetivos y desafíos actuales del staff.",
  },
  {
    number: "02",
    icon: <HiOutlineAcademicCap />,
    title: "Diseño del plan",
    description:
      "Creamos un plan de trabajo a medida con objetivos claros y prácticos.",
  },
  {
    number: "03",
    icon: <HiOutlineChatAlt2 />,
    title: "Acompañamiento",
    description:
      "Sesiones de trabajo, herramientas y seguimiento personalizado.",
  },
  {
    number: "04",
    icon: <HiOutlineChartBar />,
    title: "Integración y seguimiento",
    description:
      "Transferimos lo aprendido y medimos avances para sostener resultados.",
  },
];

const valueItems = [
  {
    icon: <HiOutlineUserGroup />,
    title: "Staff nuevo",
    description:
      "Cuando el cuerpo técnico se está formando o llega junto a un nuevo proyecto.",
  },
  {
    icon: <HiOutlineChatAlt2 />,
    title: "Conflicto interno",
    description:
      "Cuando hay tensiones que afectan la dinámica y el rendimiento del equipo.",
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Mejora de estructura",
    description:
      "Cuando buscan profesionalizar procesos, roles y la forma de trabajar del staff.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Mayor alineación",
    description: "Roles claros y objetivos compartidos.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Decisiones más claras",
    description: "Mejor coordinación y resolución en el día a día.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Mejor sostén del equipo",
    description: "Ambiente de trabajo sano y rendimiento sostenido.",
  },
];

function StaffPage() {
  return (
    <section className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.glowTop} />
        <div className={styles.glowBottom} />

        <div className={styles.container}>
          <motion.header className={styles.hero} initial="hidden" animate="visible">
            <div className={styles.heroGrid}>
              <motion.div className={styles.heroLeft} variants={fadeRight} custom={0.04}>
               {/*  <span className={styles.eyebrow}>Servicio 03</span> */}
                <h1 className={styles.title}>Staff</h1>
                <p className={styles.description}>
                  Acompañamiento a coaches, managers y cuerpos técnicos para fortalecer
                  su liderazgo, comunicación y capacidad de sostener el rendimiento del equipo.
                </p>

                <Link to="/" className={styles.backLink}>
                  ← Volver a Servicios
                </Link>
              </motion.div>

              <motion.div className={styles.heroRight} variants={fadeLeft} custom={0.1}>
                <div className={styles.heroStats}>
                  {heroStats.map((item) => (
                    <article key={item.text} className={styles.statCard}>
                      <div className={styles.statIcon}>{item.icon}</div>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.header>

          <div className={styles.contentStack}>
            <section className={styles.topGrid}>
              <motion.div
                className={styles.sectionBlock}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.18 }}
              >
                <motion.div className={styles.sectionHeader} variants={fadeRight} custom={0.04}>
                  <h2 className={styles.sectionTitle}>
                    Áreas de <span>trabajo</span>
                  </h2>
                  <p className={styles.sectionText}>
                    Intervengo donde el staff más impacta sobre el orden, la lectura y el
                    funcionamiento global del equipo.
                  </p>
                </motion.div>

                <div className={styles.cardsGridTwo}>
                  {workItems.map((item, index) => (
                    <motion.article
                      key={item.title}
                      className={styles.infoCard}
                      variants={fadeUp}
                      custom={0.08 + index * 0.05}
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
                className={styles.sectionBlock}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.18 }}
              >
                <motion.div className={styles.sectionHeader} variants={fadeLeft} custom={0.04}>
                  <h2 className={styles.sectionTitle}>
                    Formato de <span>intervención</span>
                  </h2>
                  <p className={styles.sectionText}>
                    Un trabajo progresivo para ordenar, fortalecer y sostener el rol del staff
                    dentro del proceso competitivo.
                  </p>
                </motion.div>

                <div className={styles.processList}>
                  {processItems.map((item, index) => (
                    <motion.article
                      key={item.number}
                      className={styles.processItem}
                      variants={fadeUp}
                      custom={0.08 + index * 0.05}
                    >
                      <div className={styles.processNumber}>{item.number}</div>
                      <div className={styles.processIcon}>{item.icon}</div>
                      <div className={styles.cardContent}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </section>

            <motion.section
              className={styles.sectionBlock}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.18 }}
            >
              <motion.div className={styles.sectionHeader} variants={fadeRight} custom={0.04}>
                <h2 className={styles.sectionTitle}>
                  Cuándo aporta más <span>valor</span>
                </h2>
                <p className={styles.sectionText}>
                  Situaciones donde el trabajo con staff suele generar más orden, claridad y sostén.
                </p>
              </motion.div>

              <div className={styles.cardsGridThree}>
                {valueItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className={styles.infoCard}
                    variants={fadeUp}
                    custom={0.08 + index * 0.05}
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
              <motion.div className={styles.ctaLeft} variants={fadeRight} custom={0.04}>
                <div className={styles.ctaLeaf} />
                <div className={styles.ctaContent}>
                  <span className={styles.ctaEyebrow}>¿Lista para trabajar juntos?</span>
                  <h2>Demos el siguiente paso.</h2>
                  <p>
                    Hablemos de tu staff, tus desafíos y cómo puedo acompañarte para construir
                    un equipo técnico más sólido y enfocado.
                  </p>
                </div>
              </motion.div>

              <motion.div className={styles.ctaRight} variants={fadeLeft} custom={0.08}>
                <div className={styles.contactButtons}>
                  <a href="mailto:llexit505@gmail.com" className={styles.contactBtn}>
                    <HiOutlineMail />
                    Enviar correo
                  </a>

              {/*     <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactBtn}
                  >
                    <RiWhatsappLine />
                    Escribir en WhatsApp
                  </a> */}

               {/*    <a href="#contact" className={styles.contactBtn}>
                    <HiOutlinePhone />
                    Agendar llamada
                  </a> */}
                </div>

                <p className={styles.ctaNote}>
                  Confidencialidad garantizada en cada proceso.
                </p>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StaffPage;