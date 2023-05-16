import Main from "components/Main";
import "../lang/i18n";
import styles from "../styles/index.module.css";
import Profile from "components/Profile";
import Portfolio from "components/Portfolio";
import Menu from "components/Menu";

export default function Home() {
  return (
    <>
      <title>Moon's Kitchen</title>
      <div className={styles.main_container}>
        <Main />
        <Profile />
        <Portfolio />
        <Menu />
      </div>
    </>
  );
}
