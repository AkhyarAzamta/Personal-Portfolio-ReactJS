import styles from './CertificateStyles.module.css';
import sid from '../../assets/sid.png';
import frontEnd from '../../assets/fe.png';
import backeEnd from '../../assets/be.png';
import git from '../../assets/git.png';
import network from '../../assets/network.png';
import ImageCard from '../../common/ImageCard';

function Certificate() {
  return (
    <section id="certificate" className={styles.container}>
      <h1 className="sectionTitle">Certificate</h1>
      <div className={styles.projectsContainer}>
        <ImageCard
          src={frontEnd}
          link="https://www.dicoding.com/certificates/1RXY1OKN1PVM"
          h3="Frontend Development"
          p="HTML5, CSS3, JavaScript"
        />
        <ImageCard
          src={backeEnd}
          link="https://www.dicoding.com/certificates/KEXLLW13MXG2"
          h3="Backend Development"
          p="NodeJS, ExpressJS, MysQL"
        />
        <ImageCard
          src={git}
          link="https://www.dicoding.com/certificates/1OP80G3J8XQK"
          h3="GIT"
          p="Version Control System"
        /><ImageCard
          src={network}
          link="https://www.dicoding.com/certificates/MRZMQN6GNPYQ"
          h3="Networking Fundamentals"
          p="IP, DNS, Security"
        />
      </div>
    </section>
  );
}

export default Certificate;
