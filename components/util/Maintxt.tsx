import styles from "../../styles/maintxt.module.css";

interface MainTxtProps {
  text: string;
}

export default function MainTxt({ text }: MainTxtProps) {
  return <h1 className={`${styles.maintxt}`}>{text}</h1>;
}
