import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import styles from "./FAQSection.module.css";
import { fadeUp, fadeRight } from "../../utils/motion";

const faqItems = [
  {
    question: "¿Trabajás solo con esports?",
    answer:
      "Mi enfoque principal está orientado al alto rendimiento y a los entornos competitivos, especialmente en esports. Aun así, muchas de las herramientas que utilizo también sirven para procesos individuales vinculados al rendimiento, la claridad mental y la gestión de presión.",
  },
  {
    question: "¿Las sesiones son solo para players?",
    answer:
      "No. Trabajo con players, equipos completos y staff técnico. La intervención cambia según la necesidad: puede ser individual, grupal o enfocada en mejorar dinámicas de comunicación, liderazgo y sostén competitivo.",
  },
  {
    question: "¿Las sesiones son online o presenciales?",
    answer:
      "Actualmente el trabajo está pensado principalmente en formato online, lo que permite sostener procesos con mayor flexibilidad y continuidad, sin importar la ubicación del equipo o de la persona.",
  },
  {
    question: "¿Cómo sé si esto es para mí o para mi equipo?",
    answer:
      "Suele ser una buena opción si sienten que hay presión mal gestionada, bloqueos, dificultades para sostener el rendimiento, problemas de comunicación o necesidad de ordenar procesos internos. La primera charla sirve justamente para detectar eso con claridad.",
  },
  {
    question: "¿Cuánto dura un proceso?",
    answer:
      "Depende del objetivo y del contexto. Hay procesos más puntuales, enfocados en una necesidad concreta, y otros más sostenidos para acompañar cambios reales en el tiempo. La duración se define según el caso, no desde una fórmula rígida.",
  },
  {
    question: "¿Qué se trabaja en una primera sesión?",
    answer:
      "La primera sesión suele centrarse en entender el contexto, los objetivos, los principales desafíos actuales y qué necesita cambiar para que el proceso tenga sentido. A partir de ahí se ordena una propuesta de trabajo clara y realista.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.glowLeft} />
        <div className={styles.glowRight} />

        <div className={styles.container}>
          <motion.div
            className={styles.header}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div variants={fadeRight} custom={0.04}>
              <span className={styles.eyebrow}>FAQ</span>
              <h2 className={styles.title}>Preguntas frecuentes</h2>
              <p className={styles.description}>
                Algunas respuestas rápidas para entender mejor cómo trabajo
                <br />
                y cuándo puede tener sentido este acompañamiento.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.article
                  key={item.question}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                  variants={fadeUp}
                  custom={0.08 + index * 0.05}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>

                    <span className={styles.iconWrap}>
                      {isOpen ? <HiOutlineMinus /> : <HiOutlinePlus />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className={styles.answerWrap}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                      >
                        <div className={styles.answer}>
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;