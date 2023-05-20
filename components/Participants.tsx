import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import styles from "../styles/participants.module.css";
import ParticipantsCard from "./ParticipantsCard";
import MainTxt from "./util/Maintxt";
import { forwardRef, useEffect, useState } from "react";
import { Storage } from "util/firebase";

const Participants = forwardRef<HTMLDivElement, any>((props, ref) => {
  const [userNames, setUserNames] = useState<Array<string>>([]);

  useEffect(() => {
    async function getDatas() {
      const event = collection(Storage, "5월6일");
      const result = await getDocs(query(event, orderBy("timestamp"), limit(9)));
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
            <MainTxt text={"이번주 참가자"} />
          </div>
          <div className={styles.bottom_container}>
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
