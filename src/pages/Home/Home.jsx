import HeroSection from "../../sections/HeroSection/HeroSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import ServicesSection from "../../sections/ServicesSection/ServicesSection";
import MethodologySection from "../../sections/MethodologySection/MethodologySection";
import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default Home;