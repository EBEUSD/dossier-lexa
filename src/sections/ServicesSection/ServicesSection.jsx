import { motion } from "framer-motion";
import { HiOutlineUserCircle, HiOutlineUsers } from "react-icons/hi";
import { RiHeadphoneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./ServicesSection.module.css";
import { fadeUp, fadeRight, fadeLeft } from "../../utils/motion";

function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.glowLeft} />
        <div className={styles.glowRight} />

        <div className={styles.container}>
          <motion.div
            className={styles.topRow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className={styles.headingBlock} variants={fadeRight} custom={0.04}>
              <span className={styles.eyebrow}>Servicios</span>
              <h2 className={styles.title}>Servicios</h2>
              <p className={styles.description}>
                Intervenciones a medida para elevar el rendimiento
                <br />
                mental y emocional en entornos competitivos.
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              className={styles.topLink}
              variants={fadeLeft}
              custom={0.1}
            >
              Ver todos los servicios
              <span>›</span>
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.cardsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.18 }}
          >
            <motion.div variants={fadeUp} custom={0.08}>
              <Link to="/servicios/equipos" className={styles.card}>
                <div className={styles.cardIcon}>
                  <HiOutlineUsers />
                </div>

                <div className={styles.cardBody}>
                  <h3>Equipos</h3>
                  <p>Cohésion, comunicación y cultura competitiva para rendir en conjunto.</p>
                </div>

                <div className={styles.cardArrow}>→</div>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.16}>
              <Link to="/servicios/players" className={styles.card}>
                <div className={styles.cardIcon}>
                  <HiOutlineUserCircle />
                </div>

                <div className={styles.cardBody}>
                  <h3>Players</h3>
                  <p>Entrenamiento mental personalizado para desarrollar tu mejor versión.</p>
                </div>

                <div className={styles.cardArrow}>→</div>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.24}>
              <Link to="/servicios/staff" className={styles.card}>
                <div className={styles.cardIcon}>
                  <RiHeadphoneLine />
                </div>

                <div className={styles.cardBody}>
                  <h3>Staff</h3>
                  <p>Acompañamiento para cuerpos técnicos y roles clave del rendimiento.</p>
                </div>

                <div className={styles.cardArrow}>→</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;