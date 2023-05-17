import styles from "../styles/participants.module.css";
import ParticipantsCard from "./ParticipantsCard";
import MainTxt from "./util/Maintxt";

export default function Participants() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.top_container}>
            <MainTxt text={"이번주 참가자"} />
          </div>
          <div className={styles.bottom_container}>
            <ParticipantsCard img={"/xie.png"} name={"Xie Lee"} />
            <ParticipantsCard img={"/xie.png"} name={"Xie Lee"} />
            <ParticipantsCard img={"/xie.png"} name={"Xie Lee"} />
            <ParticipantsCard img={"/xie.png"} name={"Xie Lee"} />
            <ParticipantsCard img={"/xie.png"} name={"Xie Lee"} />
            <ParticipantsCard img={"/xie.png"} name={"Xie Lee"} />
            <ParticipantsCard img={"/xie.png"} name={"Xie Lee"} />
          </div>
        </div>
      </div>
    </>
  );
}
