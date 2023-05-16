// 첫번째 페이지
import MainTxt from "./util/Maintxt";
import styles from "../styles/main.module.css";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {/* 왼쪽 */}
      <div className={styles.left_container}>
        <div className={styles.left_main_container}>
          <div className={styles.main_text}>
            <MainTxt text="Moon's Kitchen" />
          </div>
          <div className={styles.light_description}>
            <h2>{t(`index.main_description1`)}</h2>
            <h2>{t(`index.main_description2`)}</h2>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.light_filled_btn}>{t(`index.main_btn_reserve`)}</button>
            <button className={styles.light_empty_btn}>{t(`index.main_btn_participant`)}</button>
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className={styles.right_container}>
        <img src="/main_img.png" alt="main img" className={styles.img} />
      </div>
    </div>
  );
}
