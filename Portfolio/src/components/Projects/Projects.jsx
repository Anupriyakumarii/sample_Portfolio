import projects from "../../data/projects.json";
// import { getImageUrl } from "../../utilis";
import styles from "./Projects.module.css";
import image from "../../../public/project/project.png";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.containerr}>
              <img
                src={image}
                alt={`Image of ${project.title}`}
                className={styles.image}
              ></img>
              <h3 className={styles.titlee}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                  return (
                    <li key={id} className={styles.skill}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div className={styles.links}>
                <a href={project.demo} className={styles.link}>
                  Demo
                </a>
                <a href={project.source} className={styles.link}>
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
