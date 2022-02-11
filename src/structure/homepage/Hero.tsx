import styles from "./Hero.module.css";

console.log(process.env);

const Hero = () => {
  return (
    <img
      alt="hero"
      src={`${process.env.REACT_APP_BASE_URL}/images/hero1.png`}
      className={styles.image}
    />
  );
};

export default Hero;
