import styles from "../styles/participantsCard.module.css";

interface ParticipantsCardProps {
  img: string;
  name: string;
}

export default function ParticipantsCard({ img, name }: ParticipantsCardProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.circle}>
            <img className={styles.img} src={img} alt={`${name}'s profile image`} />
          </div>
        </div>
        <div className={styles.right_container}>
          <p className={styles.name}>{name}</p>
        </div>
      </div>
    </>
  );
}
