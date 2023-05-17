import React from "react";
import styles from "../styles/menu.module.css";
import MainTxt from "./util/Maintxt";
import { forwardRef } from "react";

const Menu = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <>
      <div className={styles.bg} ref={ref}>
        <div className={styles.container}>
          <div className={styles.top_container}>
            <div className={styles.maintxt}>
              <MainTxt text={"이번주 메뉴"} />
            </div>
            <p className={styles.date}>5월 20일</p>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.left_container}>
              <h1 className={styles.h1}>볶음우동</h1>
              <h2 className={styles.h2}>예약하기</h2>
              <form action="" className={styles.form}>
                <div className={styles.form_box}>
                  <input className={styles.input} type="text" placeholder="이름" />
                  <input className={styles.input} type="text" placeholder="소속" />
                  <input className={styles.input} type="text" placeholder="전화번호" />
                  <div className={styles.btn_container}>
                    <button className={styles.btn}>예약</button>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.right_container}>
              <img src="/yaki_udong.png" alt="yakiudong image" className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Menu;
