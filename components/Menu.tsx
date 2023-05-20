import React, { useRef } from "react";
import styles from "../styles/menu.module.css";
import { forwardRef } from "react";
import MainTxt from "./util/Maintxt";
import { addDoc, collection } from "firebase/firestore";
import { Storage } from "util/firebase";

const Menu = forwardRef<HTMLDivElement, any>((props, ref) => {
  const nameInput = useRef(null);
  const groupInput = useRef(null);
  const numberInput = useRef(null);

  const date = "5월6일"; // 이벤트 날짜, db문서이름

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
      });

      alert("예약되었습니다.");
      nameInput.current.value = "";
      groupInput.current.value = "";
      numberInput.current.value = "";
    } else {
      alert("폼을 모두 작성해주세요.");
    }
  };

  return (
    <>
      <div className={styles.bg} ref={ref}>
        <div className={styles.container}>
          <div className={styles.top_container}>
            <div className={styles.maintxt}>
              <MainTxt text={"이번주 메뉴"} />
            </div>
            <p className={styles.date}>23.05.20</p>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.left_container}>
              <h1 className={styles.h1}>볶음우동</h1>
              <h2 className={styles.h2}>예약하기</h2>
              <form action="" className={styles.form} onSubmit={onSubmit}>
                <div className={styles.form_box}>
                  <input className={styles.input} type="text" placeholder="이름" ref={nameInput} />
                  <input className={styles.input} type="text" placeholder="소속 ex) youngjin Univ" ref={groupInput} />
                  <input className={styles.input} type="text" placeholder="전화번호 ex) 000-0000-0000" ref={numberInput} />
                  <div className={styles.btn_container}>
                    <button className={styles.btn} onClick={submitInfo}>
                      예약
                    </button>
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
