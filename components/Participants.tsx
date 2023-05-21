import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import styles from "../styles/participants.module.css";
import ParticipantsCard from "./ParticipantsCard";
import MainTxt from "./util/Maintxt";
import { forwardRef, useEffect, useState } from "react";
import { Storage } from "util/firebase";
import { useTranslation } from "react-i18next";
import MobileMainTxt from "./util/MobileMainTxt";

const Participants = forwardRef<HTMLDivElement, any>((props, ref) => {
  const { t } = useTranslation();
  const [userNames, setUserNames] = useState<Array<string>>([]);

  useEffect(() => {
    async function getDatas() {
      const event = collection(Storage, "5월6일");
      const result = await getDocs(query(event, orderBy("timestamp"), limit(6)));
      result.docs.forEach((el) => {
        setUserNames((userNames) => [...userNames, el.data().name]);
      });
    }
    getDatas();
  }, []);

  return (
    <>
      <div className={styles.bg} ref={ref}>
        <div className={styles.container}>
          <div className={styles.top_container}>
            <MainTxt text={t(`index.participant_main`)} />
          </div>
          <div className={styles.bottom_container}>
            {userNames.map((name, idx) => {
              return <ParticipantsCard name={name} key={idx} />;
            })}
          </div>
        </div>
      </div>
      {/* 모바일 */}
      <div className={styles.mobile_bg}>
        <div className={styles.mobile_container}>
          <div className={styles.mobile_top_container}>
            <MobileMainTxt text={t(`index.participant_main`)} />
          </div>
          <div className={styles.mobile_bottom_container}>
            {userNames.map((name, idx) => {
              return <ParticipantsCard name={name} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
});

export default Participants;
