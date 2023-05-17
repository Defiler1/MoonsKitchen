import Main from "components/Main";
import "../lang/i18n";
import styles from "../styles/index.module.css";
import Profile from "components/Profile";
import Portfolio from "components/Portfolio";
import Menu from "components/Menu";
import Participants from "components/Participants";
import { Fragment, useRef } from "react";

export default function Home() {
  const mainPage = useRef<HTMLDivElement>(null);
  const profilePage = useRef<HTMLDivElement>(null);
  const portfolioPage = useRef<HTMLDivElement>(null);
  const menuPage = useRef(null);
  const participantsPage = useRef<HTMLDivElement>(null);

  const moveToMenu = () => {
    menuPage.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveToParticipants = () => {
    participantsPage.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const options = {
    // root: ,
    rootMargin: "0px",
    threshold: 0.5,
  };

  let observer = new IntersectionObserver(() => {}, options);

  return (
    <>
      <title>Moon's Kitchen</title>
      <div className={styles.main_container}>
        <Main ref={mainPage} moveToMenu={moveToMenu} moveToParticipants={moveToParticipants} />
        <Profile />
        <Portfolio />
        <Menu ref={menuPage} />
        <Participants ref={participantsPage} />
      </div>
    </>
  );
}
