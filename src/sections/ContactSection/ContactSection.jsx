import styles from "./ContactSection.module.css";
import {
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { RiTeamLine } from "react-icons/ri";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import lexaContact from "../../assets/lexa-contact.png"; // reemplazá por tu imagen real

function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactCard}>
          <div className={styles.left}>
            <span className={styles.eyebrow}>CONTACTO</span>

            <h2 className={styles.title}>
              Trabajemos <span>juntos.</span>
            </h2>

            <p className={styles.description}>
              Si querés empezar a trabajar tu rendimiento mental, completá el
              formulario y contame un poco sobre vos, tu equipo o tu staff.
            </p>

            <form
              className={styles.form}
              action="https://formspree.io/f/TU_FORM_ID"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta desde lexa.coach"
              />

              <div className={styles.field}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="organizacion">Organización</label>
                <input
                  id="organizacion"
                  name="organizacion"
                  type="text"
                  placeholder='Si no tenés, escribí "No aplica"'
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contacto">Contacto</label>
                <input
                  id="contacto"
                  name="contacto"
                  type="text"
                  placeholder="Mail, Discord, X o el medio que prefieras"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="asunto">Asunto</label>
                <div className={styles.selectWrap}>
                  <select id="asunto" name="asunto" defaultValue="" required>
                    <option value="" disabled>
                      Seleccioná una opción
                    </option>
                    <option value="grupal">Grupal</option>
                    <option value="individual">Individual</option>
                    <option value="staff">Staff</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="6"
                  placeholder="Contame qué necesitás trabajar, tu contexto actual o qué te gustaría mejorar."
                  required
                />
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitBtn}>
                  <HiOutlineEnvelope />
                  Enviar consulta
                </button>
              </div>
            </form>

            <div className={styles.secondaryActions}>
              <a
                href="mailto:llexit505@gmail.com"
                className={styles.secondaryBtn}
              >
                <HiOutlineEnvelope />
                Enviar correo
              </a>

              <a
                href="https://x.com/lexa505"
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryBtn}
              >
                <FaXTwitter />
                Escribir en X
              </a>

             {/*  <a href="#contact" className={styles.secondaryBtn}>
                <FaDiscord />
                Discord
              </a> */}
            </div>

            <div className={styles.bottomNote}>
              <HiOutlineShieldCheck />
              <span>Confidencialidad garantizada en cada proceso.</span>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.portraitWrap}>
              <div className={styles.portraitGlow}></div>

              <div className={styles.portraitCircle}>
                <img
                  src={lexaContact}
                  alt="Lexa"
                  className={styles.portraitImg}
                />
              </div>
            </div>

           {/*  <a
              href="mailto:llexit505@gmail.com"
              className={`${styles.infoItem} ${styles.infoLink}`}
            >
              <span className={styles.infoIcon}>
                <HiOutlineEnvelope />
              </span>
              <span className={styles.infoText}>
                <strong>Email directo</strong>
                <small>llexit505@gmail.com</small>
              </span>
            </a> */}

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <RiTeamLine />
              </span>
              <span className={styles.infoText}>
                <strong>Sesiones online</strong>
                <small>Individuales, grupales o trabajo con staff.</small>
              </span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <HiOutlineClock />
              </span>
              <span className={styles.infoText}>
                <strong>Horario flexible</strong>
                <small>
                  Adaptado a entrenamientos, scrims y competencia.
                </small>
              </span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <HiOutlineShieldCheck />
              </span>
              <span className={styles.infoText}>
                <strong>Trabajo personalizado</strong>
                <small>
                  Cada proceso se ajusta al contexto, necesidad y objetivo real.
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;