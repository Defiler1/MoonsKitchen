import Main from "components/main";
import "../lang/i18n";
import { useTranslation } from "./../node_modules/react-i18next/dist/es/useTranslation";
import styles from "../styles/index.module.css";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <title>Moon's Kitchen</title>
      </div>
      <div className={styles.main_container}>
        <div className={styles.first_page}>
          <Main />
        </div>
        <div className={styles.container}></div>
      </div>
    </>
  );
}
