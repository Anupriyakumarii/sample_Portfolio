import { getImageUrl } from "../../utilis";
import styles from "./Contact.module.css";

const contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p> Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email Icon"
          ></img>
          <a href="mailto:xyz@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin Icon"
          ></img>
          <a href="linkedin.com/in/anupriya-kumari-1473171a5/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="github Icon"
          ></img>
          <a href="">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default contact;
