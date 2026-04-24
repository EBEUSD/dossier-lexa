import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import fotoLove1 from "../../assets/te-amo/foto-love-1.jpg";
import fotoLove2 from "../../assets/te-amo/foto-love-2.jpg";
import fotoLove3 from "../../assets/te-amo/foto-love-3.jpg";
import fotoLove4 from "../../assets/te-amo/foto-love-4.jpg";

const loveText = `Lexa, te amo con cada partícula de mi ser, como jamás sentí que podía amar. Me enseñaste a hacerlo, y quiero que por el resto de la eternidad seas la única que esté a mi lado. Gracias por todo, te amo.`;

const floatingPhotos = [
  {
    id: 1,
    src: fotoLove1,
    alt: "Foto especial 1",
    style: {
      top: "7%",
      left: "5%",
      width: "clamp(120px, 14vw, 190px)",
      rotate: "-7deg",
      opacity: 0.94,
      zIndex: 2,
    },
    mobile: true,
  },
  {
    id: 2,
    src: fotoLove2,
    alt: "Foto especial 2",
    style: {
      bottom: "8%",
      right: "6%",
      width: "clamp(135px, 15vw, 210px)",
      rotate: "6deg",
      opacity: 0.96,
      zIndex: 2,
    },
    mobile: true,
  },
  {
    id: 3,
    src: fotoLove3,
    alt: "Foto especial 3",
    style: {
      top: "12%",
      right: "8%",
      width: "clamp(95px, 10vw, 145px)",
      rotate: "9deg",
      opacity: 0.6,
      zIndex: 1,
    },
    mobile: false,
  },
  {
    id: 4,
    src: fotoLove4,
    alt: "Foto especial 4",
    style: {
      bottom: "11%",
      left: "8%",
      width: "clamp(100px, 11vw, 150px)",
      rotate: "-10deg",
      opacity: 0.55,
      zIndex: 1,
    },
    mobile: false,
  },
];

