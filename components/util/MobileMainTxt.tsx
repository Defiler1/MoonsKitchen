import styles from "../../styles/mobileMainTxt.module.css";

interface MobileMainTxtProps {
  text: string;
}

export default function MobileMainTxt({ text }: MobileMainTxtProps) {
  return <h1 className={`${styles.maintxt}`}>{text}</h1>;
}
