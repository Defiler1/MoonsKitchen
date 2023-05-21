import { useTranslation } from "react-i18next";
import styles from "../styles/mobileProfile.module.css";
import MobileMainTxt from "./util/MobileMainTxt";

export default function MobileProfile() {
  const { t } = useTranslation();

  return (
    <div className={styles.mobile_bg}>
      <div className={styles.mobile_container}>
        <div className={styles.mobile_top_container}>
          <div className={styles.mobile_top_profile}>
            <div className={styles.mobile_main_txt}>
              <MobileMainTxt text="Chef" />
            </div>
            <div className={styles.mobile_main_profile}>
              <div className={styles.mobile_profile_img}>
                <img src="/mobile_profile.png" alt="handsome boy image" className={styles.mobile_img} />
              </div>
              <div className={styles.mobile_profile_description}>
                <p>{t(`index.profile_description1`)}</p>
                <p>{t(`index.profile_description2`)}</p>
                <p>{t(`index.profile_description5`)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobile_bottom_container}>
          <div className={styles.mobile_bottom_grid}>
            <img src="/food1.png" alt="food image1" className={styles.grid_img} />
            <img src="/food2.png" alt="food image2" className={styles.grid_img} />
            <img src="/food3.png" alt="food image3" className={styles.grid_img} />
            <img src="/food4.png" alt="food image4" className={styles.grid_img} />
            <img src="/food5.png" alt="food image5" className={styles.grid_img} />
            <img src="/food6.png" alt="food image6" className={styles.grid_img} />
            <img src="/food7.png" alt="food image7" className={styles.grid_img} />
            <img src="/food8.jpg" alt="food image8" className={styles.grid_img} />
            <img src="/food9.png" alt="food image9" className={styles.grid_img} />
          </div>
        </div>
      </div>
    </div>
  );
}
