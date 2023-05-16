import styles from "../styles/portfolio.module.css";
import MainTxt from "./util/Maintxt";

export default function Portfolio() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.top_container}>
            <MainTxt text={"PortFolio"} />
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.img_container}>
              <img src="/portfolio.JPG " alt="portfolio food image compilation" className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
