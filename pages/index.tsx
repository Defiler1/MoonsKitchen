import "../lang/i18n";
import styles from "../styles/index.module.css";
import Profile from "components/Profile";
import Portfolio from "components/Portfolio";
import Menu from "components/Menu";
import Participants from "components/Participants";
import { Fragment, useRef } from "react";
import Main from "components/Main";
import { useTranslation } from "react-i18next";

export default function Home() {
  const mainPage = useRef<HTMLDivElement>(null);
  const profilePage = useRef<HTMLDivElement>(null);
  const portfolioPage = useRef<HTMLDivElement>(null);
  const menuPage = useRef(null);
  const participantsPage = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const moveToMenu = () => {
    menuPage.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveToParticipants = () => {
    participantsPage.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const date = "5월6일"; // firestore 에 저장할 콜렉션 이름
  const imgSrc = "/yaki_udong.png"; // 메뉴 이미지
  const imgAlt = "yakiudong image"; // 메뉴 이미지 alt

  return (
    <>
      <title>Moon's Kitchen</title>
      <div className={styles.main_container}>
        <Main ref={mainPage} moveToMenu={moveToMenu} moveToParticipants={moveToParticipants} />
        <Profile />
        <Portfolio />
        <Menu ref={menuPage} imgSrc={imgSrc} imgAlt={imgAlt} date={date} />
        <Participants ref={participantsPage} />
      </div>
    </>
  );
}
