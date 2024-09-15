import styles from './SkillsStyles.module.css';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.svg';
import php from '../../assets/php.svg';
import react from '../../assets/react.svg';
import laravel from '../../assets/laravel.svg';
import nodejs from '../../assets/nodejs.svg';
import webpack from '../../assets/webpack.svg';
import tailwind from '../../assets/tailwind.svg';
import bootstrap from '../../assets/bootstrap.svg';
import git from '../../assets/git.svg';
import SkillList from '../../common/SkillList';

function Skills() {

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML5" />
        <SkillList src={css} skill="CSS3" />
        <SkillList src={js} skill="JavaScript" />
        <SkillList src={php} skill="PHP" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        <SkillList src={laravel} skill="Laravel" />
        <SkillList src={nodejs} skill="NodeJS" />
        <SkillList src={webpack} skill="Webpack" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={tailwind} skill="Tailwind CSS" />
        <SkillList src={bootstrap} skill="Bootstrap" />
        <SkillList src={git} skill="Git" />
      </div>
    </section>
  );
}

export default Skills;
