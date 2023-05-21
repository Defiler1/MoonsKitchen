import React, { useRef } from "react";
import styles from "../styles/menu.module.css";
import { forwardRef } from "react";
import MainTxt from "./util/Maintxt";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Storage } from "util/firebase";
import { useTranslation } from "react-i18next";

const Menu = forwardRef<HTMLDivElement, any>(({ date, imgSrc, imgAlt }, ref) => {
  const nameInput = useRef(null);
  const groupInput = useRef(null);
  const numberInput = useRef(null);
  const { t } = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const submitInfo = async () => {
    if (nameInput.current.value && groupInput.current.value && numberInput.current.value) {
      // participants란 collection에 nameInput.current.value이라는 문서를 추가

      await addDoc(collection(Storage, date), {
        name: nameInput.current.value,
        group: groupInput.current.value,
        number: numberInput.current.value,
        timestamp: serverTimestamp(),
      });

      alert(t(`index.alert1`));
      nameInput.current.value = "";
      groupInput.current.value = "";
      numberInput.current.value = "";
    } else {
      alert(t(`index.alert2`));
    }
  };

  return (
    <>
      <div className={styles.bg} ref={ref}>
        <div className={styles.container}>
          <div className={styles.top_container}>
            <div className={styles.maintxt}>
              <MainTxt text={t(`index.menu_name`)} />
            </div>
            <p className={styles.date}>{t(`index.date`)}</p>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.left_container}>
              <h1 className={styles.h1}>{t(`index.menu_name`)}</h1>
              <h2 className={styles.h2}>{t(`index.menu_reserve`)}</h2>
              <form action="" className={styles.form} onSubmit={onSubmit}>
                <div className={styles.form_box}>
                  <input className={styles.input} type="text" placeholder={t(`index.placeholder1`)} ref={nameInput} />
                  <input className={styles.input} type="text" placeholder={t(`index.placeholder2`)} ref={groupInput} />
                  <input className={styles.input} type="text" placeholder={t(`index.placeholder3`)} ref={numberInput} />
                  <div className={styles.btn_container}>
                    <button className={styles.btn} onClick={submitInfo}>
                      {t(`index.reserve_btn`)}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.right_container}>
              <img src={imgSrc} alt={imgAlt} className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Menu;
