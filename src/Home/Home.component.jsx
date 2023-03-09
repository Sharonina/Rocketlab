import React from "react";
import styles from "./Home.module.styl";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.gradientButtons}>
        <p>Capsules status:</p>
        <div className={styles.gradientButtonsGrid}>
          <button className={styles.gradientUno}>Active</button>
          <button className={styles.gradientDos}>Destroyed</button>
          <button className={styles.gradientTres}>Unknown</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
