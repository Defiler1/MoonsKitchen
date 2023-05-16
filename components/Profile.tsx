import { useTranslation } from "react-i18next";
import styles from "../styles/profile.module.css";
import MainTxt from "./util/Maintxt";
import ReviewBox from "./ReviewBox";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.maintxt}>
            <MainTxt text={"Chef"} />
          </div>
          <div className={styles.main_container}>
            {/* image */}
            <div className={styles.img_container}>
              <img src="/hansomeguy.jpg" alt="hansome chef image" className={styles.img} />
            </div>
            {/* description */}
            <div className={styles.description_conainer}>
              <div className={styles.des_box}>
                <p>{t(`index.profile_description1`)}</p>
                <p>{t(`index.profile_description2`)}</p>
                <p>{t(`index.profile_description3`)}</p>
                <p>{t(`index.profile_description4`)}</p>
                <p>{t(`index.profile_description5`)}</p>
                <p>{t(`index.profile_description6`)}</p>
              </div>
              {/* 리뷰박스 */}
              <div className={styles.review_container}>
                <ReviewBox img={"/xie.png"} stars={5} name={"Xie Lee"} description={"His food is Legend"} />
                <ReviewBox img={"/shin.png"} stars={5} name={"Lifull Shin"} description={"I felt mom’s spagetti in his food"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          p {
            font-size: 36px;
            font-weight: bold;
            color: #535657;
          }
        `}
      </style>
    </>
  );
}
