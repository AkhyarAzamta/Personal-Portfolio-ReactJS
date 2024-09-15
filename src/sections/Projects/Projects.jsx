import styles from './ProjectsStyles.module.css';
import sid from '../../assets/sid.png';
import freshBurger from '../../assets/fresh-burger.png';
import service from '../../assets/service.png';
import kasir from '../../assets/kasir.png';
import ImageCard from '../../common/ImageCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ImageCard
          src={freshBurger}
          link="https://restaurant-apps-project.vercel.app"
          h3="NongkiSkuy"
          p="Restaurant Web App"
        />
        <ImageCard
          src={service}
          link="https://github.com/AkhyarAzamta/go-home-services"
          h3="Go Home Services"
          p="Home Service Web App"
        />
        <ImageCard
          src={kasir}
          link="https://github.com/AkhyarAzamta/Kasir-App-ReactJS-"
          h3="Kasir App"
          p="Kasir App ReactJS"
        />
        <ImageCard
          src={sid}
          link="https://github.com/AkhyarAzamta/e-desa-upgrade"
          h3="Open SID"
          p="Sistem Informasi Desa"
        />
      </div>
    </section>
  );
}

export default Projects;
