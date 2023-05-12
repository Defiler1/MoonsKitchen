// 첫번째 페이지
import { useTranslation } from "./../node_modules/react-i18next/dist/es/useTranslation";
import MainTxt from "./util/maintxt";
import styles from "../styles/main.module.css";
import Image from "next/image";

export default function Main() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {/* 왼쪽 */}
      <div className={styles.left_container}>
        <div className={styles.lef_main_container}>
          <div className={styles.main_text}>
            <MainTxt text="Moon's Kitchen" />
          </div>
          <div className={styles.description}>
            <h2>{t(`index.main_description1`)}</h2>
            <h2>{t(`index.main_description2`)}</h2>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.filled_btn}>{t(`index.main_btn_reserve`)}</button>
            <button className={styles.empty_btn}>{t(`index.main_btn_participant`)}</button>
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className={styles.right_container}>
        <div className={styles.img_container}>
          <Image src="/main_img.jpg" layout="fill" alt="main img" />
        </div>
      </div>
    </div>
  );
}
