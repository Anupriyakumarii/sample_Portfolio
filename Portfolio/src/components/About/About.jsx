import { getImageUrl } from "./../../utilis";
import style from "./About.module.css";

const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with laptop"
          className={style.aboutImg}
        ></img>
        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor Icon"
            ></img>
            <div className={style.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I am a Frontend development with experience in building
                responsive and optimized website
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Server Icon"
            ></img>
            <div className={style.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I am a Frontend development with experience in building
                responsive and optimized website
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui Icon"></img>
            <div className={style.aboutItemText}>
              <h3>UI Development</h3>
              <p>
                I am a Frontend development with experience in building
                responsive and optimized website
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
