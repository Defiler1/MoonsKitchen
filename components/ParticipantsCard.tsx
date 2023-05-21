import styles from "../styles/participantsCard.module.css";
import { CgProfile } from "react-icons/cg";

interface ParticipantsCardProps {
  name: string;
}

export default function ParticipantsCard({ name }: ParticipantsCardProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.circle}>
            {/* <img className={styles.img} src={"/xie.png"} alt={`${name}'s profile image`} /> */}
            <CgProfile className={styles.img} />
          </div>
        </div>
        <div className={styles.right_container}>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
    </>
  );
}
