import { getImageUrl } from "../../utilis";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hi,I am Joe</h1>
        <p className={style.description}>
          I am a Front-end Development with 2 years of experience using
          React.Reach out If you would like to learn more!
        </p>
        <a href="mailto:xyz@gmaill.com" className={style.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/aboutImageee.png")}
        alt="Hero image of me"
        className={style.HeroImg}
      ></img>
      <div className={style.topblur} />
      <div className={style.bottomblur} />
    </section>
  );
};

export default Hero;