function TeAmoPage() {
  const [bursts, setBursts] = useState([]);
  const [showExtra, setShowExtra] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 4 + Math.random() * 10,
        duration: 7 + Math.random() * 8,
        delay: Math.random() * 6,
        opacity: 0.18 + Math.random() * 0.45,
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 2.8 + Math.random() * 2.5,
      })),
    []
  );

  const handleBurst = () => {
    const id = Date.now() + Math.random();
    const newBurst = {
      id,
      hearts: Array.from({ length: 12 }, (_, i) => ({
        id: `${id}-${i}`,
        x: (Math.random() - 0.5) * 260,
        y: -80 - Math.random() * 240,
        rotate: (Math.random() - 0.5) * 80,
        scale: 0.7 + Math.random() * 0.8,
        delay: Math.random() * 0.18,
      })),
    };

    setBursts((prev) => [...prev, newBurst]);

    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 2200);
  };

  return (
    <div style={styles.page}>
      <style>{responsiveStyles}</style>

      <div style={styles.backgroundGlowA} />
      <div style={styles.backgroundGlowB} />
      <div style={styles.backgroundGlowC} />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          style={{
            ...styles.particle,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -80, -160, -240],
            x: [0, 10, -8, 12],
            opacity: [0, particle.opacity, particle.opacity * 0.7, 0],
            scale: [0.7, 1, 1.1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {stars.map((star) => (
        <motion.span
          key={star.id}
          style={{
            ...styles.star,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.2, 1, 0.3, 1, 0.2],
            scale: [0.9, 1.15, 0.95, 1.1, 0.9],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.span>
      ))}

      {floatingPhotos.map((photo) => (
        <motion.div
          key={photo.id}
          className={photo.mobile ? "love-photo mobile-visible" : "love-photo desktop-only"}
          style={{
            ...styles.photoFrame,
            ...photo.style,
          }}
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: photo.style.opacity, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 + photo.id * 0.08 }}
          whileHover={{ y: -6, rotate: photo.style.rotate, scale: 1.02 }}
        >
          <img src={photo.src} alt={photo.alt} style={styles.photoImage} />
        </motion.div>
      ))}

      <AnimatePresence>
        {bursts.map((burst) =>
          burst.hearts.map((heart) => (
            <motion.div
              key={heart.id}
              style={styles.burstHeart}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.4, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: heart.x,
                y: heart.y,
                scale: heart.scale,
                rotate: heart.rotate,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.9,
                delay: heart.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ❤
            </motion.div>
          ))
        )}
      </AnimatePresence>

      <main style={styles.wrapper}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={styles.frame}
        >
          <div style={styles.frameInner}>
            <motion.div
              style={styles.badge}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              Para Lexa
            </motion.div>

            <motion.h1
              style={styles.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              te amo
            </motion.h1>

            <motion.div
              style={styles.ornament}
              animate={{ scaleX: [0.96, 1, 0.96], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.p
              style={styles.letter}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.28 }}
            >
              {loveText}
            </motion.p>

            <motion.div
              style={styles.actions}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <button
                type="button"
                style={styles.primaryButton}
                onClick={handleBurst}
              >
                Tocame ❤
              </button>

              <button
                type="button"
                style={styles.secondaryButton}
                onClick={() => setShowExtra((prev) => !prev)}
              >
                {showExtra ? "Ocultar secreto" : "Abrir secretito"}
              </button>
            </motion.div>

            <AnimatePresence>
              {showExtra && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={styles.secretBox}
                >
                  <p style={styles.secretText}>
                    Si alguna vez dudás, volvé a esta carta:
                    <br />
                    te elijo a vos, hoy, mañana y todas las veces.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              style={styles.signature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.55 }}
            >
              Con todo mi amor Dami💕
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

const responsiveStyles = `
  .love-photo {
    position: absolute;
    border-radius: 22px;
    overflow: hidden;
    backdrop-filter: blur(8px);
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.35),
      0 0 0 1px rgba(255,255,255,0.05) inset;
  }

  .mobile-visible {
    display: block;
  }

  .desktop-only {
    display: block;
  }

  @media (max-width: 900px) {
    .desktop-only {
      display: none;
    }
  }

  @media (max-width: 680px) {
    .love-photo.mobile-visible {
      width: 92px !important;
      border-radius: 16px;
      opacity: 0.42 !important;
    }

    .love-photo.mobile-visible:nth-of-type(1) {
      top: 4% !important;
      left: 4% !important;
    }

    .love-photo.mobile-visible:nth-of-type(2) {
      bottom: 6% !important;
      right: 4% !important;
    }
  }
`;

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    background:
      "radial-gradient(circle at 20% 20%, rgba(172, 103, 255, 0.18), transparent 24%), radial-gradient(circle at 80% 18%, rgba(255, 126, 201, 0.14), transparent 22%), linear-gradient(180deg, #090713 0%, #090a18 48%, #080912 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 20px",
  },
  wrapper: {
    position: "relative",
    zIndex: 3,
    width: "100%",
    maxWidth: "1080px",
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    position: "relative",
    width: "100%",
    minHeight: "min(860px, calc(100vh - 64px))",
    borderRadius: "34px",
    padding: "1px",
    background:
      "linear-gradient(135deg, rgba(231, 201, 255, 0.5), rgba(174, 113, 255, 0.2), rgba(255, 164, 214, 0.3))",
    boxShadow:
      "0 28px 90px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.02) inset",
  },
  frameInner: {
    position: "relative",
    minHeight: "min(858px, calc(100vh - 66px))",
    borderRadius: "33px",
    background:
      "linear-gradient(180deg, rgba(17, 13, 30, 0.96), rgba(11, 10, 23, 0.98))",
    padding: "clamp(28px, 5vw, 64px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "38px",
    padding: "0 16px",
    borderRadius: "999px",
    border: "1px solid rgba(207, 163, 255, 0.28)",
    background: "rgba(180, 120, 255, 0.08)",
    color: "#d7bbff",
    fontSize: "0.86rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "24px",
    backdropFilter: "blur(8px)",
  },
  title: {
    margin: 0,
    color: "#f7f0ff",
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontStyle: "italic",
    fontWeight: 500,
    fontSize: "clamp(3.4rem, 8vw, 6.4rem)",
    lineHeight: 0.92,
    letterSpacing: "-0.03em",
    textShadow: "0 0 28px rgba(206, 151, 255, 0.18)",
  },
  ornament: {
    width: "min(220px, 48vw)",
    height: "2px",
    borderRadius: "999px",
    marginTop: "24px",
    marginBottom: "28px",
    background:
      "linear-gradient(90deg, transparent, rgba(219, 175, 255, 0.95), transparent)",
    boxShadow: "0 0 16px rgba(206, 151, 255, 0.24)",
  },
  letter: {
    margin: 0,
    maxWidth: "760px",
    color: "#efe7fb",
    fontSize: "clamp(1.08rem, 2vw, 1.45rem)",
    lineHeight: 1.95,
    textWrap: "pretty",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
    marginTop: "34px",
  },
  primaryButton: {
    minHeight: "50px",
    padding: "0 22px",
    borderRadius: "15px",
    border: "none",
    background: "linear-gradient(135deg, #bb8eff, #ff9cd0)",
    color: "#1e1027",
    fontSize: "0.98rem",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 14px 32px rgba(180, 110, 255, 0.28)",
  },
  secondaryButton: {
    minHeight: "50px",
    padding: "0 22px",
    borderRadius: "15px",
    border: "1px solid rgba(217, 179, 255, 0.2)",
    background: "rgba(255,255,255,0.03)",
    color: "#eadffd",
    fontSize: "0.96rem",
    fontWeight: 600,
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },
  secretBox: {
    width: "min(560px, 100%)",
    overflow: "hidden",
    marginTop: "22px",
    padding: "0 2px",
  },
  secretText: {
    margin: 0,
    padding: "18px 18px",
    borderRadius: "18px",
    border: "1px solid rgba(211, 167, 255, 0.16)",
    background: "rgba(255,255,255,0.028)",
    color: "#e8dbfb",
    lineHeight: 1.75,
    fontSize: "1rem",
  },
  signature: {
    marginTop: "30px",
    color: "#d0b4f7",
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontStyle: "italic",
    fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
    opacity: 0.9,
  },
  photoFrame: {
    position: "absolute",
    padding: "6px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(223, 189, 255, 0.16)",
    backdropFilter: "blur(10px)",
  },
  photoImage: {
    display: "block",
    width: "100%",
    height: "auto",
    aspectRatio: "4 / 5",
    objectFit: "cover",
    borderRadius: "16px",
  },
  backgroundGlowA: {
    position: "absolute",
    top: "-120px",
    left: "-120px",
    width: "340px",
    height: "340px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(183, 114, 255, 0.18) 0%, rgba(183, 114, 255, 0.05) 46%, transparent 72%)",
    filter: "blur(24px)",
  },
  backgroundGlowB: {
    position: "absolute",
    bottom: "-140px",
    right: "-80px",
    width: "380px",
    height: "380px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255, 132, 196, 0.16) 0%, rgba(255, 132, 196, 0.05) 44%, transparent 72%)",
    filter: "blur(26px)",
  },
  backgroundGlowC: {
    position: "absolute",
    inset: "auto auto 10% 18%",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(181, 116, 255, 0.14) 0%, rgba(181, 116, 255, 0.04) 44%, transparent 72%)",
    filter: "blur(18px)",
  },
  particle: {
    position: "absolute",
    bottom: "-20px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(244, 217, 255, 0.9), rgba(190, 139, 255, 0.4))",
    zIndex: 1,
    pointerEvents: "none",
  },
  star: {
    position: "absolute",
    color: "rgba(232, 206, 255, 0.58)",
    fontSize: "0.84rem",
    zIndex: 1,
    pointerEvents: "none",
  },
  burstHeart: {
    position: "absolute",
    left: "50%",
    bottom: "18%",
    zIndex: 5,
    color: "#ff9bd2",
    fontSize: "1.4rem",
    pointerEvents: "none",
    textShadow: "0 0 16px rgba(255, 123, 192, 0.42)",
  },
};

export default TeAmoPage;