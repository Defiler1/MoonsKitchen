// 첫번째 페이지
import styles from "../styles/main.module.css";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";
import MainTxt from "./util/Maintxt";

const Main = forwardRef<HTMLDivElement, any>(({ moveToMenu, moveToParticipants }, ref) => {
  const { t } = useTranslation();

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        {/* 왼쪽 */}
        <div className={styles.left_container}>
          <div className={styles.left_main_container}>
            <div className={styles.main_text}>
              <MainTxt text="Moon's Kitchen" />
            </div>

            {/* Description */}
            <div className={styles.description}>
              <h2>{t(`index.main_description1`)}</h2>
              <h2>{t(`index.main_description2`)}</h2>
            </div>

            <div className={styles.btn_container}>
              <button className={styles.filled_btn} onClick={moveToMenu}>
                {t(`index.main_btn_reserve`)}
              </button>
              <button className={styles.empty_btn} onClick={moveToParticipants}>
                {t(`index.main_btn_participant`)}
              </button>
            </div>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className={styles.right_container}>
          <img src="/main_img.png" alt="main image" className={styles.img} />
        </div>
      </div>
      {/* 모바일 */}
      <div className={styles.mobile_container}>
        <div className={styles.mobile_header}>
          <h1 className={styles.mobile_header_h1}>Moon's Kitchen</h1>
        </div>
        {/* 모바일 이미지 */}
        <div className={styles.mobile_img_container}>
          <img src="/main_img.png" alt="main image" className={styles.mobile_img} />
        </div>
        <div className={styles.mobile_description}>
          <h2>{t(`index.main_description3`)}</h2>
          <h2>{t(`index.main_description4`)}</h2>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.filled_btn} onClick={moveToMenu}>
            {t(`index.main_btn_reserve`)}
          </button>
        </div>
      </div>
    </div>
  );
});
export default Main;
