import styles from './HeroStyles.module.css';
import heroImg from '../../assets/pp2.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instaLight from '../../assets/instagram-light.svg';
import instaDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import downloadIcon from '../../assets/dl.svg'; // Tambahkan ini di bagian import

import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instaLight : instaDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Akhyar Azamta"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Akhyar Azamta
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://instagram.com/akhyarazamta" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/akhyarazamta" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/akhyarazamta/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Turning Ideas into Interactive and Impactful Web Experiences.
        </p>
        <a href={CV} download>
  <button className="hover">
  <img src={downloadIcon} alt="Download icon" className={styles.downloadIcon} />Resume
  </button>
</a>
      </div>
    </section>
  );
}

export default Hero;
