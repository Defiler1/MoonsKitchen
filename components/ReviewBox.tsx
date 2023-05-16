import styles from "../styles/reviewbox.module.css";
import { AiFillStar } from "react-icons/ai";

interface ReviewBoxProps {
  img: string;
  stars: number;
  name: string;
  description: string;
}

export default function ReviewBox({ img, stars, name, description }: ReviewBoxProps) {
  const starsArr = new Array(stars).fill(0);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_container}>
          <div className={styles.top_container}>
            {/* image */}
            <div className={styles.img_container}>
              <img src={img} alt="reviewer's image" className={styles.img} />
            </div>
            {/* name, stars */}
            <div className={styles.name_container}>
              <p className={styles.name}>{name}</p>
              <div className={styles.stars}>
                {starsArr.map((el: number) => {
                  return <AiFillStar key={el + 1} fill="#FFBD29" size={25} />;
                })}
              </div>
            </div>
          </div>
          <div className={styles.bottom_container}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
