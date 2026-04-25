import { motion } from "framer-motion";
import { HiOutlineChartBar, HiOutlineUser, HiOutlineUserGroup } from "react-icons/hi";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/images/hero-coach.png";
import { fadeUp, fadeLeft, zoomFade, staggerContainer } from "../../utils/motion";

function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.shell}>
        <div className={styles.leftDecorTop} />
        <div className={styles.leftDecorBottom} />
        <div className={styles.rightDecorBottom} />
        <div className={styles.rightVerticalLine} />

        <motion.div
          className={styles.glow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.35 }}
        />

        <div className={styles.content}>
          <motion.div
            className={styles.left}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.badge} variants={fadeUp} custom={0.1}>
              <span className={styles.badgeIcon}>✦</span>
              <span>Esports • Alto rendimiento • Psicología aplicada</span>
            </motion.div>

            <motion.h1 className={styles.title} variants={fadeUp} custom={0.18}>
              <span className={styles.light}>Mental &</span>
              <span className={styles.accent}>Performance Coach</span>
              <span className={styles.light}>para Esports</span>
            </motion.h1>

            <motion.p className={styles.description} variants={fadeUp} custom={0.26}>
              Acompaño a players, equipos y staff a desarrollar
              <span> claridad mental</span>,
              <span> estabilidad emocional</span> y
              <span> rendimiento</span> sostenible bajo presión.
            </motion.p>

            <motion.div className={styles.actions} variants={fadeUp} custom={0.34}>
              <a href="#contact" className={styles.primaryBtn}>
                <span className={styles.btnIcon}>✦</span>
                Contactarme
              </a>
            </motion.div>

            <motion.div className={styles.featureGrid} variants={fadeUp} custom={0.42}>
              <article className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <HiOutlineUser />
                </div>
                <div>
                  <h3>Sesiones individuales</h3>
                  <p>Atención 1:1</p>
                </div>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <HiOutlineUserGroup />
                </div>
                <div>
                  <h3>Trabajo con equipos</h3>
                  <p>Rosters & staff</p>
                </div>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <HiOutlineChartBar />
                </div>
                <div>
                  <h3>Seguimiento competitivo</h3>
                  <p>Medición & ajuste</p>
                </div>
              </article>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.right}
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            custom={0.28}
          >
            <div className={styles.imageStage}>
              <motion.div
                className={styles.imageBackdrop}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.div
                className={styles.imagePanel}
                initial={{ opacity: 0, scale: 0.985, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img src={heroImage} alt="Mental and performance coach para esports" />
              </motion.div>

              <motion.div
                className={styles.imageFloor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.48 }}
              />

              <motion.div
                className={styles.imageFloorGlow}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.56 }}
              />
            </div>

            <motion.div
              className={styles.branchTop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.72 }}
              transition={{ duration: 1, delay: 0.65 }}
            >
              <span />
              <span />
              <span />
              <span />
              <span />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;